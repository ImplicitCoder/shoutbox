Meteor.publish("shouts", function(){
  return Shouts.find();
});
