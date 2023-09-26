const guestHomeScreen = require("../telas/guestHome.screen")
const loginScreen = require("../telas/login.screen")
const myStoreScreen = require("../telas/myStore.screen")

let url = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let password = 'GD*peToHNJ1#c$sgk08EaYJQ'

describe('Acessar painel', () => {
    
    it('Deve realizar o login com sucesso', async () => {
        
        await guestHomeScreen.goToLogin()
        await loginScreen.setStoreAdress(url)
        await loginScreen.clickContinueButton()
        await loginScreen.clickContinueStoreCredentialsButton()
        await loginScreen.setLogin(usuario, password)
        await loginScreen.clickTwoFactorButton() 
        await loginScreen.twoFactorLogin(password)

        expect(await myStoreScreen.getStoreLogo()).toBeTruthy()
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')       
    });
});