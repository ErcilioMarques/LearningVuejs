new Vue({
    el:'#app',
    data:{
        title: 'Hello world',
        cssClass:'',
        clicks:0,
        // counter:0,
    },
    methods: {

        mudarTitulo(){
            this.title='we changed';
        },

        incrementa(){
            this.clicks++;
            // this.counter=this.clicks*2;
        },

    },
    computed:{

        counter(){
            return this.clicks *2 ;
        }
    }
});