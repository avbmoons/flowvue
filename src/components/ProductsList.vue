<template>
    <div class="catalog">
      <div class="catalog__heading">
        <p class="heading-prime">Catalog</p>
        <div class="filters">
          <button class="filter-button" id="filterButton" type="button">
            <img src="../assets/icons/filter24.png" alt="filter" />
          </button>
          <button class="filter-button" id="sortButton" type="button">
            <img src="../assets/icons/sort24.png" alt="sort" />
          </button>
        </div>
      </div>
      <div class="catalog__block">
        <ProductCard 
          v-for="product of list" 
          v-bind:key="product.id"
          v-bind:title="product.title"
          v-bind:price="product.price"
          v-bind:image="product.image"
          v-on:add="onAdd(product)"
        ></ProductCard>        
      </div>
 
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';

//import products from '../../public/localData/catalogData.json'
export default {
    name:'ProductsList',
    components:{
        ProductCard
    },
    computed:{
    list(){
      return this.$store.getters.products 
    }
  },
  //   props: {
  //   list: Array
  // },
  methods: {
    onAdd(product) {
      // this.$emit('add', product)
      this.$store.dispatch('addToCart',product);
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/productList/productList.scss'
// .products-list{
//   width: 90vw;
//   display: flex;
//   justify-content: space-around;
//   flex-wrap: wrap;
//   overflow: auto;
//   border: 1px solid red;

// }
</style>