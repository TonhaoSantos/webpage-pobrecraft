<template>
  <ul class="youtubers-list">
    <li v-for="(youtuber, index) in youtubersList" :key="index" class="youtubers-list__itens">
      <a :href="youtuber.channelLink" target="_blank" rel="noopener"  class="youtubers-list__itens-links">
        <img :src="youtuber.logoIcon" :alt="youtuber.name" class="youtubers-list__image">
        <p class="youtubers-list__name">{{ youtuber.name }}</p>
      </a>
    </li>
  </ul>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { youtubers } from '@enums/youtubers'

export default defineComponent({
  name: 'BaseYoutuberList',
  setup () {
    const youtubersList = ref(youtubers)

    function shuffle (array) {
      let currentIndex = array.length
      let randomIndex = []

      // While there remain elements to shuffle...
      while (currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]]
      }

      return array
    }

    youtubers.value = shuffle(youtubers)

    return {
      youtubersList
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.youtubers-list {
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;

  .youtubers-list__itens {
    display: inline-block;
    margin: 5px;

    .youtubers-list__itens-links {
      color: black;
      text-decoration: none;

      .youtubers-list__image {
        width: 95px;
        height: 95px;
        margin: 0 auto;
        border-radius: 10px;
        transition: all .2s ease-in-out;
        -webkit-filter: blur(2px);
        filter: blur(2px) grayscale(100%);

        &:hover {
          transform: scale(1.15);
          -webkit-filter: none;
          filter: none;
        }
      }

      .youtubers-list__name {
        font-family: 'Lato Regular';
        text-transform: uppercase;
        font-size: .8em;
        font-weight: 900;
        margin-bottom: 0;
        margin-top: 2px;
      }
    }
  }
}

@media screen and (min-width: 375px) {}
@media screen and (min-width: 425px) {}
@media screen and (min-width: 576px) {}
@media screen and (min-width: 768px) {
  .youtubers-list {
    .youtubers-list__itens {
      margin: 10px;

      .youtubers-list__itens-links {
        .youtubers-list__image {
          width: 105px;
          height: 105px;
        }
      }
    }
  }
}
@media screen and (min-width: 1024px) {}
@media screen and (min-width: 1600px) {}
</style>
