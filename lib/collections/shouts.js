Shouts = new Mongo.Collection("shouts");

Shouts.deny({
  update : function(){ return true },
  remove : function(){ return true },
});

validateShout = function(text, name){
  if (text && name) return true;
  else return false;
}


Meteor.methods({
  addShout: function (text, name){
    if (validateShout(text, name)) {
    Shouts.insert({
      text: text,
      createdAt: new Date(),
      name: name
      });
    } else {

    }
  }
});
