describe('Registro y redirección al login', () => {
  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser') 
  })

    it('Redirige al login después del registro exitoso', () => {
      cy.log('Completa todos los campos y presiona Registrar')

      cy.redirigirAlLoginDespuesDelRegistro()
    })
})