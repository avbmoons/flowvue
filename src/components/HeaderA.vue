<template>
    <header class="header">
      <section class="header-top">
        <div class="logo-box">
          <router-link class="logo" to="/"><img class="logo" src="../assets/logo/logo-prime-oth.png" alt="logo"></router-link>
        </div>
        <div class="menu-box">
          <div class="menu-box__block">
            <router-link class="menu-item" to="/catalog">Bouquets&Flowers</router-link>
            <router-link class="menu-item" to="/catalog">Gifts&Cards</router-link>
            <router-link class="menu-item" to="/terms">Delivery&Payment</router-link>
            <router-link class="menu-item" to="/about">About us</router-link>
          </div>
        </div>
        <div class="menu-mini-box">
          <button class="menu-mini-button" type="button" onclick="menuOpen();">
            <img src="../assets/icons/burger24-2.png" alt="menu" />
          </button>
          <div class="menu-mini">
            <div class="menu-mini-close">
              <button class="close-button" onclick="menuClose();">
                &#10006;
              </button>
            </div>
            <a class="menu-item" href="../pages/catalog.html"
              >Bouquets&Flowers</a
            >
            <a class="menu-item" href="../pages/catalog.html">Gifts&Cards</a>
            <a class="menu-item" href="../pages/terms.html">Delivery&Payment</a>
            <a class="menu-item" href="../pages/about.html">About us</a>
          </div>
        </div>
        <div class="services-box">
          <div class="services-box__block">
            <div class="search-box">
              <button
                class="service-button to-search"
                type="button"
                v-on:click="onToggleSearch"         
              >
                <img src="../assets/icons/search24.png" alt="search" />
              </button>
            </div>
            <div class="user-box">
              <button class="service-button" type="button" id="btnUser">
                <img src="../assets/icons/user24.png" alt="user" />
              </button>
            </div>
            <div class="cart-box">
              <button
                class="service-button"
                type="button"
                id="btnCart"
                v-on:click="onToggleCart"
              >
                <img src="../assets/icons/cart24.png" alt="cart" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="header-bottom">
        <Search
          v-bind:isVisibleSearch="isVisibleSearch"
          v-on:closeSearch="onToggleSearch"
          v-if="isVisibleSearch">
        </Search>
        <Cart 
          v-bind:isVisibleCart="isVisibleCart"
          v-on:close="onToggleCart" 
          v-if="isVisibleCart">
        </Cart>
      </section>
    </header>
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
    isVisibleCart: false,
    isVisibleSearch: false      
    }

  },
  methods: {
    onToggleCart() {
      this.isVisibleCart = !this.isVisibleCart
    },
    onToggleSearch(){
      this.isVisibleSearch=!this.isVisibleSearch
    }
  },
  mounted() {
    // this.$store.dispatch('loadProducts');
    this.$store.dispatch('loadCart');
  }
    
}
</script>

<style lang="scss" scoped>
@import '../styles/headerA/headerA.scss'
</style>
