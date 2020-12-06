<template>
  <div class="home p-grid">
    <Card class="p-col-6 p-offset-3">
      <template v-slot:header>
        <h2>查看卡片</h2>
      </template>
      <template v-slot:content>
        <h3 v-if="!isFlipped">
          {{ cards[currentCardIndex].question }}
        </h3>
        <h3 v-else>
          {{ cards[currentCardIndex].answer }}
        </h3>
      </template>
      <template v-slot:footer>
        <Button v-if="!isFlipped" @click="flipCard" label="显示答案" />

        <span v-else class="p-buttonset">
          <Button label="简单" class="p-button-success" />
          <Button label="中等" class="p-button" />
          <Button label="困难" class="p-button-danger" />
        </span>
      </template>
    </Card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "primevue/card";
import Button from "primevue/button";

export default {
  name: "Cards",
  components: {
    Card,
    Button
  },
  data() {
    return {
      currentCardIndex: 0,
      isFlipped: false
    };
  },
  computed: {
    ...mapState(["cards"])
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
    },
    completeCard() {}
  }
};
</script>

<style></style>script
