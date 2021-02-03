let component: any = {}

export  function bindComponent (instance: any) {
  component = instance
}

export  function showToast (opt: ShowOpt) {
  component.show(opt)
}
