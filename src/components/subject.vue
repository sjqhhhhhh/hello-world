<template>
    <div>
        <router-view ></router-view>
        <foot-nav></foot-nav>
    </div>
</template>
<script>
    import footNav from './footer/footer0.vue'
    export default {
        name : 'subject',
        data(){
            return {
                
            }
        },
        components:{
            footNav
        }
    }
</script>