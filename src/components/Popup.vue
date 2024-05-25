<template>
  <div v-if="showPopup" class="popup-overlay">
    <div class="popup">
      <div class="popup-content">
        <h2>Заявка на звонок</h2>
        <form action="" method="get">
          <p>
            <label for="name">Введите имя:</label>
            <input type="text" name="name" id="name" placeholder="Иван" required>
          </p>
          <p>
            <label for="phone">Телефон:</label>
            <input type="tel" pattern="\+7\-[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}" name="phone" id="phone"
              placeholder="+8 (999) 888 77 11" required>
          </p>
          <button type="submit">Отправить</button>
        </form>
      </div>
      <button class="close-popup" @click="closePopup">✖</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false,

    }
  },
  methods: {
    openPopup() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    }
  },
}
</script>

<style lang="scss" scoped>
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
  padding: 20px;
  width: 300px;
  min-height: 290px;
  border-radius: 2px;
  display: flex;
  justify-content: center;

  .popup-content {

    h2 {
      font-size: 28px;
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
        border-bottom: 2px solid #D90021;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.168);
        width: 250px;
        height: 30px;
        background: transparent;
      }

      button {
        all: unset;
        text-align: center;
        width: 200px;
        height: 40px;
        margin: 0 auto;
        margin-top: 10px;
        background-color: #D90021;
      }
    }
  }

  .close-popup {
    position: absolute;
    top: 0;
    right: 0;
    margin: 5px;
    background: none;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 20px;
  }
}
</style>