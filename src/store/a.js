export default {
    state:{
        show:false,
        ad:345
        
    },
    getters:{
        not_show(state){//这里的state对应着上面这个state
            return !state.show;
        }
    },
    mutations:{
        switch_dialog(state){//这里的state对应着上面这个state
            state.show = 2222;
            //你还可以在这里执行其他的操作改变state
        },
        a(state){
            state.ad = 3333;
        }
    },
    actions:{
        switch_dialog(context){//这里的context和我们使用的$store拥有相同的对象和方法
            context.commit('switch_dialog');
            context.commit('a');
            //你还可以在这里触发其他的mutations方法
        },
    }
}