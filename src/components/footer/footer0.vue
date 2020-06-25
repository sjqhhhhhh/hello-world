<template>
    <div class="foot2017">
        <ul class="footer clearfix">
            <li class="fl" :class="{isSelected:index == parseInt(isClass)}" v-for="(item,index) in tabbar.font" :key="item.id" @click="tab(index)">
                <div class="icon"><img :src="tabbar.Icon[index]"></div>
                <div class="icon active"><img :src="tabbar.isIcon[index]"></div>
                <div class="font">{{item}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'footer0',
        data() {
            return {
                isClass:sessionStorage.getItem('router_index'),
                tabbar:{
                    // isIcon:[require('@/assets/goods_m2.png'),require('@/assets/goods_c2.png'),require('@/assets/goods_g2.png'),require('@/assets/cart_x2.png'),require('@/assets/user_x2.png')],
                    // Icon:[require('@/assets/goods_m1.png'),require('@/assets/goods_c1.png'),require('@/assets/goods_g1.png'),require('@/assets/nav_cart.png'),require('@/assets/user_x1.png')],
                    // font:['木晶森','聚清超市','聚清拼购','购物车','个人中心']
                    isIcon:[require('@/assets/Crush-2.png'),require('@/assets/Crush-3.png'),require('@/assets/goods_g2.png'),require('@/assets/cart_x2.png'),require('@/assets/user_x2.png')],
                    Icon:[require('@/assets/Crush-1.png'),require('@/assets/Crush-4.png'),require('@/assets/goods_g1.png'),require('@/assets/nav_cart.png'),require('@/assets/user_x1.png')],
                    font:['首页','分类','团购','购物车','个人中心']
                }
            }
        },
        methods:{
            tab:function(index){
                switch(index){
                    case 0:
                        this.$router.push({
                            path:'/home'
                        });
                        break;
                    case 1:
                        this.$router.push({
                            path:'/marketClass'
                        });
                        break;
                    case 2:
                        this.$router.push({
                            path:'/groupList'
                        });
                        break;
                    // case 2:
                    //     this.$router.push({
                    //         path:'/yesterday'
                    //     });
                    //     break;
                    // case 2:
                    //     if(!sessionStorage.getItem('user_ID')){
                    //             this.$router.push({
                    //             path:'/LogoIn'
                    //         });
                    //         return
                    //     }else{
                    //         this.$router.push({
                    //             path:'/Cart'
                    //         });
                    //     break;
                    //     };
                    case 3:
                   
                            this.$router.push({
                                path:'/cart'
                            });
                        
                        break;
                    case 4:
                     
                            this.$router.push({
                                path:'/person'
                            });
                        break;
                        
                    }
                }
            },
        watch:{
            '$route'(to,from){
                // if(to.path == '/person'){
                //     if(sessionStorage.getItem('user_ID')){
                //         this.$router.push({
                //             path:'/person'
                //         });
                //     }else{
                //         this.$router.push({
                //             path:'/LogoIn'
                //         });
                //     }
                // }
                this.isClass = sessionStorage.getItem('router_index');
            }
        },
        created(){
        }
    }
</script>
<style lang="less" scoped>
    .foot2017{
        height: 1.1rem;
        width:100%;
        // height:1rem;
        .footer{
            width:100%;
            height:1.1rem;
            position:fixed;
            bottom:0;
            left:0;
            box-shadow: 0 1px 5px #888;
            background:#fff;
            z-index:99999999;
            li{
                width:20%;
                text-align:center;
                .font{
                    font-size:.2rem;
                    color:#787878;
                }
                .icon{
                    height:.65rem;
                    position:relative;
                    display:block;
                    img{
                        position:absolute;
                        left:0;
                        top:0;
                        bottom:0;
                        right:0;
                        margin:auto;
                        margin-bottom:.1rem;
                    }
                }
                .icon.active{
                    display:none;
                }
            }
            li.isSelected{
                .font{
                    color:#ed3851;
                }
                .icon.active{
                    display:block;
                }

                .icon{
                    display:none;
                }
            }
            li:nth-child(1){
                img{
                    width:.42rem;
                    height:.42rem;
                }
            }
            li:nth-child(2){
                img{
                    width:.42rem;
                    height:.42rem;
                }
            }
            li:nth-child(3){
                img{
                    width:.42rem;
                    height:.42rem;

                }
            }
            li:nth-child(4){
                img{
                    width:.42rem;
                    height:.42rem;
                }
            }
             li:nth-child(5){
                img{
                    width:.42rem;
                    height:.42rem;
                }
            }
        }
    }
</style>
