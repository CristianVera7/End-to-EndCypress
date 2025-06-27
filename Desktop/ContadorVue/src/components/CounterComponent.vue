<template lang="pug">
    input(v-model="newName" type="text" placeholder="Reescribe tu nombre")
    button(@click="changeName") Cambiar nombre
    br
    br
    button(@click="increment") Incrementar
    button(@click="decrement") Decrementar
    p(v-if="count !== 0") {{ message }}
    p {{newName}}
</template>

<script setup>

import { computed, ref } from 'vue'
defineOptions({ name: 'CounterComponent' })
const count = ref(0)
const incrementClicked = ref(false)
const decrementClicked = ref(false)
const message = computed(() => {
    if (count.value === 0) return ''
    return count.value == 5 ?
        'Has alcanzado el limite, solo puedes decrementar' : count.value > 0 && incrementClicked.value ?
            `${prop.name}, has incrementado el contador` : `${prop.name}, has decrementado el contador`
})

const prop = defineProps({
    name: { type: String }
})
const newName = ref(prop.name)
const emit = defineEmits(['count', 'newName'])

function changeName() {
    emit('newName', newName.value)
}

function increment() {
    if (count.value === 5) {
        return
    }
    count.value++
    incrementClicked.value = true
    decrementClicked.value = false
    // message.value = 'has incrementado el contador'
    emit('count', count.value)
}

function decrement() {
    if (count.value === 0) {
        return
    }
    count.value--
    incrementClicked.value = false
    decrementClicked.value = true
    // message.value = 'has decrementado el contador'
    emit('count', count.value)
}
</script>
<style lang="scss" scoped></style>