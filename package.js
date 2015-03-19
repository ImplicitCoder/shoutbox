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
      'momentjs:moment@2.9.0',
      'mrt:jquery-ui@1.9.2',
      'sacha:spin@2.0.4',
      'twbs:bootstrap@3.3.2',
      'mongo',
      'livedata'
  ]);
 api.versionsFrom('METEOR@1.0.4.1');
  api.add_files('client/template/styles/subscriptions.js', 'client');
  api.add_files('client/template/shoutbox.html','client');
  api.add_files('lib/collections/shouts.js', both);
  api.add_files('server/publications.js', 'server');
  api.add_files('server/fixtures.js', 'server');
  api.add_files('client/template/shoutbox.js', 'client');
  api.add_files('client/template/styles/shoutbox.css', 'client');
});
