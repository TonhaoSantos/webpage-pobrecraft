<template>
  <div v-if="propHasNewContent" class="base-new-content-service-worker">
    <p class="base-new-content-service-worker__text">{{ propText }}</p>

    <a @click.prevent="refreshApp" class="base-new-content-service-worker__button">{{ propButtonText }}</a>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseNewContentServiceWorker',
  props: {
    propId: {
      type: String,
      required: true,
      validator: (value) => {
        if (!value) return false
        return value
      }
    },
    propText: {
      type: String,
      default: 'New version available!'
    },
    propButtonText: {
      type: String,
      default: 'Click to update'
    },
    propHasNewContent: {
      type: Boolean,
      default: false,
      validator: (value) => {
        return [true, false].indexOf(value) !== -1
      }
    },
    propRegistrationServiceWorkerContent: {
      type: Function,
      default: () => {
        return null
      }
    }
  },
  emits: ['close-base-new-content-service-worker'],
  setup (props, { emit }) {
    function refreshApp () {
      const registration = props.propRegistrationServiceWorkerContent

      emit('close-base-new-content-service-worker', false)

      if (!registration || !registration.waiting) return

      registration.waiting.postMessage('skipWaiting')
    }

    return {
      refreshApp
    }
  }
})
</script>

<style lang="scss" scoped>
.base-new-content-service-worker {
  max-width: 316px;
  width: 316px;
  position: fixed;
  top: 50px;
  left: 50%;
  z-index: 1000000000;
  padding: 10px;
  margin-left: -158px;
  color: #fff;
  text-align: center;
  font-weight: 800;
  background-color: #F15574;

  .base-new-content-service-worker__text {
    color: #ffffff;
  }

  .base-new-content-service-worker__button {
    color: #72f258;

    &:focus,
    &:hover {
      color: #31d310;
      cursor: pointer;
      text-decoration: none;
    }
  }
}
</style>
