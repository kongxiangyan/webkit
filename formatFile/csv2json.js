const path = require('path')
const csvFilePath = './list-20200625.csv'
const c2j = require('csvtojson')
const fs = require('fs')

c2j().fromFile(path.resolve(__dirname, csvFilePath)).then(jsonObj => {
  let jsonText = ''
  jsonObj.map(item => {
    jsonText = jsonText + JSON.stringify(item) + '\n'
  })
  fs.writeFile(path.resolve(__dirname, 'list-20200625.json'), jsonText, 'utf-8', (err) => {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
})
