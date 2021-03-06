function loadSVG(src) {
  return new Promise((resolve) => {
    let ajax = new XMLHttpRequest();
    ajax.open('GET', src, true);
    ajax.send();
    ajax.onload = function (e) {
      let div = document.createElement('div');
      div.innerHTML = ajax.responseText;
      let svg = div.childNodes[1];
      resolve(svg);
    }
  })
}

function revise() {
  console.log(`【MP_SVG_REVISE】 Start`);
  let ueditor = document.getElementById('ueditor_0');
  let view = ueditor.contentDocument.getElementsByClassName('view')[0];
  let embeds = view.querySelectorAll('embed');
  console.log(`【MP_SVG_REVISE】 检测到 ${embeds.length} 个目标……`);
  let promises = [];

  embeds.forEach((embed, index) => {
    console.log(`【MP_SVG_REVISE】 第 ${index} 个……`);
    let parent_node = embed.parentNode;
    promises.push(new Promise(resolve => {
      loadSVG(embed.src).then(svg => {
        parent_node.insertBefore(svg, embed);
        parent_node.removeChild(embed);
        resolve();
      })
    }))
  });

  Promise.all(promises).then(() => {
    console.log('Revise complete！');
    alert('Revise complete！');
  })
}
revise()
