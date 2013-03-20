(function() {
  var HobbyWindowViewModel, MainViewModel,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  MainViewModel = (function() {

    function MainViewModel() {
      var _this = this;
      amplify.subscribe("HomeViewModel.Save", function(hobby) {});
    }

    return MainViewModel;

  })();

  HobbyWindowViewModel = (function() {

    function HobbyWindowViewModel() {
      this.save = __bind(this.save, this);

    }

    HobbyWindowViewModel.Hobby = ko.observable();

    HobbyWindowViewModel.prototype.save = function() {
      return amplify.publish("HomeViewModel.Save", this.Hobby());
    };

    return HobbyWindowViewModel;

  })();

}).call(this);
