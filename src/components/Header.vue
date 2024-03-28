<template>
  <div class="header">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/cart">Cart</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="services">
      <Search></Search>
      <button class="cart-button" type="button" v-on:click="onToggleCart">Корзина</button>      
    </div>

    <Cart 
      v-bind:isVisibleCart="isVisibleCart"
      v-on:close="onToggleCart" 
      v-if="isVisibleCart"
      >
    </Cart>    
  </div>

</template>

<script>
import Search from './Search.vue';
import Cart from '../components/Cart.vue';
export default {
    name: 'Header',
    components:{
      Search,
      Cart,
    },
    data() {
    return{
    isVisibleCart: false      
    }

  },
  methods: {
    onToggleCart() {
      this.isVisibleCart = !this.isVisibleCart
    }
  },
  mounted() {
    // this.$store.dispatch('loadProducts');
    this.$store.dispatch('loadCart');
  }
    
}
</script>

<style lang="scss" scoped>
@import '../styles/header/header.scss'
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// .header{
//   background-color:aqua;
// }
// #nav {
//   padding: 30px;
//   background-color:aqua;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>