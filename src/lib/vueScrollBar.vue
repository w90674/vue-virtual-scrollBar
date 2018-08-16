<template>
  <div class="scroll-wrapper" @mouseenter="showScroll=true" @mouseleave="showScroll=false">
      <div class="scroll-container" ref="scroll-container" :style="{height:height}">
        <slot class="slot">
           插入需要滚动内容
        </slot>
      </div>
      <!-- 虚拟滚动条（Y轴） -->
      <div :class="['vertical-bar',{active:showScroll}]"  ref="vertical-bar" :style="{height:height,}" @scroll="handleScroll">
        <div class="virtual-content" ref="virtual-content"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'virtual-scroll-bar',
  props:['width','height'],
  data:function(){
     return{
       showScroll:false,
     }
  },
  mounted(){
    this.$nextTick(()=>{
      this.$refs['virtual-content'].style.height=this.$refs['scroll-container'].scrollHeight+'px'
    })
  },
  methods:{
    handleScroll(){
    this.$refs['scroll-container'].scrollTop=this.$refs['vertical-bar'].scrollTop
    }
  },
}
</script>
<style scoped>
.scroll-wrapper{
  width: 500px;
  position: relative;
}
.scroll-container{
  height: 200px;
  width: 100%;
  border: 1px solid darkgreen;
  overflow:hidden;
}
.vertical-bar{
  position: absolute;
  top: 1%;
  right: 0px;
  width: 16px;
  transform: scaleY(.98);
  overflow-x: hidden;
  overflow-y: auto;
  opacity: 0;
  transition: opacity .5s;
}
.vertical-bar.active{
  opacity: 1;
}
/* ::-webkit-scrollbar{
  width: 10px;
  height: 178px;
  border-radius:5px; 
}
::-webkit-scrollbar-thumb{
  background: red;
  border-radius:5px; 
}
::-webkit-scrollbar-track{
  background: darkcyan;
  border-radius:2px; 
} */
</style>

