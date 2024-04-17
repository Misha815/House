<template>
  <div class="LayoutDefault">
    <div class="LayoutDefault__header">
      <nav class="LayoutDefault__nav">
        <div class="nav-link">
          <RouterLink class="link-header" to="/">
            <img src="../assets/images/logo.svg" alt="">
          </RouterLink>
        </div>

        <div class="nav-link">
          <RouterLink class="link-header" to="/product">Репродукции</RouterLink>
          <RouterLink class="link-header" to="/new">Новинки</RouterLink>
          <RouterLink class="link-header" to="/about">О нас</RouterLink>
          <RouterLink class="link-header" to="/trash"> <img class="svg-color" src="../assets/images/trash.svg" alt="">
          </RouterLink>
        </div>
      </nav>
    </div>
    <main class="LayoutDefault__main">
      <slot />
      <back-to-top bottom="50px" right="50px">
        <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"><img
              src="../assets/images/Up.svg" alt=""></i></button>
      </back-to-top>
    </main>
    <footer class="LayoutDefault__footer">
      <div class="LayoutDefault__footer--inner"><span>&copy; Awesome Company 2024</span></div>
    </footer>
  </div>
</template>

<script>
import BackToTop from 'vue-backtotop'
export default {
  components: { BackToTop }
}
</script>

<style lang="scss" scoped>
.LayoutDefault {
  width: 1280px;

  .LayoutDefault__header {
    .LayoutDefault__nav {
      min-height: 100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .nav-link {
        display: flex;
        justify-content: space-between;
        width: 472px;

        .router-link-exact-active {
          color: #D90021;
        }

        .link-header {
          text-decoration-line: none;

          &:hover {
            color: rgb(255, 0, 0);
          }

          .svg-color {
            transition: 1s;

            &:hover {
              transform: scale(1.1);
            }

            &:active {
              transition: 1s;
              rotate: (360deg);
            }
          }
        }
      }
    }
  }

  .LayoutDefault__main {
    min-height: 100vh;

    .btn-to-top {
      width: 80px;
      height: 80px;

      border-radius: 50%;
      font-size: 22px;
      line-height: 22px;
      background: #4e4e4e;
      box-shadow: none;
      border: none;
      text-align: center;
      transition: 1s;

      &:hover {
        scale: (105%);
        transition: 0.4s;
      }

      img {
        transition: 0.4s;
        width: 60px;

        &:hover {
          transition: 0.4s;
          scale: (0.4s);
        }
      }
    }
  }

  .LayoutDefault__footer {
    min-height: 10vh;

    display: flex;
    justify-content: center;
    align-items: center;

    .LayoutDefault__footer--inner {


      span {
        font-size: 16px;

      }
    }
  }
}
</style>