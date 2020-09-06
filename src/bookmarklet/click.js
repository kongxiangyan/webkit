const click = () => {
  let btn = document.getElementById('cigaret')
  let times = 0
  setInterval(() => {
    btn.click()
    console.log(`[Mobius Webkit] click times -> ${times++}`)
  }, 10)
}
