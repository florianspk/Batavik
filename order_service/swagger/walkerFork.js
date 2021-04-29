const fs = require('fs-extra')
const pathfs = require('path')
const PromiseB = require('bluebird')
process.on('message', async path => {
  const dirs = []
  const files = []
  if (path.includes('node_modules') || pathfs.basename(path).charAt(0) === '.') return process.send({ dirs, npmPath: null })
  await fs
    .readdir(path)
    .then(async _files => {
      await PromiseB.map(_files, async file => {
        if (file.charAt(0) === '.') return
        const absolutePath = pathfs.resolve(path, file)
        const stat = await fs.stat(absolutePath)
        if (stat.isDirectory() && !absolutePath.includes('node_modules')) {
          dirs.push(absolutePath)
        } else if(stat.isFile() && pathfs.extname(absolutePath) === '.js') {
          files.push(absolutePath)
        }
      })

      process.send({
        dirs, files
      })
    })
});