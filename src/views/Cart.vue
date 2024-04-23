<template>
    <div class="page">
    <h1 class="page-title">Cart page</h1>
    <!-- <Cart 
      v-bind:isVisibleCart="isVisibleCart"
      v-on:close="onToggleCart" 
      v-if="isVisibleCart">
    </Cart> -->
    <Cart class="cart-page"></Cart>
    </div>
  </template>
  
  <script>
  import Cart from '../components/Cart.vue';

  export default {
    name: 'CartPage',
    components:{
      Cart,
    },
    // data() {
    // return{
    // isVisibleCart: true      
    // },
    mounted() {
      this.$store.dispatch('loadCart');
    }
  }
  
  </script>
  
  <style scoped lang="scss">
  @import '../styles/cart/cart.scss'
  </style>
  