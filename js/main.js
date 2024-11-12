const baseUrl = "http://localhost:5180/api/cars"

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

            axios.get(baseUrl)
            .then(
                response => {
                    console.log(response)
                }
            )
            .catch(
                 error => {
                    console.log(error)
                 } 
            )



        },
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
