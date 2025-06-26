// tests/ParentCounterPage.spec.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ParentCounterPage from '../src/views/Counter.vue'
import { nextTick } from 'vue'

describe('ParentCounterPage.vue', () => {
  it('renderiza el nombre desde localStorage y actualiza el contador con el hijo', async () => {
    // Simula un nombre guardado
    localStorage.setItem('nameUser', 'Cristian')

    const wrapper = mount(ParentCounterPage)

    // Verifica que se muestra el nombre
    expect(wrapper.text()).toContain('Cristian')

    // Encuentra el componente hijo
    const child = wrapper.findComponent({ name: 'CounterComponent' })
    expect(child.exists()).toBe(true)

    // Emite un evento desde el hijo manualmente
    await child.vm.$emit('count', 5)

    // Esperamos a que se actualice el DOM
    await nextTick()

    // Verificamos que el contador se actualiza
    expect(wrapper.text()).toContain('5')
  })

  it('actualiza el nombre del hijo cuando se emite newName', async () => {
    localStorage.setItem('nameUser', 'Pepe')
    const wrapper = mount(ParentCounterPage)

    const child = wrapper.findComponent({ name: 'CounterComponent' })

    // Emitir un nuevo nombre
    await child.vm.$emit('newName', 'Juan')
    await nextTick()

    // Verifica que el nuevo nombre se refleja
    expect(wrapper.text()).toContain('Juan')
    expect(localStorage.getItem('nameUser')).toBe('Juan')
  })
})
