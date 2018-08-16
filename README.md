### declare
- 1、user for myselft to learining how to publish an package to npm
- 2、do it just for fun
- 3、it can create a virutal scrollbar in vertical direction

###preview demo
http://pdj97cjik.bkt.clouddn.com/vue-scorllbar.mp4

### install
```
npm install vue-virtual-scroll-bar -s
```
####  use in vue
```
import vueScroll from '../node_modules/vue-scroll-bar/dist/vueVirtualScrollBar'
Vue.use(vueScroll)
```
```
 <v-scroll-bar height="100px" width="200px">
     <ul>
        <li v-for="i in 10">{{i}}</li>
      </ul>
    </v-scroll-bar>
```
>you should set a container with and height attribute

