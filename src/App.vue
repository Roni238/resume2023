<template>
  <div class="wrapp">
    
      <router-view/>
    
    

    <nav>
      <router-link to="/">Главная</router-link>
      <router-link to="/Projects">Проекты</router-link>
      <router-link to="/2">Навыки</router-link>
      <router-link to="/3">Опыт работы</router-link>

      <!-- <router-link to="/about">Связаться</router-link> -->
    </nav>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "Radiotechnika";
  src: url("Radiotechnika.ttf");
}
body{
  margin: 0;
  background: linear-gradient(0deg, #7c85a6 0%,  #525c8d 100%);
  background-image: url("assets/sky12.png");
  background-size: auto;
  background-repeat: no-repeat;
  height: 100vh;
 // background-color: #88BDBC;
  //color:  #AAABB8 ;
  color: #4e4c4a;
}
#app {
  font-family: 'Radiotechnika', sans-serif;
}

.wrapp{
  position: relative;
  max-height: 100vh;
  width: 1200px;
  margin: auto;
}
nav {
  padding: 3px;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
  //justify-content: space-between;
  position: fixed;
  bottom: 2%;
  width:1200px;
  animation: ani1 1.1s ease-in-out;
  a {
    margin: 0px 15px;
    color: #4e4c4a;
    text-decoration: none;
    text-shadow: 0px 0px 14px #000000;
    
    &.router-link-exact-active {
      color: #78a4b0;
      border-bottom: #78a4b0 solid 2px;
      padding-bottom: 5px;
      padding-bottom: 5px;
    }
    
  }
  a:hover{
    color: #78a4b0;
    border-bottom: #78a4b0 solid 2px;
    padding-bottom: 5px;
  }
 
 
}

@keyframes ani1 {
  0% {transform: translateY(-35px);opacity: 0;}
  100% {transform: translateY(0px);opacity: 1;}
}
</style>
