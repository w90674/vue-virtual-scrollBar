import vueScrollBar from './lib/vueScrollBar'

const virtualScrollBar = {
    install: function(Vue) {
        Vue.component('vScrollBar', vueScrollBar)
    }
};
// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(virtualScrollBar)
}
export default virtualScrollBar