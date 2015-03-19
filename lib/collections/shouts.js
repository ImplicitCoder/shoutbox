Shouts = new Mongo.Collection("shouts");

Shouts.deny({
  update : function(){ return true },
  remove : function(){ return true },
});

Meteor.methods({
  addShout: function (text, name){
    Shouts.insert({
      text: text,
      createdAt: new Date(),
      name: name
    });
  }
});
