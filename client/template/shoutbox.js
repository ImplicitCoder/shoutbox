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
    },

    scrollDown: function(){     //Scrolldown to last shout
    Meteor.defer(function (){   //Wait until DOM is populated
      var content = document.getElementById('shoutContent');
      content.scrollTop = content.scrollHeight;
    });
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
