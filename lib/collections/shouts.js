Shouts = new Mongo.Collection("shouts");

Shouts.deny({
  update : function(){ return true },
  remove : function(){ return true },
});

validateShout = function(text, name){
  if (text && name) return true;
  else
  if (Meteor.isClient){
    $("#name-field").addClass("red");
    $("#text-field").addClass("red");
  }
  return false;
}

Meteor.methods({
  addShout: function (text, name){
    if (validateShout(text, name)) {
      Shouts.insert({
        text: text,
        createdAt: new Date(),
        name: name
      });
      if (Meteor.isClient){
        $("#text-field").removeClass("red");
        $("#name-field").removeClass("red");
      }
    }
  }
});
