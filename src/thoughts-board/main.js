const path = require('path')
const resolve = (...srcs) => path.resolve(__dirname, ...srcs)
const fse = require('fs-extra')
const { TAG_DICT, TAGS } = require('./const.js')
const { exit } = require('process')
const { version } = require('os')

const isTrue = val => !!val
const isAllSpace = value => new RegExp(/^[ ]+$/).test(value)
const trim = str => str.trim()

const cleanText = str => str.replace(/『.*』/g, '')

const formatTags = tag => {
  if (!TAGS.includes(tag)) {
    console.log(`未定义的标签：${tag}`)
    return []
  } else {
    return TAG_DICT.reduce((tags, cur) => {
      if (tags.length === 1) {
        return tags
      }
      if (cur.ext.includes(tag)) {
        tags.push(cur.value)
      }
      return tags
    }, [])
  }
}

fse.readFile(resolve('raw.txt'), 'utf-8').then((text) => {
  text = cleanText(text)

  const items = text.split('\r\n').map(trim).filter(isTrue).map(item => item.split('@'))
  const docs = items.map(item => {
    let [content, tel, publish_time] = item
    let [tag, detail] = content.replace('【', '').replace('】', '@').split('@')
    let tags = formatTags(tag)
    if (tags.length === 0) {
      exit(1)
    }

    return {
      detail,
      tags: tags,
      tel: tel || '',
      title: '',
      qq: '',
      wechat: '',
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
