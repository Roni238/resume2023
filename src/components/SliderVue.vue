<template>
    <div class="slider">
        <div class="ribbon" ref="ribbon">
            <div class="box">
                <div class="slide">
                    <img :src="require(`@/assets/projects/${images[0]}`)">
                </div>
            </div>

            <div class="box">
                <div class="slide">
                    <img :src="require(`@/assets/projects/${images[1]}`)">
                </div>
            </div>

            <div class="box">
                <div class="slide">
                    <img :src="require(`@/assets/projects/${images[2]}`)">
                </div>
            </div>

            <div class="box">
                <div class="slide">
                    <img :src="require(`@/assets/projects/${images[3]}`)">
                </div>
            </div>
            <div class="box">
                <div class="slide">
                    <img :src="require(`@/assets/projects/${images[4]}`)">
                </div>
            </div>
        </div>

        <button @click="increment">+</button>
        <button @click="decriment">-</button>
        
    </div>
    
    <!-- <div class="slider">
        <div class="current_image"></div>
        <div class="current_image"></div>
        <div class="current_image"></div> -->

       
        
        <!-- <div class="current_image"></div>
        <div class="current_image"></div> 
        <div class="current_image"></div> -->
                <!-- <img :src="require(`@/assets/projects/${images[position]}`)" alt="" ref="image"> -->
                <!-- <img :src="require(`@/assets/projects/${images[0]}`)" alt="" ref="image"> -->
                <!-- <transition-group name="list">
                    <img :src="require(`@/assets/projects/${img}`)" alt="" ref="image" v-for="img in images">
                </transition-group> -->
                
            
        
         
        <!-- <div v-for="img, index in images" class="current_image">
            
                <img v-if="index == position" :src="require(`@/assets/projects/${img}`)" alt="">  
        </div> -->

        
    <!-- </div> -->
    
</template>
<script>
export default {
    name:'slider-vue',
    props:{
        images:{
            type:Array,
            required:true
        }
    },
    data(){
        return{
            position:0,
            offsetPx:0
        }
    },
    methods:{
        increment(){
            if(Math.abs(this.offsetPx/500 )<this.images.length-1){
                this.offsetPx-=500
                this.$refs.ribbon.style.transform = `translateX(${this.offsetPx}px)`;
            }
        },
        decriment(){
            if(Math.abs(this.offsetPx/500 )>0){
                this.offsetPx+=500
                this.$refs.ribbon.style.transform = `translateX(${this.offsetPx}px)`;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.slider{
    max-width: 500px;
    overflow: hidden;
    white-space: nowrap;
    position: relative;

    .ribbon{
        transition: all .3s ease-in-out;  
    }
    .box{
        background: #33333379;
        height: 400px;
        width: 500px;  
        display: inline-block;

        .slide{
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;

            img{
                height: 100%;
                max-width: 100%;
            }
        }
    }

    button{
        top: 0px;
        position: absolute;
        height: 100%;
        width: 40px;
        background-color: rgba(48, 48, 48, 0.446);
        color: rgb(255, 255, 255);
        border: none;
        cursor: pointer;
        
    }
    button:nth-child(2){
        right: 0px;
    }

}


</style>