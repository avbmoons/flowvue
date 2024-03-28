<template>
    <div class="product-card">
    <!-- <h4>{{ product.product_name }}</h4>--> 
    <img :src="imageUrl" alt="photo">
    <div class="product-info">
      <h4>{{ product.title }}</h4>
      <p>$ {{ product.price }}</p>       
    </div>
    <!-- <p>{{ product.quantity }}</p> -->
    <div class="cart-item-quantity">
      <p>Qty</p>
      <span class="counter">
        <span v-on:click="decrementItem">-</span>
       {{ product.quantity }}
       <span v-on:click="incrementItem">+</span> 
      </span>
      
    </div>
    <!--<h4>{{ product.name }}</h4>
    <p>$ {{ product.priceActive }}</p>-->
    <button v-on:click="onRemove">Х</button>
  </div>
</template>

<script>
export default {
    name:'CartItem',
    props: {
    product: Object
  },
  computed: {
    imageUrl() {
      return require(`./../assets/catalog/${this.product.image}`)
    }
  },
  methods: {
    onRemove() {
      this.$store.dispatch('removeFromCart', this.product);
      // this.$emit('remove', this.product);
      //console.log(product);
    },
    decrementItem(){
      this.$store.dispatch('decrementCartItem', this.product.quantity);
      //this.$emit('decrement');
    },
    incrementItem(){
      this.$store.dispatch('incrementCartItem', this.product.quantity);
      //this.incrementCartItem();
      //this.$emit('increment');
    }
  },

  mounted() {
    this.$set(this.product, 'quantity', 1)
  }
}
</script>

<style scoped lang="scss">
@import '../styles/cartItem/cartItem.scss'
// .product-card{
//   width: 100px;
//   height: 150px;
//   border: 1px solid blue;
// }
</style>