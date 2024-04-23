<template>
  <div class="search-box">
    <!-- <input type="text" v-model="searchString" class="products-search" />
    <button class="search-button" type="button" v-on:click="onClick">Искать</button> -->
    <div class="search-input-box" v-bind:isVisibleSearch="isVisibleSearch" v-if="isVisibleSearch">
      <input
        class="search-input"
        type="text"
        placeholder="Enter your searching here..."
        v-model="searchString"
      />
      <button class="search-button" id="btnSearch"
        v-on:click="onClick" type="button">
        &#9658;
      </button>
      <button class="search-close" type="button" v-on:click="onSearchEmpty">
        <img src="../assets/icons/clear-white16.png">
      </button>
      <button class="search-close" type="button"
      v-on:click="onToggleSearch" v-if="isVisibleSearch">
        &#10006;
      </button>
    </div>
  </div>
</template>

<script>
export default {
    name:'Search',
    data() {
    return {
      searchString: '',
      isVisibleSearch: true
    }
  },
  methods: {
    onClick() {
      this.$store.dispatch('search', this.searchString);
      // this.$emit('search', this.searchString)
    },
    onCloseSearch(){
      this.$emit('closeSearch')
    },
    onSearchEmpty(){
      this.$store.dispatch('search', this.searchString='');
      //this.$emit('search', '')
    },
    onToggleSearch(){
      this.isVisibleSearch=!this.isVisibleSearch
    }
    // closeSearch(){
    //   const searchInput=document.getElementsByClassName("search-input-box")[0];
    //   this.searchInput.style.display="none",
    // }
  }
}</script>

<style lang="scss" scoped>
  @import '../styles/search/search.scss'
</style>