//"use before each when you need to use same set of functions / entries for the entire test"

describe('Alpha Test', () => {
    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username']").type("Admin");
        cy.get("input[name='password']").type("admin123");
        cy.get('button[type="submit"]').click()

    })

    it('check selfreview', () => {
        cy.get('.orangehrm-todo-list > :nth-child(3) > .oxd-text').click()
        cy.get('.oxd-table-card > .oxd-table-row').should('have.length', 1)



    })

})