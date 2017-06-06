Package.describe({
  name: 'ranux:algebra-js',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Agebra.js wrapper for Meteor.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/RANUX/algebra-js',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.1');
  api.add_files('lib/algebra-0.2.6.min.js', 'client');
});
