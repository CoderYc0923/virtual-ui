let copydir = require('copy-dir')
copydir.sync(
  process.cwd() + '/src.docs',
  process.cwd() + 'VirtualUiDoc/docs',
  {
    utimes: true,
    mode: true,
    cover: true
  },
  function (err) {
    if (err) throw err
    console.log('done')
  }
)