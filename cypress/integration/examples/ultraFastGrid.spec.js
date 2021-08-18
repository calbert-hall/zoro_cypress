/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe("AppTest", () => {

    it(`ultraFastTest`, function () {
        
        cy.visit('https://www.zoro.com/')

        cy.eyesOpen({
            appName: 'Zoro',
            testName: 'Smoke Test - Cart',
        })

        cy.get('#layout_footer').scrollIntoView({duration: 4000})
        cy.wait(3000)
        cy.get('#main-content').scrollIntoView({duration: 2000})

        cy.eyesCheckWindow({
            tag: "Home",
            target: 'window',
            fully: true
        });

        cy.get("input[placeholder='Search by keyword or model #']").type('G2205445')
        cy.get(".fa.fa-search").click()

        //Item Page
        cy.wait(1000)

        cy.get('#v-app > div > div > div > div.product-details-page__sections > section:nth-child(6)').scrollIntoView({duraction: 10000})
        cy.get('#main-content').scrollIntoView({duration: 2000})
        cy.eyesCheckWindow({
            tag: "Item",
            target: 'window',
            fully: true
        });

        cy.xpath('//button[@aria-label="Add main product to cart"]').click()
        cy.get('.header-cart__icon').click()

        // //Cart Page        
        cy.wait(1000)
        cy.get('#layout_footer').scrollIntoView({duration: 5000})
        cy.get('#main-content').scrollIntoView({duration: 2000})

        cy.eyesCheckWindow({
            tag: "Cart",
            target: 'window',
            fully: true
        });
        cy.eyesClose()
    });

});
