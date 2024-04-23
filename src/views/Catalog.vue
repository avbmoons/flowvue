<template>
    <div class="page">
    <!-- <h1 class="page-title">Catalog page</h1> -->
    <div class="hero">
      <DeliveryBox></DeliveryBox>
    </div>
    <ProductsList></ProductsList>
    <Cart 
      v-bind:isVisibleCart="isVisibleCart"
      v-on:close="onToggleCart" 
      v-if="isVisibleCart">
    </Cart>
    </div>
  </template>
  
  <script>
  import ProductsList from '../components/ProductsList.vue';
  import Cart from '../components/Cart.vue';
  import DeliveryBox from '../components/DeliveryBox.vue';

  export default {
    name: 'Catalog',
    components:{
      ProductsList,
      Cart,
      DeliveryBox,
    },
    data() {
    return{
    isVisibleCart: false      
    }
  },

    mounted() {
    this.$store.dispatch('loadProducts');
    this.$store.dispatch('loadCart');
  }
  }
  
  </script>
  
  <style scoped lang="scss">
  @import '../styles/catalog/catalog.scss'
  </style>
  