$ ->
  # =============
  # = Home View =
  # =============
  class wk.ui.Home extends Backbone.View
    el: '#app_container'
    template: wk.templates['home']
    
    initialize: () ->
      # _.bindAll @
      @render()
      
    render: () ->
      $(@el).html(@template())
