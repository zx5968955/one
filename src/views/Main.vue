<style lang="less" scoped>
</style>
<template>
    <div @click="this.switch_dialog">
     <div>
        {{this.not_show}}
        {{$store.state.zx.ad}}
         
     </div>
     <sjld></sjld>
     <div v-focus></div>
     <div v-dir2></div>
    </div>

</template>

<script>

import {mapState,mapGetters,mapActions} from 'vuex'; //先要引入
export default {
    data() {
        return {
              name:"zhang"          
        }
    },
    computed: {
      ...mapState({
      show:state=>state.zx.ad
    }),
      ...mapGetters([
         'not_show',
          
      ],
      ...mapGetters({
         counts:'not_show'//另外命名的写法
      })
        
      )
    },
    mounted(){
          
    },
    methods: {
       ...mapActions([
           'switch_dialog'//相当于$store.dispatch('switch_dialog')
       ]
           
       )
    },
    components:{
        
    },
    directives: {
    focus: {
    // 指令的定义
    inserted: function (el) {
     console.log("jindapzjeli")
    }
  }
}
}
</script>
