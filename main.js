window.onscroll = function () { scrollFunction() }

function scrollFunction () {
  const scroller = document.querySelector('.scroll-to-top')
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scroller.classList.add('show')
  } else {
    scroller.classList.remove('show')
  }
}
