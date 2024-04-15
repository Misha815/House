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
    </main>
    <footer class="LayoutDefault__footer">
      <div class="LayoutDefault__footer--inner"><span>&copy; Awesome Company 2024</span></div>
    </footer>
  </div>
</template>

<script setup>

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
            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }
    }
  }

  .LayoutDefault__main {
    min-height: 100vh;
  }

  .LayoutDefault__footer {
    min-height: 10vh;

    display: flex;
    justify-content: center;
    align-items: center;

    .LayoutDefault__footer--inner {


      span {
        font-size: 16px;
        color: #fff;
      }
    }
  }
}
</style>