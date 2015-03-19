Package.describe({
  name: 'baze:shoutbox',
  version: '0.0.1',
  summary: 'Reactive shoutbox without login, auto scroll-down.',
  git: 'https://github.com/debaze/shoutbox.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  var both = ['client', 'server'];

  api.use([
      'session',
      'templating',
      'momentjs:moment',
      'mrt:jquery-ui',
      'sacha:spin',
      'twbs:bootstrap',
      'mongo',
      'livedata'
  ]);

  api.add_files('client/template/styles/subscriptions.js', 'client');
  api.add_files('client/template/shoutbox.html','client');
  api.add_files('lib/collections/shouts.js', both);
  api.add_files('server/publications.js', 'server');
  api.add_files('server/fixtures.js', 'server');
  api.add_files('client/template/shoutbox.js', 'client');
  api.add_files('client/template/styles/shoutbox.css', 'client');
});
