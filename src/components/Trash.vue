<template>
  <div class="container-trash container">
    <div class="container-trash__title">
      <h1 class="headline-1">Корзина</h1>
    </div>
    <div class="container-trash__top">
      <div class="container-trash__form">
        <div class="container-trash__form-details">
          <div class="container-trash__form-details-title">Контактная информация</div>
          <div class="container-trash__form-details-subtitle">Мы будем держать вас в курсе о статусе вашего заказа</div>
          <input class="input-1" type="text" placeholder="Почта*" />
        </div>
        <div class="container-trash__form-shipping">
          <div class="container-trash__form-shipping-title">Shipping Address</div>
          <div class="container-trash__form-shipping-container">
            <input class="input-1 container-trash__form-shipping-name" type="text" placeholder="Имя*" />
            <input class="input-1 container-trash__form-shipping-sname" type="text" placeholder="Фамилия*" />
            <input class="input-1 container-trash__form-shipping-addres" type="text" placeholder="Адрес доставки*" />
            <input class="input-1 container-trash__form-shipping-phone" type="text" placeholder="Номер телефона*" />
          </div>
        </div>
      </div>
      <div class="container-trash__item">
        <div class="container-trash__summary">
          <div class="container-trash__summary-title">Рассчет стоимости</div>
          <div class="container-trash__summary-price">
            <div class="container-trash__summary-price-name">Лот</div>
            <div class="container-trash__summary-price-value">$130.00</div>
          </div>
          <div class="container-trash__summary-delivery">
            <div class="container-trash__summary-delivery-name">Доставка</div>
            <div class="container-trash__summary-delivery-value">$6.99</div>
          </div>
          <div class="container-trash__summary-total">
            <div class="container-trash__summary-total-name">Итого</div>
            <div class="container-trash__summary-total-value">$130.00</div>
          </div>
        </div>
        <div class="container-trash__details">
          <div class="container-trash__details-title">Детали заказа</div>
          <div class="container-trash__details-info">
            <div class="container-trash__details-img"><img src="/src/assets/images/card-image.jpg" alt="" /></div>
            <div class="container-trash__details-content">
              <div class="container-trash__details-content-name">Название товара</div>
              <div class="container-trash__details-content-count">Описание</div>
              <div class="container-trash__details-content-price">$50.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-trash__options"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use "../assets/mixins/text";
@import "@/assets/mixin.scss";
.container-trash {
  &__form {
    display: flex;
    flex-direction: column;
    gap: 32rem;
    width: 100%;
  }

  &__form-shipping {
    width: 100%;
  }

  &__form-shipping-title {
    @include text.body-bold-32;
    margin-bottom: 32rem;
  }
  &__form-shipping-container {
    display: grid;
    gap: 16rem;
    grid-template-columns: repeat(2, 1fr);
  }

  &__form-shipping-name {
  }

  &__form-shipping-sname {
  }
  &__form-shipping-addres {
  }
  &__form-shipping-phone {
  }
  &__form-details {
    @include text.body-bold-18;
  }
  &__form-details-title {
    @include text.body-bold-32;
    margin-bottom: 8rem;
  }

  &__form-details-subtitle {
    margin-bottom: 32rem;
  }

  &__details {
    background-color: var(--accent-white);
    border-radius: 16rem;
    padding: 24rem;
    display: flex;
    flex-direction: column;
    gap: 16rem;
  }

  &__details-content {
    @include text.body-18;
    display: flex;
    flex-direction: column;
    gap: 12rem;
  }

  &__details-content-count {
    @include text.body-18;
  }

  &__details-content-name {
    @include text.body-18;
  }

  &__details-content-price {
    @include text.body-18;
  }

  &__details-img {
    img {
      max-height: 300rem;
      max-width: 300rem;
      border-radius: 24rem;
    }
  }
  &__details-info {
    display: flex;
    justify-content: space-between;
    @include text.body-18;
  }

  &__details-title {
    @include text.body-18;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 48rem;
    max-width: 466rem;
    width: 100%;
  }

  &__options {
  }

  &__summary {
    background-color: var(--accent-white);
    border-radius: 16rem;
    padding: 24rem;
    display: flex;
    flex-direction: column;
    gap: 16rem;
  }

  &__summary-delivery {
    @include text.body-18;
    display: flex;
    justify-content: space-between;
  }

  &__summary-delivery-name {
    @include text.body-18;
  }

  &__summary-delivery-value {
    @include text.body-18;
  }

  &__summary-price {
    @include text.body-18;
    display: flex;
    justify-content: space-between;
  }

  &__summary-price-name {
    @include text.body-18;
  }

  &__summary-price-value {
    @include text.body-18;
  }

  &__summary-title {
    @include text.body-18;
  }

  &__summary-total {
    border-top: 1rem solid var(--accent-dark-grey);
    padding-top: 4rem;
    @include text.body-18;
    display: flex;
    justify-content: space-between;
  }

  &__summary-total-name {
    @include text.body-18;
  }

  &__summary-total-value {
    @include text.body-18;
  }

  &__top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 48rem;
  }
}
</style>
