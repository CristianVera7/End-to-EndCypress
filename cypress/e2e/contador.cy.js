describe('Flujo completo del contador', () => {
  it('Usuario introduce su nombre y usa el contador', () => {
    cy.visit('/') // cambia el puerto si es necesario

    // Escribe nombre y navega al contador
    cy.get('input[placeholder="Introduce tu nombre"]').type('Cristian')
    cy.contains('Guardar Nombre').click()

    // Verifica que navega a /Counter
    cy.url().should('include', '/Counter')
    cy.contains('Bienvenido a tu contador, Cristian')

    // Clic en botón 'Incrementar'
    cy.get('button').contains('Incrementar').click()
    cy.contains('has incrementado el contador')
    cy.contains('1')
    cy.get('button').contains('Incrementar').click()
    cy.contains('has incrementado el contador')
    cy.contains('2')

    // Clic en botón 'Decrementar'
    cy.get('button').contains('Decrementar').click()
    cy.contains('has decrementado el contador')
    cy.contains('1')

    // Cambiar nombre
    cy.get('input[placeholder="Reescribe tu nombre"]').clear().type('Juan')
    cy.contains('Cambiar nombre').click()
    cy.contains('Bienvenido a tu contador, Juan')
  })
})
