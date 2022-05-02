import percySnapshot from '@percy/puppeteer';

describe('Percy test', () => {

    it('should display "google" text on page', async () => {
        await page.goto('https://google.com')
        await expect(page).toMatch('google')
        await percySnapshot(page, 'Test')
    })

})
