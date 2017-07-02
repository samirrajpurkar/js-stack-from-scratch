import 'babel-polyfill'
// To use some of the recent ES features in client code,
// like Promises we need to include Babel Polyfill

import { APP_CONTAINER_SELECTOR } from '../shared/config'

document.querySelector(APP_CONTAINER_SELECTOR).innerHTML = '<h1>Hello Webpack, how can I improve</h1>'
