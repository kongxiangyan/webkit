const path = require('path')
const resolve = (...srcs) => path.resolve(__dirname, ...srcs)
const fse = require('fs-extra')

const isTrue = value => !!value
const isAllSpace = value => new RegExp(/^[ ]+$/).test(value)
const trim = str => str.trim()

fse.readFile(resolve('raw.txt'), 'utf-8').then((text) => {
  // text = text.replace('『14条信息汇总』', '')

  const items = text.split('\r\n').map(trim).filter(isTrue).map(item => item.split('@'))
  const docs = items.map(item => {
    let [content, tel, publish_time] = item
    return {
      content: content,
      tel: tel || '',
      publish_time: publish_time || +new Date()
    }
  })

  const jsonText = docs.reduce((acc, doc) => {
    return acc + JSON.stringify(doc) + '\n'
  }, '')
  fse.writeFile(resolve('docs.json'), jsonText, 'utf-8').then(() => {
    console.log('Saved!')
  })
})

console.log(resolve('src'))
