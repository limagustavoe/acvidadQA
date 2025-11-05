describe('Formulario de Registro', () => {
  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser') 
  })

  it.only('comprobando mail registrado', () => {

    cy.log('Comprobamos error de mail registrado')

    cy.mailRegistrado()



  })
})