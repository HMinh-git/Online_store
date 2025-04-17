<template>
  <div>
    <navbarView> </navbarView>
    <FooterView> </FooterView>
  </div>
</template>

<script>
import NavbarView from "./views/NavbarView.vue";
import FooterView from "./components/Footer.vue";
export default {
  name: "App",
  components: { NavbarView, FooterView },
};
<!-- Google tag (gtag.js) -->
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QDX2NDZ0FT');
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-QDX2NDZ0FT"></script>
</script>


