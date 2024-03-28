<template>
  <div class="page">
    <h1 class="page-title">Home page</h1>
    <div class="search-block">
      <!-- <Search></Search> -->
      <!-- <button class="cart-button" type="button" v-on:click="onToggleCart">Корзина</button> -->
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
//import Search from '../components/Search.vue';
import ProductsList from '../components/ProductsList.vue';
import Cart from '../components/Cart.vue';
// @ is an alias to /src
export default {
  name:'Home',
  components:{
    // Search,
    ProductsList,
    Cart,
  },
  data() {
    return{
    isVisibleCart: false      
    }

  },
  // methods: {
  //   onToggleCart() {
  //     this.isVisibleCart = !this.isVisibleCart
  //   }
  // },
  mounted() {
    this.$store.dispatch('loadProducts');
    this.$store.dispatch('loadCart');
  }
}

</script>

<style scoped lang="scss">
@import '../styles/home/home.scss'
</style>
