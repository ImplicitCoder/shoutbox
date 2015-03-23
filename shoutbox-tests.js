
Tinytest.add('example', function (test) {
  test.equal(true, false);
});

if (Meteor.isClient) {
  testAsyncMulti("async testen", [
    function(test, expect){
      Meteor.call("addShout", "shout text", "shouter name", expect(function(result){
        test.equal(result, null);
      }));

    }

  ]);
}
