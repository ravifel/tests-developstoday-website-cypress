/// <reference types="cypress"/>

const elements = {
    buttons: {
        send_message: '.sc-d95b1f6e-0'
    },
    fields: {
        name: '#name',
        email: '#email',
        message: '#aboutProject'

    },
    messages: {
        error_nome: '#name-helper-text',
        error_email: '#email-helper-text',
        error_message: '#aboutProject-helper-text'
    }
}

export default {

    fill_name_field(name) {
        cy.get(elements.fields.name)
            .should('be.visible')
            .type(name);
    },

    fill_email_field(email) {
        cy.get(elements.fields.email)
            .should('be.visible')
            .type(email);
    },

    fill_message_field(message) {
        cy.get(elements.fields.message)
            .should('be.visible')
            .type(message);
    },

    click_send_message() {
        cy.get(elements.buttons.send_message)
            .should('be.visible')
            .click()
    },

    validade_error_message_name() {
        cy.get(elements.messages.error_nome).should('be.visible')
            .should('have.text', 'Would you tell us your name?')
    },

    validade_error_message_email() {
        cy.get(elements.messages.error_email)
            .should('be.visible')
            .should('have.text', 'Would you tell us your email?')
    },

    validade_error_message() {
        cy.get(elements.messages.error_message)
            .should('be.visible')
            .should('have.text', 'Please, tell us briefly about the project')
    }
}