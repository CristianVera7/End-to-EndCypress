<template lang="pug">
    input(type="text" v-model="nameUser" placeholder="Introduce tu nombre")
    button(@click.prevent="saveName") Guardar Nombre
</template>

<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const nameUser = ref('')

function saveName() {
  if (nameUser.value) {
    localStorage.setItem('nameUser', nameUser.value)
  } else {
    alert('Por favor, introduce tu nombre')
  }

  router.push({name:'counter'})
}

</script>