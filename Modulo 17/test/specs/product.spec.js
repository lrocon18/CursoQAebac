const guestHomeScreen = require("../telas/guestHome.screen");
const loginScreen = require("../telas/login.screen");
const myStoreScreen = require("../telas/myStore.screen");
const productsScreen = require("../telas/products.screen");

let url = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let password = 'GD*peToHNJ1#c$sgk08EaYJQ'
let title = 'Camisa gola V'
let description = 'Esse produto é uma camisa gola V'
let regular = '60,00'
let sale = '45,00'

describe('Cadastrar produtos', () => {

    it('Deve realizar o cadastro de produtos', async () => {

        await guestHomeScreen.goToLogin()
        await loginScreen.setStoreAdress(url)
        await loginScreen.clickContinueButton()
        await loginScreen.clickContinueStoreCredentialsButton()
        await loginScreen.setLogin(usuario, password)
        await loginScreen.clickTwoFactorButton() 
        await loginScreen.twoFactorLogin(password)
        await myStoreScreen.clickProductsButton()
        await productsScreen.clickAddProductButton()
        await productsScreen.clickAddPhysicalProduct()
        await productsScreen.setTitle(title)
        await productsScreen.AddDescription(description)
        await productsScreen.AddPrices(regular, sale)
        await productsScreen.publishChanges()

        expect(await productsScreen.validateProductText()).toBeDisplayed()  
        
    });
    
});