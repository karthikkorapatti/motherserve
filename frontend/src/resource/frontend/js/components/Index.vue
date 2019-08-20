<template>
  <div>

    <AppHeader/>
    <Banner/>
    <Breadcrumbs/>

    <div class="container margin_60_35">
        <div class="row">
            <MainMenu/>
              <router-view></router-view>
            <CartItems/>
        </div>
    </div>
    

    <AppFooter/>

    <modals-container/>

  </div>
</template>

<script>
  import AppHeader from './Header.vue'
  import Banner from './Banner.vue'
  import Breadcrumbs from './Breadcrumbs.vue'
  import MainMenu from './MainMenu.vue'
  import CartItems from './CartItems.vue'
  import AppFooter from './Footer.vue'

  export default{
    components:{
      AppHeader, Banner, Breadcrumbs, MainMenu, CartItems, AppFooter
    },
    data(){
      return{
        
      }
    },

    methods: {
      
      
    },
  }
</script>