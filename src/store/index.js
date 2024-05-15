import Vue from 'vue';
import Vuex from 'vuex';

//const API_URL = 'http://127.0.0.1:8080/';
// const API_URL =
//   'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';

const API_URL = 'https://avbmoons.github.io/data-sandbox/flowvue/';
//const API_URL = 'https://github.com/avbmoons/data-sandbox/tree/main/shop-dev/';
//const API_URL = 'https://avbmoons.github.io/data-sandbox/shop-dev/';
//

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    filteredProducts: [],
    cart: [],
  },
  getters: {
    products: (state) => state.filteredProducts,
    cart: (state) => state.cart,
  },
  mutations: {
    loadProducts: (state, payload) => {
      state.products = payload;
      state.filteredProducts = payload;
    },
    loadCart: (state, payload) => {
      state.cart = payload;
    },
    // add: (state, payload) => {
    //   state.cart.push(payload);
    // },

    add: (state, payload) => {
      if (state.cart.length) {
        let isProductExists = false;
        state.cart.map(function (item) {
          // console.log(
          //   'item.quantity=' +
          //     item.quantity +
          //     '  item.title=' +
          //     item.title +
          //     '  item.id=' +
          //     item.id
          // );
          // console.log(
          //   'payload.quantity=' +
          //     payload.quantity +
          //     '  payload.title=' +
          //     payload.title +
          //     '  payload.id=' +
          //     payload.id
          // );
          if (item.title === payload.title) {
            isProductExists = true;
            item.quantity++;
          }
        });
        if (!isProductExists) {
          state.cart.push(payload);
        }
      } else {
        state.cart.push(payload);
      }
      console.log(state.cart);
    },

    remove: (state, payload) => {
      const index = state.cart.findIndex(
        // (item) => item.id_product === payload.id_product
        (item) => item.id === payload.id
      );
      //console.log('payload.index = ' + index);
      state.cart.splice(index, 1);
    },
    filter: (state, payload) => {
      state.filteredProducts = payload;
    },

    increment: (state, payload) => {
      // console.log('product = ' + payload.title);
      // console.log('product.quantity = ' + payload.quantity);

      const index = state.cart.findIndex((item) => item.id === payload.id);

      //console.log('index = ' + index);

      state.cart[index].quantity++;
      // console.log(
      //   'payload.title = ' +
      //     payload.title +
      //     '  payload.quantity = ' +
      //     payload.quantity
      // );
    },
    decrement: (state, payload) => {
      const index = state.cart.findIndex((item) => item.id === payload.id);
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    },
  },
  actions: {
    // loadProducts({ commit }) {
    //   fetch('../../public/static/catalogData.json')
    //     .then((request) => request.json())
    //     .then((data) => {
    //       commit('loadProducts', data);
    //     });
    // },
    loadProducts({ commit }) {
      fetch(`${API_URL}catalogData.json`) //catalogData.json
        .then((request) => request.json())
        .then((data) => {
          commit('loadProducts', data);
        });
    },

    loadCart({ commit }) {
      fetch(`${API_URL}getCart.json`) //getBasket.json
        .then((request) => request.json())
        .then((data) => {
          commit('loadCart', data.contents);
        });
    },
    addToCart({ commit }, product) {
      fetch(`${API_URL}addToCart.json`).then(() => {
        //addToBasket.json
        commit('add', product);
      });
    },

    // addToCart({commit}, product) {
    //   commit('add', product)
    // },

    removeFromCart({ commit }, product) {
      fetch(`${API_URL}deleteFromCart.json`).then(() => {
        //deleteFromBasket.json
        commit('remove', product);
      });
    },

    // removeFromCart({commit}, product) {
    //   commit('remove', product);
    // },

    search({ commit, state }, searchString) {
      const regex = new RegExp(searchString, 'i');
      // commit(
      //   'filter',
      //   state.products.filter((product) => regex.test(product.product_name))
      // );
      commit(
        'filter',
        state.products.filter((product) => regex.test(product.title))
      );
    },

    incrementCartItem({ commit }, product) {
      commit('increment', product);
    },
    decrementCartItem({ commit }, product) {
      commit('decrement', product);
    },
  },
  modules: {},
});
