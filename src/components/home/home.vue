<template>
  <div>
    <div class="home">
       home
    </div>
  </div>
</template>

<script>

  export default {
    name: 'home',
    data() {
      return {
        
      }
    },
    computed:{
     
    },
    created() {
      this.getMark() 
      
    
    },
    mounted() {
    
    },
    methods: {
      getMark() {
              this.axios({
                url: "http://mapi.mujingsen.com/index.php/" + 'Home/Index/getGoodsMarking',
                method: 'get',
              }).then((res) => {
                console.log(res)
              }).catch((err) => {
                console.log(err);
              });
            },
     
     
      
     
   
    },

  
    components: {
     
    }
  }
</script>

<style lang="less">
 
</style>

<style lang="less" scoped>
  
</style>
