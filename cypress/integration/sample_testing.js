/// <reference types="cypress" />

describe('User Melakukan Proses Login Pada Siakad', () => {
    it('Cek menuju halaman siakad', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.url().should('eq', 'http://siakad.polinema.ac.id/')
    });

    it('Cek melakukan klik login tanpa mengisi masukan username', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('.btn-success').click()
        cy.contains('Username harus diisi')
    });

    it('Cek melakukan klik login tanpa mengisi masukan password', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('yuki')
        cy.get('.btn-success').click()
        cy.contains('Password harus diisi')
    });

    it('Cek melakukan klik login dengan mengisi username tidak sesuai', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('000')
        cy.get('#password').type('000')
        cy.get('.btn-success').click()
        cy.contains('Username / Password Salah')
    });

    it('Cek melakukan klik login dengan mengisi password tidak sesuai', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710093')
        cy.get('#password').type('000')
        cy.get('.btn-success').click()
        cy.contains('Username / Password Salah')
    });

    it('Cek melakukan klik login dengan mengisi username & password sesuai', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710093')
        cy.get('#password').type('newpallapa123')
        cy.get('.btn-success').click()
        cy.url().should('eq', 'http://siakad.polinema.ac.id/beranda')
    });

    it('Cek menampilkan password', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710093')
        cy.get('#password').type('admin123')
        cy.get('#uniform-chk_tampilkan').click()
    });
});