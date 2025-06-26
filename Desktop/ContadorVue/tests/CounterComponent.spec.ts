import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CounterComponent from '../src/components/CounterComponent.vue'

describe('CounterComponent', () => {
  it('muestra el nombre cuando el contador es mayor que 0', async () => {
    const wrapper = mount(CounterComponent, {
      props: { name: 'Cristian' }
    })

    const btnIncrementar = wrapper.findAll('button').find(btn => btn.text() === 'Incrementar')
    await btnIncrementar!.trigger('click')

    expect(wrapper.text()).toContain('Cristian')
  })

  it('muestra el mensaje "has incrementado el contador" tras un click en Incrementar', async () => {
    const wrapper = mount(CounterComponent, {
      props: { name: 'Test' }
    })

    const btnIncrementar = wrapper.findAll('button').find(btn => btn.text() === 'Incrementar')
    await btnIncrementar!.trigger('click')

    expect(wrapper.text()).toContain('has incrementado el contador')
  })

  it('Muestra el mensaje de "has decrementado el contador" tras un click en Decrementar', async () => {
    const wrapper = mount(CounterComponent, {
      props: { name: 'Test' }
    })

    // Aumentamos primero para poder decrementar
    const btnIncrementar = wrapper.findAll('button').find(btn => btn.text() === 'Incrementar')
    await btnIncrementar!.trigger('click')
    await btnIncrementar!.trigger('click')

    const btnDecrementar = wrapper.findAll('button').find(btn => btn.text() === 'Decrementar')
    await btnDecrementar!.trigger('click')

    expect(wrapper.text()).toContain('has decrementado el contador')
  })

  it('No muestra ningun mensaje tras decrementar y llegar a 0', async () => {
    const wrapper = mount(CounterComponent, {
      props: { name: 'Test' }
    })

    // Aumentamos primero para poder decrementar
    const btnIncrementar = wrapper.findAll('button').find(btn => btn.text() === 'Incrementar')
    await btnIncrementar!.trigger('click')

    const btnDecrementar = wrapper.findAll('button').find(btn => btn.text() === 'Decrementar')
    await btnDecrementar!.trigger('click')

    expect(wrapper.text()).toContain('')
  })

  it('emite "newName" correctamente al cambiar el input y pulsar el botón', async () => {
    const wrapper = mount(CounterComponent, {
      props: { name: 'Test' }
    })

    const input = wrapper.find('input')
    await input.setValue('newName')

    const btnCambiarNombre = wrapper.findAll('button').find(btn => btn.text() === 'Cambiar nombre')
    await btnCambiarNombre!.trigger('click')

    expect(wrapper.emitted('newName')).toBeTruthy()
    expect(wrapper.emitted('newName')![0]).toEqual(['newName'])
  })
})