<template lang="pug">
    h1 Bienvenido a tu contador, {{ nameloquemedelagana }}
    p El nombre del usuario es: {{ nameloquemedelagana }}
    CounterComponent(:name="nameloquemedelagana" @count="updateCount" @newName="updateChildrenName")
    h3 {{count}}
</template>

<script setup>
import CounterComponent from '../components/CounterComponent.vue';
import { ref} from 'vue'

let nameloquemedelagana = ref(localStorage.getItem('nameUser') || '')
const count = ref(0)

function updateChildrenName(newName) {
  nameloquemedelagana.value = newName
  localStorage.setItem('nameUser', nameloquemedelagana.value)
}

function updateCount(newCount) {
  count.value = newCount
}
</script>
<style lang="scss" scoped></style>