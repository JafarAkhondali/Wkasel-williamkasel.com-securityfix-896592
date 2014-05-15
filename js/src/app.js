window.wk = {
  collections: {},
  models: {},
  app: {},
  ui: {},
  routers: {},
  events: {},
  init: function() {
    this.ui.app = new this.ui.App();
    this.events = new AppEvents();
    this.routers.main = new this.routers.Main();
    Backbone.history.start({
      pushState: false
    });
    console.log('App Ready');
    return true;
  }
};

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  var _ref;
  window.AppEvents = (function() {
    function AppEvents() {}

    _(AppEvents.prototype).extend(Backbone.Events);

    return AppEvents;

  })();
  return wk.routers.Main = (function(_super) {
    __extends(Main, _super);

    function Main() {
      _ref = Main.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Main.prototype.routes = {
      "": "index"
    };

    Main.prototype.index = function() {
      return wk.ui.home = new wk.ui.Home;
    };

    return Main;

  })(Backbone.Router);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  var _ref;
  return wk.models.App = (function(_super) {
    __extends(App, _super);

    function App() {
      _ref = App.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    App.prototype.defaults = {
      title: 'William Kasel'
    };

    return App;

  })(Backbone.Model);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  var _ref;
  return wk.ui.App = (function(_super) {
    __extends(App, _super);

    function App() {
      _ref = App.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    App.prototype.el = '#home';

    App.prototype.template = wk.templates['app'];

    App.prototype.render = function() {
      return $(this.el).html(this.template({
        data: ''
      }));
    };

    App.prototype.initialize = function() {
      return this.render();
    };

    App.prototype.renderResults = function(event, data) {
      this.render();
      return console.log('collection changed: ', event, data);
    };

    App.prototype.error = function(event, data) {
      return console.log('collection error: ', event, data);
    };

    App.prototype.home = function() {
      return wk.routers.main.navigate('/', true);
    };

    return App;

  })(Backbone.View);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$(function() {
  var _ref;
  return wk.ui.Home = (function(_super) {
    __extends(Home, _super);

    function Home() {
      _ref = Home.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Home.prototype.el = '#app_container';

    Home.prototype.template = wk.templates['home'];

    Home.prototype.initialize = function() {
      return this.render();
    };

    Home.prototype.render = function() {
      return $(this.el).html(this.template());
    };

    return Home;

  })(Backbone.View);
});

$(function() {
  return wk.init();
});

$(function() {
  Handlebars.registerHelper("debug", function(optionalValue) {
    console.log("Current Context");
    console.log("====================");
    console.log(this);
  });
  Handlebars.registerHelper("ifCond", function(v1, v2, options) {
    console.log('ifCond', v1, v1);
    if (v1 === v2) {
      return options.fn(this);
    }
    return options.inverse(this);
  });
  return Handlebars.registerHelper("round", function(n, decimal) {
    return Math.floor(n * decimal) / decimal;
  });
});
