describe('Teste', () => {
  it('Deve acessar o menu FORMS', async () => {
      await $('~Forms').click()
      expect(await $('~text-input')).toBeDisplayed()
  });

  it('Deve preencher o forms', async () => {
      await $('~text-input').setValue('Teste lucas')
      expect(await $('~text-input')).toBeDisplayed()
      await $('~Dropdown').click()
      const selector = 'new UiSelector().text("This app is awesome").className("android.widget.CheckedTextView")'
      const button = await $(`android=${selector}`)
      await button.click()
      await $('~button-Active').click()
  });

  it('Tela This button is', async () => {
      const isDisplayed = await $("~parentPanel").isDisplayed()
      expect(isDisplayed);
  });
});