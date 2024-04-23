<template>
  <div id="app" class="wrapper">
    <div class="top">
      <HeaderA></HeaderA>
      <div class="main">
        <router-view/>          
      </div>    
    </div>
    <FooterA></FooterA>
  </div>
</template>

<script>
import HeaderA from './components/HeaderA.vue'
import FooterA from './components/FooterA.vue'

export default {
  components: {
    HeaderA,
    FooterA,
  },
}
</script>

<style lang="scss">
@import './styles/main/main.scss';

</style>
