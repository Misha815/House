<template>
  <div class="LayoutDefault">
    <div class="LayoutDefault__header">
      <nav class="LayoutDefault__nav">
        <div class="nav-link">
          <RouterLink class="link-header" to="/">
            <img src="../assets/images/logo.svg" alt="">
          </RouterLink>
        </div>
        <button @click="openPopup" class="call-voice">Звонок</button>
        <popup ref="popup"/>

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
      <back-to-top bottom="50px" right="14px">
        <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"><img
              src="../assets/images/Up.svg" alt=""></i></button>
      </back-to-top>
    </main>
    <footer class="LayoutDefault__footer">
      <div class="LayoutDefault__footer--inner">
        <div class="footer__wrapper">
          <div class="footer__label"><a href="/"> <img src="../assets/images/logo.svg" alt=""></a>
            <div class="contact-number"><span>+7 (999) 543-54-54</span>
              <i>Мастерская</i>
            </div>
          </div>
          <div class="footer__nav-links">
            <div class="reproductions">
              <span>Репродукции</span>
              <ul>
                <li class="link-nav"><a href="/product">Франция</a></li>
                <li class="link-nav"><a href="/product">Германия</a></li>
                <li class="link-nav"><a href="/product">Англия</a></li>
              </ul>
            </div>
            <div class="new-product">
              <span>Новинки</span>
              <ul>
                <li class="link-nav"><a href="#">2023</a></li>
                <li class="link-nav"><a href="#">2024</a></li>
              </ul>
            </div>
            <div class="about">
              <span>О нас</span>
              <ul>
                <li class="link-nav"><a href="#">Художники</a></li>
                <li class="link-nav"><a href="#">Менеджеры</a></li>
              </ul>
            </div>
          </div>
          <div class="footer__social">
            <ul class="list-social">
              <li class="link-social"><a href="#"><img src="../assets/images/Frame.svg" alt=""></a></li>
              <li class="link-social"><a href="#"><img src="../assets/images/Frame-1.svg" alt=""></a></li>
              <li class="link-social"><a href="#"><img src="../assets/images/Frame-2.svg" alt=""></a></li>
            </ul>
            <div class="license"><span>Ink. House ®</span>
              <span>All rights reserved</span>
              <span>&copy; 2019-2024</span>
            </div>

          </div>
        </div>

      </div>
    </footer>
  </div>
</template>

<script>
import Popup from '../components/Popup.vue'
import BackToTop from 'vue-backtotop'
export default {
  components: {BackToTop ,Popup },
  methods: {
    openPopup(){
      this.$refs.popup.openPopup();
    }
  },
}

</script>

<style lang="scss" scoped>
.LayoutDefault {
  max-width: 1280px;

  .LayoutDefault__header {

    .LayoutDefault__nav {
      min-height: 100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
       .call-voice{
        all:unset;
        transition: 1s;
        border-bottom: 1px solid rgb(255, 255, 255);
        &:hover{
          color:red;
          border-bottom: 1px solid rgb(255, 0, 0);
          transition: 1s;
        }
       }
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
      cursor: pointer;
      width: 60px;
      height: 60px;

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
        width: 40px;

        &:hover {
          transition: 0.4s;
          scale: (0.4s);
        }
      }
    }
  }

  .LayoutDefault__footer {
    min-height: 17vh;
    display: flex;
    justify-content: center;
    align-items: center;


    .LayoutDefault__footer--inner {



      width: 1440px;
      padding: 50px 0 50px 0;

      .footer__wrapper {
        display: flex;
        justify-content: space-between;

        .footer__label {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .contact-number {
            display: flex;
            flex-direction: column;
          }
        }

        .footer__nav-links {
          display: flex;
          justify-content: space-around;
          width: 445px;

          .reproductions {
            span {
              font-weight: 600;
            }

            .link-nav {
              list-style-type: none;
            }
          }

          .new-product {
            span {
              font-weight: 600;
            }

            .link-nav {
              list-style-type: none;
            }
          }

          .about {
            span {
              font-weight: 600;
            }

            .link-nav {
              list-style-type: none;
            }
          }
        }

        .footer__social {

          .list-social {
            list-style-type: none;
            display: flex;
            justify-content: space-between;
          }

          .license {
            display: flex;
            flex-direction: column;
          }

        }

      }

    }

  }

}

@media (width: 740px) {
  .LayoutDefault {
    max-width: 720px;

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
        cursor: pointer;
        width: 60px;
        height: 60px;

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
          width: 40px;

          &:hover {
            transition: 0.4s;
            scale: (0.4s);
          }
        }
      }
    }

    .LayoutDefault__footer {
      min-height: 17vh;
      display: flex;
      justify-content: center;
      align-items: center;


      .LayoutDefault__footer--inner {
        width: 1440px;

        .footer__wrapper {
          display: flex;
          justify-content: space-between;

          .footer__label {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .contact-number {
              display: flex;
              flex-direction: column;
            }
          }

          .footer__nav-links {
            display: flex;
            justify-content: space-around;
            width: 445px;

            .reproductions {
              span {
                font-weight: 600;
              }

              .link-nav {
                list-style-type: none;
              }
            }

            .new-product {
              span {
                font-weight: 600;
              }

              .link-nav {
                list-style-type: none;
              }
            }

            .about {
              span {
                font-weight: 600;
              }

              .link-nav {
                list-style-type: none;
              }
            }
          }

          .footer__social {

            .list-social {
              list-style-type: none;
              display: flex;
              justify-content: space-between;
            }

            .license {
              display: flex;
              flex-direction: column;
            }

          }

        }

      }

    }

  }
}
</style>