<template>
  <div class="modal" id="modal-block">
    <span class="close" v-on:click="onClose">&#10006;</span>
    <!-- <a class="close-block" href="#close-block">CLOSE</a> -->

    <div class="products-list">
      <div class="product-list__heading">
        <p class="heading-prime">Your shopping list</p>
      </div>
      <!-- <CartItem
      v-for="product of cart" 
      v-bind:key="product.id_product" 
      v-bind:product="product" 
      v-on:remove="onRemove"
      ></CartItem> -->
      <CartItem
      v-for="product of cart" 
      v-bind:key="product.id" 
      v-bind:product="product" 
      v-on:remove="onRemove"
      v-on:decrement="decrement(product)"
      v-on:increment="increment(product)"
      ></CartItem>      
    </div>
    <!-- <div class="cart-total">
      <p class="total-info">Total:</p>
      <p class="total-info">{{ cartTotalCost }}</p>
    </div> -->

    <section class="cart-total">
      <div class="cart-total__block">
        <p class="grandtotal-text">Cart total:</p>
        <p class="grandtotal-value">{{ cartTotalCost }}</p>
        <p class="grandtotal-currency">&euro;</p>
      </div>
      <button class="total-button" type="button">Get order</button>
    </section>
    
  </div>
</template>

<script>
import CartItem from '../components/CartItem'
export default {
    name:'Cart',
    components:{
        CartItem
    },
  //   props: {
  //   cart: Array
  // },
  computed:{
    cart(){
      return this.$store.getters.cart
    },
    cartTotalCost(){
      let result=[]
      if(this.cart.length){
        for(let item of this.cart){
          result.push(item.price * item.quantity);
        }
        result= result.reduce(function(sum, el) {
          return sum+el; // sum+el;
        });
        return parseFloat(result.toFixed(2));  // result;
        } else {
          return 0
        }
      }

  },
  methods: {
    onClose() {
      this.$emit('close')
    },
    onRemove(product) {
      this.$emit('remove', product)
    },

    decrement(product){
      this.$store.dispatch('decrementCartItem',product)
    },
    increment(product){
      this.$store.dispatch('incrementCartItem',product)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/cartModal/cartModal.scss'
//     .modal {
//       width: 600px;
//       height: 400px;
//       position: absolute;
//       top: 100px;
//       left: calc(50% - 300px);
//       border: 1px solid #ccc;
//       background-color: white;
//       border-radius: 4px;
//       overflow: auto;
//     }

//     .close {
//       position: absolute;
//       top: 5px;
//       right: 5px;
//       cursor: pointer;
//     }
// .products-list{
//   display: flex;
//   justify-content: space-around;
//   flex-wrap: wrap;

// }
</style>