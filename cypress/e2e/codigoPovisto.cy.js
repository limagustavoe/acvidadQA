describe('Formulario de Registro', () => {
  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser') 
  })
  it('Rellenado de campos del Formulario', () => {
    cy.FormularioDeRegistro()
  })
})
