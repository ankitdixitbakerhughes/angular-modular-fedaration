const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe-app',
  remotes: {
    "host-app": "http://localhost:4300/remoteEntry.js",
  },
  exposes: {
    './TodoListModule': './projects/mfe-app/src/app/todo-list/todo-list.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
