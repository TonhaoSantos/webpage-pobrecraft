<template>
  <div class="container">
    <base-new-content-service-worker propId="basenewcontentalert" propText="Foi encontrada uma nova versão do site!" propButtonText="Atualizar Site" :propHasNewContent="updateExistsServiceWorker" :propRegistrationServiceWorkerContent="registrationServiceWorker" @close-base-new-content-service-worker="changeExistsServiceWorker($event)" />

    <div class="row">
      <div class="col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 logo">
        <img alt="Pobrecraft logo" src="@/assets/logo.png" class="logo-img">
      </div>
    </div>

    <div class="row">
      <div class="col-md-12" style="text-align: center;">
        <router-link to="/">Home</router-link> |
        <router-link to="/regras">Regras</router-link> |
        <router-link to="/youtubers">Participantes</router-link>
      </div>
    </div>

    <div class="col-md-12">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, onBeforeUnmount, ref, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    BaseNewContentServiceWorker: defineAsyncComponent(() => import('@components/fragments/BaseNewContentServiceWorker'))
  },
  setup () {
    const refreshingPageServiceWorker = ref(false)
    const registrationServiceWorker = ref(null)
    const updateExistsServiceWorker = ref(false)

    onMounted(() => {
      // Iniciando o EventListener do serviceWorker
      document.addEventListener('swUpdated', showBaseNewContentServiceWorker, { once: true })

      // Refrescando apagina depois que o serviceWorker atualizar o conteudo
      navigator.serviceWorker.addEventListener('controllerchange', refreshingAfterServiceWorker)
    })

    onBeforeUnmount(() => {
      // Finalizando o EventListener do serviceWorker
      document.removeEventListener('swUpdated', closeBaseNewContentServiceWorker)
    })

    // Inico Funcoes do serviceWorker
    function refreshingAfterServiceWorker () {
      if (refreshingPageServiceWorker.value) return

      refreshingPageServiceWorker.value = true
      window.location.reload()
    }
    function showBaseNewContentServiceWorker (e) {
      registrationServiceWorker.value = e.detail
      updateExistsServiceWorker.value = true
    }
    function closeBaseNewContentServiceWorker (e) {
      registrationServiceWorker.value = e.detail
      updateExistsServiceWorker.value = false
    }
    function changeExistsServiceWorker (e) {
      registrationServiceWorker.value = null
      updateExistsServiceWorker.value = e
    }
    // Fim Funcoes do serviceWorker

    return {
      refreshingAfterServiceWorker,
      showBaseNewContentServiceWorker,
      closeBaseNewContentServiceWorker,
      changeExistsServiceWorker,
      refreshingPageServiceWorker,
      registrationServiceWorker,
      updateExistsServiceWorker
    }
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

.logo {
  margin-top: 28px;
  margin-bottom: 25px;

  .logo-img {
    position: relative;
    width: 100%;
    height: auto;
  }
}
</style>
