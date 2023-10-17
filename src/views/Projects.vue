<template>
<div class="projects">
    
    <h1>Проекты:</h1>
    <div class="content">

        
        <div class="mask">

        
            <div class="projects-list" @wheel.prevent="wheel">

                <div class="page" ref="pages0">  
                    <slider-vue :images="['numia2.jpg','numia.jpg','numia3.jpg','avatar.jpg','avatar2.jpg']" class="slider" />
                    <h2>Numia</h2>
                    <p>Сервис в ВК в котором я принимал участие, когда работал в Involta, в отделе Numia</p>
                    <p>Мной проделена работа по созданию навигации, создан дашборд и категории в нем, мидвееры-затычки о категориях
                    в разработке и о категориях за подписку, полнустью переделана верстка после редизайна </p>   
                </div>
            
                <div class="page" ref="pages1">  
                    <slider-vue :images="['numia2.jpg','numia.jpg','numia3.jpg','avatar.jpg','avatar2.jpg']" class="slider"/>
                    <h2>Numia</h2>
                    
                </div>
            
                <div class="page" ref="pages2">  
                    <slider-vue :images="['numia2.jpg','numia.jpg','numia3.jpg','avatar.jpg','avatar2.jpg']" class="slider"/>
                    
                    <p>Сервис в ВК в котором я принимал участие, когда работал в Involta, в отделе Numia</p>
                    <p>Мной проделена работа по созданию навигации, создан дашборд и категории в нем, мидвееры-затычки о категориях
                    в разработке и о категориях за подписку, полнустью переделана верстка после редизайна </p>   
                </div>

                <div class="page" ref="pages3">  
                    <slider-vue :images="['numia2.jpg','numia.jpg','numia3.jpg','avatar.jpg','avatar2.jpg']" class="slider"/>
                    
                    <p>Сервис в ВК в котором я принимал участие, когда работал в Involta, в отделе Numia</p>
                    <p>Мной проделена работа по созданию навигации, создан дашборд и категории в нем, мидвееры-затычки о категориях
                    в разработке и о категориях за подписку, полнустью переделана верстка после редизайна </p>   
                </div>

            </div>
        
        </div>
    
        <div class="dots">
            <div :class="{ activePage: currentPage==0 }">&nbsp</div>
            <div :class="{ activePage: currentPage==1 }">&nbsp</div>
            <div :class="{ activePage: currentPage==2 }">&nbsp</div>
            <div :class="{ activePage: currentPage==3 }">&nbsp</div>
        </div>
    </div>
</div>
</template>
<script>
export default {  
    data() {
        return {
            currentPage:0,
            refs:[]
        }
    },
    mounted(){
        this.refs.push(this.$refs.pages0)
        this.refs.push(this.$refs.pages1)
        this.refs.push(this.$refs.pages2)
        this.refs.push(this.$refs.pages3)
    },
    methods: {
        wheel(event){
            if(this.currentPage>0){
                if(event.deltaY == -112.5){
                this.refs[this.currentPage].style.transform = `translateY(${this.currentPage*80}vh)`;
                //this.refs[this.currentPage].style.opacity = 0;
                this.currentPage--
                console.log(this.currentPage)
                // console.log(this.refs[this.currentPage] )
                // this.refs[this.currentPage].style.transform = `translateY(-500px)`;
                }
            }
            if(this.currentPage<3){
                if(event.deltaY == 112.5){
                    // this.refs[this.currentPage+1].style.transform = `translateY(500px)`;
                    this.currentPage++
                    console.log(this.currentPage)
                    this.refs[this.currentPage].style.transform = `translateY(${this.currentPage*-80}vh)`;
                
                } 
            }
            
        }
    },
}
</script>
<style lang="scss" scoped>

.content{
    display: flex;
    align-items: center;
    gap: 10px;
}
.mask{
    width: 100%;
    height: 80vh;
    overflow: hidden;
}
.projects-list{
    width: 100%;
    overflow-y: scroll;
    height: 80vh;
    
    .page{
        height: 80vh;
        width: 100%;
       // border-radius: 10px;
        background-color: rgb(57, 57, 133);
        color: black;
        padding: 15px;
        box-sizing: border-box;
        transition: all .8s ease-in-out; 
        h2{
            margin: 0px 0px 10px 0px;
        }
        .slider{
            float: right;
        }
        
    }
    
}

.dots{
    .activePage{
        background-color: #78a4b0;
        transition: all .3s ease-in-out;  
        transform: scale(1.3);
    }
    
    div{
        display: block;
        height: 15px;
        width: 15px;
        background-color: rgba(255, 255, 255, 0.397);
        margin-bottom: 5px;
    }
}

@media (min-width: 900px) {
    .projects-list {
        overflow-y: hidden;
    }
    
  }
</style>