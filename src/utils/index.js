export function flexible(window, document) {
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1

  // adjust body font size
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = 0.42666 + 'rem'
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  // setBodyFontSize();

  // set 1rem = viewWidth / 10
  function setRemUnit() {
    if (docEl.clientWidth < 1080) {  //临界点
      var rem = docEl.clientWidth / 10
      docEl.style.fontSize = rem + 'px'
      if (docEl.clientWidth > 700) {
        docEl.style.fontSize = 70 + 'px'
      } else if (docEl.clientWidth < 320) {
        docEl.style.fontSize = 30 + 'px'
      }
    }

  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}