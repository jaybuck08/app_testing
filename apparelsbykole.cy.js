describe('Shopping', () => {


    it('Buy Gown', () => {
        cy.visit("https://apparelsbykole.com/")
        cy.get('.post-894 > .grve-isotope-item-inner > .grve-hover-item > .grve-media > .grve-item-url').click()
        // cy.get('.grve-plus').click().click()    ------ this clicks two times
        cy.get('.grve-plus').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('#grve-main-responsive-header > .grve-header-row > .grve-right-area > .grve-header-elements > .grve-header-element > a > .grve-purchased-items').click()
        cy.get('.wc-block-components-button__text').click()
        //cy.get('a.wc-block-components-button').click()

        //shipping information
        cy.get('#email').type("felix.njoku@outlook.com");
        cy.get('#shipping-first_name').type("Felix");
        cy.get('#shipping-last_name').type("Njoku");
        cy.get('#shipping-address_1').type("2 Dame lane ontario canada");
        cy.get('input#shipping-city').type("London");
        cy.get('#checkbox-control-1').click()
        cy.get('.wc-block-components-textarea').type("call me at the door on 07038695970");
        cy.get('.components-button').click()
    })


})

// describe('Dictionary', () => {


//     it('Lingo', () => {
//         cy.visit("https://www.oed.com/")

//         cy.search("avocado")

//     })

// })