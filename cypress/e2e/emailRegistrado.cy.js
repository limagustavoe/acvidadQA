describe('email ya registrado', () => {
  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser') 
  })
  it('Error email ya registrado', () => {
    cy.emailYaRegistrado()
  })
})