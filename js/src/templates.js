this["wk"] = this["wk"] || {};
this["wk"]["templates"] = this["wk"]["templates"] || {};

this["wk"]["templates"]["app"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n<div class=\"container\">\n  <div id=\"app_container\"></div>\n</div>";
  });

this["wk"]["templates"]["home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n<h1>Test JS</h1>";
  });