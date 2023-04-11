const fs = require('fs');

// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if (err) {
//     console.log(`hello error: ${err}`);
//   }
//   console.log(data.toString());
// });

// writing files
// const text = 'Hello World!'
// fs.writeFile('./docs/blog1.txt', text, () => {
//   console.log('file was written');
// })

// directories
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('directory successfully created')
  })
} else {
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('folder deleted');
  })
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('file deleted');
    }
  )
}
