<template>
    <footer class="footer">
      <section class="footer-top">
        <div class="footer-logo">
          <router-link class="logo" to="/"><img class="logo" src="../assets/logo/logo-white-oth.png" alt="logo"></router-link>
        </div>
        <div class="footer-contacts">
          <p class="contact">+098-765-4321</p>
          <p class="contact">qwe.asd@kukkameri.coms</p>
        </div>
        <div class="footer-menu">
          <div class="menu-box">
            <router-link class="menu-item" to="/catalog">Bouquets&Flowers</router-link>
            <router-link class="menu-item" to="/catalog">Gifts&Cards</router-link>
            <router-link class="menu-item" to="/terms">Delivery&Payment</router-link>
            <router-link class="menu-item" to="/about">About us</router-link>
          </div>
        </div>
      </section>
      <section class="footer-bottom">
        <div class="footer-rights">
          <p class="rights">
            Kukkameri ltd.&nbsp;&#169;&nbsp;All rights reserved
          </p>
        </div>
        <div class="footer-socials">
          <div class="socials">
            <a class="social-item" href="#"
              ><img src="../assets/icons/socials/facebook36.png" alt="fb"
            /></a>
            <a class="social-item" href="#"
              ><img src="../assets/icons/socials/instagram36.png" alt="ins"
            /></a>
            <a class="social-item" href="#"
              ><img src="../assets/icons/socials/telegram36.png" alt="tel"
            /></a>
            <a class="social-item" href="#"
              ><img src="../assets/icons/socials/whatsapp36-2.png" alt="wa"
            /></a>
          </div>
        </div>
      </section>
    </footer>
</template>

<script>
export default {
    name: 'FooterA'
}
</script>

<style lang="scss" scoped>
@import '../styles/footerA/footerA.scss'
</style>