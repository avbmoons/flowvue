<template>
    <div class="product-card" >
         <h2>{{ title }}</h2>
        <p>{{ price }} &euro;</p>
        <img :src="imageUrl" alt="photo">
        <button class="toCart" v-on:click="onClick">Add to cart</button>
    </div>
    <!-- <div class="product-card" v-on:click="onClick">
         <h2>{{ title }}</h2>
        <p>{{ price }} &euro;</p>
        <img :src="imageUrl" alt="photo">
        <button class="toCart" v-on:click="onClick">Add to cart</button>
    </div> -->
</template>

<script>
//import image from '../../public/catalog/image'
//import image from '../assets/catalog/image'

export default  {
    name: 'ProductCard',
    props: {
    title: String,
    price: Number,
    image: String
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
@import '../styles/productCard/productCard.scss'
// .product-card{
//   margin: 10px;
//   width: 100px;
//   height: 150px;
//   border: 1px solid green;
// }
</style>