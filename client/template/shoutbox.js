var scrollDown = function(){
  var content = document.getElementById('shoutContent');
  content.scrollTop = content.scrollHeight;
};

Template.shoutbox.helpers({
  shout: function(){
    var shoutCursor =  Shouts.find({}, {sort: {createdAt: 1}});
    shoutObj=[]
    var _i = 0
     shoutCursor.forEach(function(shout){
        createdWhen = moment(shout.createdAt).fromNow();
        shoutObj[_i]={name:shout.name, text:shout.text, createdAt:createdWhen}
        _i++;
    });
    return shoutObj;
    }
});

Template.shoutbox.events({
'submit .new-shout' : function(event){
      var text = event.target.text.value;
      var name = event.target.name.value;
      Meteor.call("addShout", text, name);
      event.target.text.value="";  // reset shout input field to empty - placeholder
      var content = document.getElementById('shoutContent');
      content.scrollTop = content.scrollHeight;
      return false;
      }
});

Template.shoutbox.rendered = function(){
  scrollDown();                             //scroll down after shouts are rendered in DOM
  this.find('#shoutContent')._uihooks = {
    insertElement: function (node, next){   //insert new shout and scroll down
      $(node).insertBefore(next);
      scrollDown();
    }
  }
};
