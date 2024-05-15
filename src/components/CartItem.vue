<template>
  <!-- <div class="product-card"> -->
    <!-- <img :src="imageUrl" alt="photo">
    <div class="product-info">
      <h4>{{ product.title }}</h4>
      <p>$ {{ product.price }}</p>       
    </div>
    <div class="cart-item-quantity">
      <p>Qty</p>
      <span class="counter">
        <span v-on:click="decrementItem">-</span>
       {{ product.quantity }}
       <span v-on:click="incrementItem">+</span> 
      </span>      
    </div>
    <button v-on:click="onRemove">Х</button> -->

    <div class="product">
      <div class="product-image">
        <img :src="imageUrl" alt="photo" />
      </div>
      <div class="product-box">
        <div class="product-info">
          <a class="product-title" href="#">{{ product.title }}</a>
          <div class="product-choose-box">
            <div class="product-choose">
              <!-- <div class="choose-input">
                <input
                  type="radio"
                  name="item-11"
                  value="choose-1"
                  checked
                />
                <label for="choose-1">Big</label>
              </div> -->
              <div class="product-price-box">
                <p class="price-value">{{ product.price }}</p>
                <p class="price-currency">&euro;</p>
              </div>
            </div>
            <!-- <div class="product-choose">
              <div class="choose-input">
                <input type="radio" name="item-11" value="choose-2" />
                <label for="choose-2">Middle</label>
              </div>
              <div class="product-price-box">
                <p class="price-value">15</p>
                <p class="price-currency">&euro;</p>
              </div>
            </div>
            <div class="product-choose">
              <div class="choose-input">
                <input type="radio" name="item-11" value="choose-3" />
                <label for="choose-3">Small</label>
              </div>
              <div class="product-price-box">
                <p class="price-value">12</p>
                <p class="price-currency">&euro;</p>
              </div>
            </div> -->
          </div>
        </div>
        <div class="product-purchase">
          <div class="counter-box">
            <div class="counter">
              <button class="counter-minus" v-on:click="decrementItem">-</button>
              <p class="counter-value">{{ product.quantity }}</p>
              <!-- <input class="counter-value" type="text" value="1" /> -->
              <button class="counter-plus" v-on:click="incrementItem">+</button>
            </div>
          </div>
          <!-- <div class="total-box">
            <div class="total-price">
              <p class="total-text">Total price:</p>
              <p class="total-value">18</p>
              <p class="total-currency">&euro;</p>
            </div>
          </div> -->
          <button class="close-button" v-on:click="onRemove">&#10006;</button>
        </div>
      </div>
    </div>
  <!-- </div> -->
  
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
      this.$emit('decrement');
    },
    incrementItem(){
      this.$emit('increment');
    }
  },

  // mounted() {
  //   this.$set(this.product, 'quantity', 1)
  // }
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