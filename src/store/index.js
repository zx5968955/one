import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
import a from './a.js'

export default new vuex.Store({
    modules: {
        zx: a
    }

})