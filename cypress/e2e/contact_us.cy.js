/// <reference types= "cypress"/>

import contact_us_page from "../support/pages/contact_us_page";
describe('Contact us Page', () => {
    beforeEach('Acess to Contact Page', () => {
        cy.visit('https://develops.today/contact');
    })

    it('Filling in only the name field', () => {
        contact_us_page.fill_name_field('Name Test');
        contact_us_page.click_send_message();
        contact_us_page.validade_error_message_email();
        contact_us_page.validade_error_message();
    });

    it('Filling in only the email field', () => {
        contact_us_page.fill_email_field('Email Test');
        contact_us_page.click_send_message();
        contact_us_page.validade_error_message_name();
        contact_us_page.validade_error_message();
    });

    it('Filling in only the message field', () => {
        contact_us_page.fill_message_field('Text Test')
        contact_us_page.click_send_message();
        contact_us_page.validade_error_message_name();
        contact_us_page.validade_error_message_email();
    });

})