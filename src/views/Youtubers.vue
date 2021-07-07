<template>
  <div class="row">
    <div class="col-xs-12 col-md-offset-2 col-md-8" style="text-align: center;">
      <h3>Participantes</h3>

      <base-youtuber-list />
    </div>
  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'Youtubers',
  components: {
    'base-youtuber-list': defineAsyncComponent(() => import('@components/fragments/BaseYoutuberList.vue'))
  }
})
</script>

<style lang="scss">
h3 {
  margin: 40px 0 0;
  font-weight: 900;
  margin-bottom: 27px;
  text-transform: uppercase;
  font-family: 'Lato Regular';
  color: #5f34ff;
}
</style>
