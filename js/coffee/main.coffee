$ ->
  Handlebars.registerHelper "debug", (optionalValue) ->
    console.log "Current Context"
    console.log "===================="
    console.log this
    # if optionalValue
#       console.log "Value"
#       console.log "===================="
#       console.log optionalValue
    return
  
  Handlebars.registerHelper "ifCond", (v1, v2, options) ->
    console.log 'ifCond', v1, v1
    return options.fn(this)  if v1 is v2
    options.inverse this
  
  
  
  Handlebars.registerHelper "round", (n, decimal) ->
    return Math.floor(n * decimal) / decimal