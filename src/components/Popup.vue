<template>
  <div v-if="showPopup" class="popup-call">
    <div class="popup-call__content">
      <h2>Заявка на звонок</h2>
      <form action="" method="get">
        <label for="name"
          >Введите имя:
          <input type="text" name="name" id="name" placeholder="Иван" required />
        </label>

        <label for="phone"
          >Телефон:
          <input type="tel" pattern="\+7\-[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}" name="phone" id="phone" placeholder="+8 (999) 888 77 11" required />
        </label>

        <button type="submit">Отправить</button>
      </form>

      <button class="popup-call__close-btn" @click="closePopup">✖</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false,
    };
  },
  methods: {
    openPopup() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.popup-call {
  &__close-btn {
  }
  &__content {
  }
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup {
  position: absolute;
  background-color: #535353;
  padding: 20rem;
  width: 300rem;
  min-height: 290rem;
  border-radius: 2rem;
  display: flex;
  justify-content: center;

  .popup-content {
    h2 {
      font-size: 28rem;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;

      label {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }

      input {
        all: unset;
        border-bottom: 2rem solid #d90021;
        box-shadow: 1rem 1rem 10rem rgba(0, 0, 0, 0.168);
        width: 250rem;
        height: 30rem;
        background: transparent;
      }

      button {
        all: unset;
        text-align: center;
        width: 200rem;
        height: 40rem;
        margin: 0 auto;
        margin-top: 10rem;
        background-color: #d90021;
      }
    }
  }

  .close-popup {
    position: absolute;
    top: 0;
    right: 0;
    margin: 5rem;
    background: none;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 20rem;
  }
}
</style>
