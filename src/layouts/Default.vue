<template>
  <div id="app">
    <header class="header">
      <div class="header__left">
        <Logo v-if="showLogo" />
      </div>

      <div class="header__right">
        <ToggleTheme />
      </div>
    </header>

    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <p class="netlify">
        <a href="https://www.netlify.com" target="_blank">
          <img
            src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
          />
        </a>
      </p>
      <div class="footer__links">
        <span class="footer__copyright"
          >کپی رایت © {{ new Date().getFullYear() }}.
        </span>
        <span class="footer__links"
          >قدرت گرفته از<a href="//gridsome.org"> Gridsome </a></span
        >
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
  props: {
    showLogo: { default: true },
  },
  components: {
    Logo,
    ToggleTheme,
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top: 0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;
  flex-direction: column;
  &__links {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > span {
    margin: 0 0.35em;
  }

  a {
    color: currentColor;
  }

  .netlify {
    display: block;
    text-align: center;
    padding: 0.5rem;
  }
}
</style>
