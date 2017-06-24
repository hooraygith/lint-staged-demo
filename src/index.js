'use strict'

require('../vendor/font-awesome-4.7.0/font-awesome-changed.css')
require('../vendor/github.less')
require('../vendor/prism.less')
require('./css/reset.less')
require('./css/index.less')
const FastClick = require('fastclick')
window.FastClick = FastClick
const Vue = require('vue')
const router = require('./router')

const globalComponent = require('./component/global-component.js')
const globalFilter = require('./component/global-filter.js')
globalComponent.init()
globalFilter.init()

/* eslint-disable no-new */
const App = new Vue({
    router,
    data: {
        scrolled: false
    },
    created: function() {
        document.addEventListener('touchend', () => {
            if (document.body.scrollTop > 20) {
                this.scrolled = true
            } else {
                this.scrolled = false
            }
        }, {passive: true})
    }
})

App.$mount('#app')

console.log('success!!')
