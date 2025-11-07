describe('Ingreso dni ya registrado', () => {
  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser') 
  })
  it('Error dni ya registrado', () => {
    cy.dniYaRegistrado()
  })
})