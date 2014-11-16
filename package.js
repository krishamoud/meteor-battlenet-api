Package.describe({
  name: 'khamoud:battle-net',
  summary: 'Battlenet API for meteor',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Npm.depends({'battlenet-api': '0.4.7'});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('khamoud:battle-net.js', 'server');
  api.export('bnet');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('khamoud:battle-net');
  api.addFiles('khamoud:battle-net-tests.js');
});
