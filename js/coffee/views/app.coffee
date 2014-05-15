$ ->
  # ============
  # = App View =
  # ============
  class wk.ui.App extends Backbone.View
    el: '#home'
    template: wk.templates['app']
    render: () ->
      $(@el).html(@template({data:''}))
    
    initialize: () ->
      @render()
      # @collection = new wk.collections.Search
      # @listenTo @collection, 'sync', @renderResults
      # @listenTo @collection, 'error', @error
      
    renderResults: (event, data) ->
      @render()
      # cf.routers.main.navigate('/results', true)
      console.log 'collection changed: ', event, data
    
    error: (event, data) ->
      # window.location.reload()
      # cf.routers.main.navigate('/results', true)
      console.log 'collection error: ', event, data
      
    home: () ->
      wk.routers.main.navigate('/', true)