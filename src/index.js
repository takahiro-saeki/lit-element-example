import Header from './Header.js'

setTimeout(() => {
  const item = document.querySelector('app-header')
  item.setAttribute('headerTitle', 'changed')
}, 2000)
