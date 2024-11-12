const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
        }
    },
    methods: {
        myMethod(){

        },
        getAllCars(){
            console.log("er i metoden getAllCars");
        },
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
