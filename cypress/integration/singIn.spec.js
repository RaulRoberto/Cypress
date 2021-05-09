/// <reference types="cypress" />

const user ={
    name:"Lebowski",
    email:"thebig@lebowski.com",
    pword:"lebleb123"
}
const reg_user ={
    name:"Raul Dias",
    email:"raulhendrix@gmail.com",
    pword:"Raul199819982"
}
const DOM_elmts = {
    signin : '.login',
    account:'.account',
    loginBtn:'#SubmitLogin > span',
    inp_email:'#email',
    inp_pass:'#passwd',
    message_login:'div.alert.alert-danger ol li'
}
const mssgsLogin={
        blank_email:'An email address required.',
        invalid_email:'Invalid email address.',
        invalid_password:'Invalid password.',
        auth_failed:'Authentication failed.',
        blank_password:'Password is required.'
}
describe('Sing in - ',()=>{
    
    it('Sign in with a valid e-mail and an wrong password - ',()=>{
        cy.visit('/')
        cy.get(DOM_elmts.signin).click()
        cy.get(DOM_elmts.inp_email).type(user.email);
        cy.get(DOM_elmts.inp_pass).type(user.pword);
        cy.get(DOM_elmts.loginBtn).click();
        cy.get(DOM_elmts.message_login).should('contain',mssgsLogin.auth_failed)
    })
    it('Sign in with a blank e-mail - ',()=>{
        cy.visit('/')
        cy.get(DOM_elmts.signin).click()
        // Skipping the e-mail element
        // cy.get(DOM_elmts.inp_email).type();
        cy.get(DOM_elmts.inp_pass).type(user.pword);
        cy.get(DOM_elmts.loginBtn).click();
        cy.get(DOM_elmts.message_login).should('contain',mssgsLogin.blank_email)
    })
    it('Sign in with a blank password - ',()=>{
        cy.visit('/')
        cy.get(DOM_elmts.signin).click()
        cy.get(DOM_elmts.inp_email).type(user.email);
        // Skkiping the password element
        // cy.get(DOM_elmts.inp_pass).type();
        cy.get(DOM_elmts.loginBtn).click();
        cy.get(DOM_elmts.message_login).should('contain',mssgsLogin.blank_password)
    })
    it('Sign in with a registered e-mail and correct password - ',()=>{
        cy.visit('/')
        cy.get(DOM_elmts.signin).click()
        cy.get(DOM_elmts.inp_email).type(reg_user.email);
        cy.get(DOM_elmts.inp_pass).type(reg_user.pword);
        cy.get(DOM_elmts.loginBtn).click();
        cy.get(DOM_elmts.account).should('contain',reg_user.name)
    })

    it('Sign in with a registered e-mail and invalid password - ',()=>{
        cy.visit('/')
        cy.get(DOM_elmts.signin).click()
        cy.get(DOM_elmts.inp_email).type(reg_user.email);
        cy.get(DOM_elmts.inp_pass).type('abc');
        cy.get(DOM_elmts.loginBtn).click();
        cy.get(DOM_elmts.message_login).should('contain',mssgsLogin.invalid_password)
    })
})