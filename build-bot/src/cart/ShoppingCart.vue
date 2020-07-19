<template>
  <div>
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th class="robot-title">Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index">
            <td class="robot-title">{{robot.head.title}}</td>
            <td class="cost">{{robot.cost | currency('$')}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="saved">
      <h2 class="saleItems">You saved money on this robot</h2>
      <table>
        <thead>
          <tr>
            <th class="robot-title">Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cartSaleItem" :key="index">
            <td class="robot-title">{{robot.head.title}}</td>
            <td class="cost">{{robot.cost | currency('$')}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import currencyFilter from '../shared/currency-filter';

export default {
  name: 'Cart',
  filters: {
    currency: currencyFilter,
  },
  computed: {
    cart() {
      return this.$store.state.robots.cart;
    },
    cartSaleItem() {
      return this.$store.getters['robots/cartSaleItem'];
    },
  },
};
</script>

<style lang="scss" scoped>
td,
th {
  padding: 5px;
}
.robot-title {
  text-align: left;
  padding-right: 200px;
}
.cost {
  text-align: right;
}
.saved {
  .saleItems {
    margin-top: 50px;
    font-size: 16px;
    color: red;
  }
}
</style>
