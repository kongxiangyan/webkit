// fetches the document for the given embedding_element
function getSubDocument(embedding_element) {
  if (embedding_element.contentDocument) {
    return embedding_element.contentDocument;
  }
  else {
    var subdoc = null;
    try {
      subdoc = embedding_element.getSVGDocument();
    } catch (e) { }
    return subdoc;
  }
}

function loadSVG(src) {
  var ajax = new XMLHttpRequest();
  ajax.open("GET", src, true);
  ajax.send();
  ajax.onload = function (e) {
    var div = document.createElement("div");
    div.innerHTML = ajax.responseText;
    console.info(div)
  }
}
loadSVG("https://mmbiz.qlogo.cn/mmbiz_svg/VNMic85jx3X4JvsFib2qye7gxKtJzaFLku7AVX4xia3zT88f1K33E2Y4EBeEcawLv5fcfwZKQYaPdH6ejpy8U0IUN9TuviauWUD7/0?wx_fmt=svg")
