$ ->
  # ========================
  # = Global Event Manager =
  # ========================    
  class window.AppEvents
    _(@::).extend Backbone.Events
  
  # ==========
  # = Router =
  # ==========
  class wk.routers.Main extends Backbone.Router
    routes:
      "":"index"
    index: () ->
      wk.ui.home = new wk.ui.Home
      