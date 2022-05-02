describe('Passing test', () => {

    it('should display "google" text on page', async () => {
        await page.goto('https://google.com')
        await expect(page).toMatch('google')
    })

})
