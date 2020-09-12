const TAG_DICT = [
  { text: '招聘', value: 'hire', ext: ['招聘'] },
  { text: '求职', value: 'job_seeking', ext: ['求职'] },
  { text: '出售', value: 'sale', ext: ['出售', '转让'] },
  { text: '出租', value: 'rent', ext: ['出租', '转租'] },
  { text: '求购', value: 'buying', ext: ['求购'] },
  { text: '拼车', value: 'carpool', ext: ['拼车'] },
  { text: '顺风车', value: 'hitchhike', ext: ['顺风车', '找车拉物',] },
  { text: '广告', value: 'ad', ext: ['广告'] },
  { text: '交友', value: 'pal', ext: ['交友'] },
  { text: '打听', value: 'ask_about', ext: ['打听', '求学'] },
  { text: '求助', value: 'help_seeking', ext: ['求助'] },
  { text: '其它', value: 'others', ext: ['其它', '找中介'] }
]

const TAGS = TAG_DICT.reduce((arr, cur) => {
  arr.push(...(cur.ext || []))
  return arr
}, [])

module.exports = {
  TAG_DICT,
  TAGS
}
