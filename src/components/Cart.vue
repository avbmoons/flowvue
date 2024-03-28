<template>
  <div class="modal">
    <span class="close" v-on:click="onClose">x</span>

    <div class="products-list">
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
      v-on:decrement="decrement"
      v-on:increment="increment"
      ></CartItem>      
    </div>
    <div class="cart-total">
      <p class="total-info">Total:</p>
      <p class="total-info">{{ cartTotalCost }}</p>
    </div>
    
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
        result=result.reduce(function(sum, el) {
          return sum+el;
        });
        return result;
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

    increment(index){
      this.$emit('incrementCartItem',product.quantity)
    },
    decrement(index){
      this.$emit('decrementCartItem',product.quantity)
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