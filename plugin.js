const chokidar = require('chokidar');

const watcher = chokidar.watch('./', {
  ignored: ['node_modules*', '.idea'],

})

// watcher.on('all', (event, path) => {
//   console.log(event, path);
// });

const hmrPlugin = (ctx, next) => {
  console.log(ctx, next)
  console.log('hmr')
  next()
}

module.exports = hmrPlugin

