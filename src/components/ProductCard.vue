<template>
    <div class="product" data-id="11">
        <div class="product-image" data-id="11">
          <img :src="imageUrl" alt="photo">
        </div>
        <div class="product-info" data-id="11">
          <a class="product-title" href="#">{{ title }}</a>
          <div class="product-price-box">
            <p class="price-text">from</p>
            <p class="price-value">{{ price }}</p>
            <p class="price-currency">&euro;</p>
          </div>
        </div>
        <div class="product-button" data-id="11">
          <button class="to-cart" type="button" v-on:click="onClick">Add to cart</button>
        </div>
        <!-- <button class="product-button" type="button" data-id="11" v-on:click="onClick">Add to cart</button>
        <div class="product-button" data-id="11"> 
    </div>--> 
    </div>
</template>

<script>
//import image from '../../public/catalog/image'
//import image from '../assets/catalog/image'

export default  {
    name: 'ProductCard',
    props: {
    title: String,
    price: Number,
    image: String,
    isPopular: Boolean,
    isNew: Boolean,
    isPromo: Boolean
  },
  // data(){
  //   return{
  //     image
  //   }
  // },
  computed: {
    imageUrl() {
      return require(`./../assets/catalog/${this.image}`)
    }
  },
  methods: {
    onClick() {
      this.$emit('add')
    }
  }
};
</script>

<style scoped lang="scss">
@import '../styles/productCard/productCard.scss';
</style>