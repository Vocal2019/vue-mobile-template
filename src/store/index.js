import Vue from 'vue'
import Vuex from 'vuex'
import user from './m_user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { user }
})
