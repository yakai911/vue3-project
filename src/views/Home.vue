<template>
  <div class="home p-grid">
    <Card class="p-col-6 p-offset-3">
      <template v-slot:header>
        <h2>添加卡片</h2>
      </template>
      <template v-slot:content>
        <form class="p-fluid" @submit.prevent="submitNewCardForm">
          <div class="p-field">
            <label for="question">问题</label>
            <InputText class="p-field" id="question" v-model="question" />
          </div>
          <div class="p-field">
            <label for="answer">答案</label>
            <InputText class="p-field" id="answer" v-model="answer" />
          </div>
          <Button label="添加卡片" type="submit" />
        </form>
      </template>
    </Card>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

export default {
  name: "Home",
  components: {
    InputText,
    Button,
    Card
  },
  data() {
    return {
      question: "",
      answer: ""
    };
  },
  computed: {
    ...mapState(["cards"])
  },
  methods: {
    ...mapActions(["createCard"]),
    submitNewCardForm() {
      const payload = {
        question: this.question,
        answer: this.answer
      };
      this.createCard(payload);

      this.question = "";
      this.answer = "";
    }
  }
};
</script>
