interface PaginationOpt {
  request: Function
}

enum PtStatusEnum {
  loading = 0,
  more = 1,
  noMore = 2
}

class Pagination {
  private readonly request: Function = () => {}

  private lists: any[] = []

  private currentPage: number = 1

  private pageSize: number = 15

  private total: number = 0

  private status: PtStatusEnum = PtStatusEnum.more

  constructor (opt: PaginationOpt) {
    this.request = opt.request

    this.clear()
  }

  get getLists () {
    return this.lists
  }

  get getCurrentPage () {
    return this.currentPage
  }

  get getPageSize () {
    return this.pageSize
  }

  get getTotal () {
    return this.total
  }

  get getStatus () {
    return this.status
  }

  clear () {
    this.lists = []
    this.currentPage = 1
    this.pageSize = 15
    this.total = 0
    this.status = PtStatusEnum.more
  }

  getData () {
    return this.request({ current: this.currentPage, size: this.pageSize })
      .then((res: ResponsePageOpt) => {
        this.lists = this.lists.concat(res.result.records)
        this.pageSize = res.result.size
        this.currentPage = res.result.current
        this.total = res.result.total
      })
      .catch((e: any) => {
        console.log(e)
      })
  }

  async getMoreData () {
    if (this.lists.length >= this.total) {
      this.status = PtStatusEnum.noMore

      return
    }

    this.status = PtStatusEnum.loading

    this.currentPage++

    await this.getData()

    if (this.lists.length >= this.total) {
      this.status = PtStatusEnum.noMore
    } else {
      this.status = PtStatusEnum.more
    }
  }

  refresh () {
    this.clear()
    this.getData()
  }
}

export default Pagination
