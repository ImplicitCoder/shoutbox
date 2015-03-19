Router.configure({
  waitOn: function(){
    return [Meteor.subscribe('shouts')];
  }
});
