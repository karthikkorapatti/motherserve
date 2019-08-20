<template>
  <div>   
    <frontend/>   
  </div>
</template>

<script>

import Frontend from './resource/frontend/js/components/Index';

export default {

  components:{
    Frontend
  },

  data(){
    return{

    }
  },
  mounted() {
    console.log('App Component mounted.')
  },
}
</script>
