window.wk =
  collections: {}
  models: {}
  app: {}
  ui: {}
  routers: {}
  events: {}
  init: () ->
    @ui.app = new @ui.App()
    @events = new AppEvents()
    @routers.main = new @routers.Main()
    Backbone.history.start({pushState: false})
    console.log('App Ready')
    true