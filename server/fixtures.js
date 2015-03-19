if (Shouts.find().count() === 0) {
var now = new Date().getTime();

Shouts.insert({
name: "Shoutbox",
createdAt: now,
text: "Welcome, I'm ready!"
});
}
