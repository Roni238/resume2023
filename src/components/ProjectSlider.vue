<template>

    <div class="page" ref="pages">  
        <slider-vue :images="['numia2.jpg','numia.jpg','numia3.jpg','avatar.jpg','avatar2.jpg']" class="slider" />
        <h2>Numia</h2>
        <p>Сервис в ВК в котором я принимал участие, когда работал в Involta, в отделе Numia</p>
        <p>Мной проделена работа по созданию навигации, создан дашборд и категории в нем, мидвееры-затычки о категориях
        в разработке и о категориях за подписку, полнустью переделана верстка после редизайна </p>   
    </div>

    <div class="page" ref="pages">  
        <slider-vue :images="['numia2.jpg','numia.jpg','numia3.jpg','avatar.jpg','avatar2.jpg']" class="slider"/>
        <h2>Numia</h2>
        <p>Сервис в ВК в котором я принимал участие, когда работал в Involta, в отделе Numia</p>
        <p>Мной проделена работа по созданию навигации, создан дашборд и категории в нем, мидвееры-затычки о категориях
        в разработке и о категориях за подписку, полнустью переделана верстка после редизайна </p>   
    </div>

    <div class="page" ref="pages">  
        <slider-vue :images="['numia2.jpg','numia.jpg','numia3.jpg','avatar.jpg','avatar2.jpg']" class="slider"/>
        <h2>Numia</h2>
        <p>Сервис в ВК в котором я принимал участие, когда работал в Involta, в отделе Numia</p>
        <p>Мной проделена работа по созданию навигации, создан дашборд и категории в нем, мидвееры-затычки о категориях
        в разработке и о категориях за подписку, полнустью переделана верстка после редизайна </p>   
    </div>
</template>
<script>
export default {
    name:'project-slider',
    data() {
        return {
            currentPage:0,
            offsetPx:0
        }
    },
    methods: {
        wheel(event){
            if(this.currentPage>0){
                if(event.deltaY == 112.5){
                this.currentPage--
                console.log(this.currentPage)
                console.log(this.$refs.pages)
                // this.$refs.pages[1].style.transform = `translateY(500px)`;
                }
            }
            if(this.currentPage<3){
                if(event.deltaY == -112.5){
                this.currentPage++
                console.log(this.currentPage)
                } 
            }
            
        }
    },
}
</script>
<style lang="scss" scoped>
.page{
    height: 80vh;
    width: 100%;
    background-color: #ffffff;
    padding: 15px;
    box-sizing: border-box;
    h2{
        margin: 0px 0px 10px 0px;
    }
    .slider{
        float: right;
    }
    
}
.page:nth-child(2){
    background-color: #d84a4a;
}
.page:nth-child(3){
    background-color: #2d5acc;
}
</style>