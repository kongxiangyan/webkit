let inialized; (function () { let controlBtns = { 'container': null, 'plus': null, 'minus': null, 'display': null, 'name': null, 'counter': null, setCounter: function (number) { this.counter.innerHTML = `🐌现在是 👉${number}👈 倍速 💪`; } }; let rate = 1.5; function setRate() { rate = Number(rate.toFixed(1)); videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(rate); controlBtns.setCounter(rate); return rate; } /* 初始化控制元素并写入页面 */ function initializeControlBtn() { var controlBtnContainer = document.createElement('div'); controlBtnContainer.style = ` position: fixed; z-index: 1000; top: 0; left: 0; width: 400px; height: 180px; display: flex; flex-flow: row wrap; justify-content: space-around; align-items: center; background-color: rgba(66, 66, 66, 66); `; controlBtns.container = controlBtnContainer; controlBtnContainer.onmouseover = (e) => { e.relatedTarget.style.opacity = 1; }; let controlBtnStyle = ` display: block; width: 100px; height: 40px; line-height: 40px; background-color: #666; border: 2px solid #000; color: #fff; text-align: center; cursor: pointer; `; let wordStyle = ` flex: 0 0 100%; height: 40px; line-height: 40px; text-align: center; font-weight: bold; font-size: 18px; color: #fff; `; var nameArea = document.createElement('div'); nameArea.style = wordStyle; nameArea.innerHTML = '视频加速器🚀'; controlBtns.name = nameArea; controlBtnContainer.appendChild(nameArea); var counterArea = document.createElement('div'); counterArea.style = wordStyle + 'color: #419d78;'; counterArea.innerHTML = `Let's go!`; controlBtns.counter = counterArea; controlBtnContainer.appendChild(counterArea); /* TODO: 造几个控制按钮，可封装 */ var plusBtn = document.createElement('div'); plusBtn.style = controlBtnStyle; plusBtn.innerHTML = 'Plus'; /* plusBtn.onclick = accelerate; */ controlBtns.plus = plusBtn; controlBtnContainer.appendChild(plusBtn); var minusBtn = document.createElement('div'); minusBtn.style = controlBtnStyle; minusBtn.innerHTML = 'Minus'; /* minusBtn.onclick = slowdown; */ controlBtns.minus = minusBtn; controlBtnContainer.appendChild(minusBtn); var displayBtn = document.createElement('div'); displayBtn.style = controlBtnStyle; displayBtn.innerHTML = 'Hide'; /* displayBtn.onclick = toggleDisplay; */ controlBtns.display = displayBtn; controlBtnContainer.appendChild(displayBtn); document.body.appendChild(controlBtnContainer); } /* 选择性初始化（避免重复初始化） */ if (!inialized) { initializeControlBtn(); inialized != inialized; } /* accelerate */ function accelerate() { rate += 0.1; setRate() } /* slowdown */ function slowdown() { rate -= 0.1; setRate() } /* toggle pane's display */ function toggleDisplay() { let controlBtnContainer = controlBtns.container; /* if (controlBtnContainer.display) { controlBtnContainer.display = true; } let display = controlBtnContainer.display = !controlBtnContainer.display; */ controlBtnContainer.style.opacity = 0; } controlBtns.plus.onclick = () => { accelerate() }; controlBtns.minus.onclick = () => { slowdown() }; controlBtns.display.onclick = () => { toggleDisplay() }; }())
