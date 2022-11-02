/// <reference types="cypress" />


const reg_user ={
    name:"Raul Dias",
    email:"raulhendrix@gmail.com",
    pword:"Raul199819982"
}
const DOM_elmts = {
    signin : '.login',
    home:'.logo',
    account:'.account',
    loginBtn:'#SubmitLogin > span',
    inp_email:'#email',
    inp_pass:'#passwd',
    target_prod:'#homefeatured > :nth-child(2)',
    tgt_prod_btn:'#homefeatured > :nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span',
    btn_checkout:'.button-medium > span',
    count_prod: '#summary_products_quantity',
    checkout_btn: '.cart_navigation > .button > span'
}

describe('Adding Products in the cart - ',()=>{

    it('Sign in and add a product in the cart - ',()=>{
        cy.visit('/')
        cy.get(DOM_elmts.signin).click()
        cy.get(DOM_elmts.inp_email).type(reg_user.email);
        cy.get(DOM_elmts.inp_pass).type(reg_user.pword);
        cy.get(DOM_elmts.loginBtn).click();
        cy.get(DOM_elmts.account).should('contain',reg_user.name)
        cy.get(DOM_elmts.home).click()
        cy.get(DOM_elmts.target_prod)

        cy.get(DOM_elmts.tgt_prod_btn).click()
        cy.get('.layer_cart_product')
            .parent()
            .contains('Product successfully added to your shopping cart') 
        cy.get(DOM_elmts.btn_checkout).click()  
        cy.get(DOM_elmts.count_prod).should('contain','1 Product')   
              

    })
    it('Adding a new product by choosing T-shirts menu option - ',()=>{
        cy.visit('/')
        cy.get(DOM_elmts.signin).click()
        cy.get(DOM_elmts.inp_email).type(reg_user.email);
        cy.get(DOM_elmts.inp_pass).type(reg_user.pword);
        cy.get(DOM_elmts.loginBtn).click();
        cy.get(DOM_elmts.account).should('contain',reg_user.name)
        cy.get('.sf-menu > :nth-child(3) > a').click();
        cy.get('.lnk_view > span').click();
        cy.get('.exclusive > span').click();
        cy.get('.layer_cart_product')
            .parent()
            .contains('Product successfully added to your shopping cart') 
        cy.get(DOM_elmts.btn_checkout).click()  
        cy.get(DOM_elmts.count_prod).should('contain','1 Product')   
              

    })

    it('Add product from home page then from T-shirts menu option, checking 2 products int the cart',()=>{
        cy.visit('/')
        cy.get(DOM_elmts.signin).click()
        cy.get(DOM_elmts.inp_email).type(reg_user.email);
        cy.get(DOM_elmts.inp_pass).type(reg_user.pword);
        cy.get(DOM_elmts.loginBtn).click();
        cy.get(DOM_elmts.account).should('contain',reg_user.name)
        cy.get(DOM_elmts.home).click()
        cy.get(DOM_elmts.target_prod)

        cy.get(DOM_elmts.tgt_prod_btn).click()
        cy.get('.layer_cart_product')
            .parent()
            .contains('Product successfully added to your shopping cart') 
        cy.get(DOM_elmts.btn_checkout).click();
        cy.get(DOM_elmts.count_prod).should('contain','1 Product');

        cy.get('.sf-menu > :nth-child(3) > a').click();
        cy.get('.lnk_view > span').click();
        cy.get('.exclusive > span').click();
        cy.get('.layer_cart_product')
            .parent()
            .contains('Product successfully added to your shopping cart') 
        cy.get(DOM_elmts.btn_checkout).click()  
        cy.get(DOM_elmts.count_prod).should('contain','2 Products')  

    })
    it('Adding a product in the cart, then sign in at checkout - ',()=>{
        cy.visit('/')
        
        cy.get(DOM_elmts.tgt_prod_btn).click()
        cy.get('.layer_cart_product')
            .parent()
            .contains('Product successfully added to your shopping cart') 
        cy.get(DOM_elmts.btn_checkout).click()  
        cy.get(DOM_elmts.count_prod).should('contain','1 Product') 
        cy.get(DOM_elmts.checkout_btn).click()
        cy.get(DOM_elmts.inp_email).type(reg_user.email);
        cy.get(DOM_elmts.inp_pass).type(reg_user.pword);
        cy.get(DOM_elmts.loginBtn).click();
        cy.get(DOM_elmts.account).should('contain',reg_user.name)
        
    })
})