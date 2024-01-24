const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'host-app',
  remotes: {
    "mfe-app": "http://localhost:4400/remoteEntry.js",
  },
  exposes: {
    './SharedService': './projects/host-app/src/app/shared.service.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
