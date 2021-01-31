<template>
  <div id="app">
  <Nav />

    
    <router-view />
  </div>
</template>
<script>
import Nav from "@/components/Nav"

export default {
  components: { Nav,
  
   },
   data(){
    return{
    

    
    
    };
  } 
    
  };
</script>
<style>
*{
   
  box-sizing: border-box;
  font-family: "roboto";
}
body {
  color:#86c238;
  background: url("https://forum.reallusion.com/uploads/images/d0f3b63e-b132-47f4-85be-b0ea.jpg");
  background-size: 50%;
  background-repeat: no-repeat;
    background-attachment: fixed;
     background-position: left;
  margin: 0;
  
}
</style>
