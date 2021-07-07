<template>
  <div class="row rules">
    <div class="col-xs-12 col-md-offset-2 col-md-8">
      <h3 class="rules__title">Regras</h3>

      <ul class="rules__list">
        <li v-for="(rule, index) in rulesList" :key="index" class="rules__list-item">{{ rule }}.</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { serieRules } from '@enums/rules'

export default defineComponent({
  name: 'Rules',
  setup () {
    const rulesList = ref(serieRules)

    return {
      rulesList
    }
  }
})
</script>

<style lang="scss" scoped>
.rules {
  margin-bottom: 40px;
  text-align: center;

  .rules__title {
    margin: 40px 0 0;
    font-weight: 900;
    margin-bottom: 27px;
    text-transform: uppercase;
    font-family: 'Lato Regular';
    color: #5f34ff;
  }

  .rules__list {
    text-align: left;
    padding: 0;

    .rules__list-item {

    }
  }
}
</style>
