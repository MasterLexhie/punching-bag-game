new Vue({
    el: '#app',
    data: {
        bagHealth: 100,
        healthEnd: false
    },
    methods: {
        punch: function(){
            this.bagHealth -=10;
            
            if (this.bagHealth <= 0) {
                return this.healthEnd = true;
            }


        },
        restart: function(){
            this.bagHealth = 100;
            return this.healthEnd = false

        }
    }
    // computed:{

    // }
})