<template>
  <div class="LayoutDefault">
    <div class="header">
      <nav class="header__nav">
        <div class="header__nav-links">
          <RouterLink class="header__nav-link" to="/">
            <img src="../assets/images/logo-b.svg" alt="" />
          </RouterLink>
        </div>

        <div class="header__nav-links">
          <RouterLink class="header__nav-link link-1" to="/товары">Репродукции</RouterLink>
          <RouterLink class="header__nav-link link-1" to="/new">Новинки</RouterLink>
          <RouterLink class="header__nav-link link-1" to="/about">О нас</RouterLink>
        </div>
      </nav>

      <RouterLink class="header__nav-menu link-1" to="/trash"> <img class="header__nav-menu--rotate" src="../assets/images/trash.svg" alt="" /> </RouterLink>
    </div>
    <main class="main">
      <slot />
    </main>
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__col">
          <div class="footer__col-number">
            <a href="/">
              <img src="../assets/images/logo-w.svg" alt="" />
            </a>
            <div class="contact-number">
              <span>+7 (999) 543-54-54</span>
              <i>Мастерская</i>
            </div>
          </div>
        </div>
        <div class="footer__col">
          <span>Репродукции</span>
          <ul class="footer__list-nav">
            <li class="footer__link-nav"><a href="/product" class="link-1">Франция</a></li>
            <li class="footer__link-nav"><a href="/product" class="link-1">Германия</a></li>
            <li class="footer__link-nav"><a href="/product" class="link-1">Англия</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <span>Новинки</span>
          <ul class="footer__list-nav">
            <li class="footer__link-nav"><a href="#" class="link-1">2023</a></li>
            <li class="footer__link-nav"><a href="#" class="link-1">2024</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <span>О нас</span>
          <ul class="footer__list-nav">
            <li class="footer__link-nav"><a href="#" class="link-1">Художники</a></li>
            <li class="footer__link-nav"><a href="#" class="link-1">Менеджеры</a></li>
          </ul>
        </div>

        <div class="footer__col">
          <ul class="footer__list-social">
            <li class="footer__link-social">
              <a href="#" class="link-1"><img src="../assets/images/Frame.svg" alt="" /></a>
            </li>
            <li class="footer__link-social">
              <a href="#" class="link-1"><img src="../assets/images/Frame-1.svg" alt="" /></a>
            </li>
            <li class="footer__link-social">
              <a href="#" class="link-1"><img src="../assets/images/Frame-2.svg" alt="" /></a>
            </li>
          </ul>
          <div class="footer__col-license">
            <span>Ink. House ®</span>
            <span>All rights reserved</span>
            <span>&copy; 2019-2024</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Popup from "../components/Popup.vue";
import BackToTop from "vue-backtotop";
export default {};
</script>

<style lang="scss" scoped>
@use "../assets/mixins/text";
@import "@/assets/mixin.scss";

.LayoutDefault {
  min-height: 100vh;
  display: grid;
  grid-template-columns: auto;
  align-content: space-between;
}

.header {
  position: sticky;
  top: 0;
  padding: 16rem 16rem 0 16rem;
  z-index: 10;
  display: flex;
  gap: 16rem;
  align-items: center;

  backdrop-filter: blur(16rem);
  border-radius: 10rem;

  &__call-voice {
  }

  &__nav {
    background-color: var(--accent-white);
    box-shadow: 1rem 1rem 15rem 1rem rgba(0, 0, 0, 0.034);
    padding: 24rem 64rem;
    border-radius: 24rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  &__nav-menu {
    background-color: var(--accent-blue);
    box-shadow: 1rem 1rem 15rem 1rem rgba(0, 0, 0, 0.034);
    padding: 24rem;
    border-radius: 64rem;
    @include text.body-20;

    text-decoration: none;

    transition: 0.3s all ease-in-out;

    &--rotate {
      @include hover {
        transform: scale(1.2);
        transform: rotate(-12deg) scale(1.2);
        transition: 0.3s all ease-in-out;
      }
    }
  }

  &__nav-links {
    display: flex;
    align-items: center;
    gap: 24rem;

    .link-1 {
      color: var(--accent-dark-grey);
      font-weight: 500;
    }
  }
}

.main {
  margin-top: 20rem;
}

.footer {
  padding: 24rem;
  background-color: var(--accent-dark-grey);
  border-radius: 24rem 24rem 0 0;
  box-shadow: 1rem 1rem 10rem 1rem rgba(0, 0, 0, 0.384);

  &__container {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(5, 1fr);
  }

  &__col {
    display: flex;
    flex-direction: column;
    gap: 6rem;

    span {
      @include text.body-20;
      color: var(--accent-white);
    }
  }

  &__col-license {
    display: flex;
    flex-direction: column;

    gap: 6rem;

    span {
      @include text.body-14;
      color: var(--main-medium-grey);
    }
  }

  &__col-number {
    display: flex;
    flex-direction: column;
    gap: 6rem;
    justify-content: space-between;
    height: 100%;
  }

  &__link-nav {
    a {
      @include text.body-18;
      color: var(--main-medium-grey);
    }
  }

  &__link-social {
    @include text.body-14;
  }

  &__list-nav {
    display: flex;
    flex-direction: column;
    gap: 6rem;
  }

  &__list-social {
    display: flex;
    flex-direction: row;
    gap: 16rem;
  }
}

.contact-number {
  display: flex;
  flex-direction: column;
  gap: 8rem;
  @include text.body-20;

  i {
    color: var(--main-medium-grey);
    @include text.body-16;
  }
}
</style>
