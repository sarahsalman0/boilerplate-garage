import { test, expect } from '@playwright/test';
const deployedURL = "http://localhost:3000";

test('happy path: valid login redirects to fully rendered team page', async ({ page }) => {
    await page.goto(`${deployedURL}/auth/signin`);


   
    //simulates valid login
    await page.getByTestId('email').fill(process.env.TEST_EMAIL);
    await page.getByTestId('password').fill(process.env.TEST_PASSWORD);
    await page.getByTestId('loginBtn').click();

    //ensures redirect to team page occurs
    await page.waitForURL(/\/team/);
    await expect(page).toHaveURL(/\/team/);

    // checks that all 5 team cards are present
    const cards = page.getByTestId(/^memberCard/);
    await expect(cards).toHaveCount(5);

    //checks for all key features within each card
    const count = await cards.count();
    for (let i = 0; i < count; i++){
        const card = cards.nth(i);

        await expect(card.getByTestId('memberName')).not.toBeEmpty();
        await expect(card.locator('img, [data-testid="fallbackImg"]')).toBeVisible();
        await expect(card.getByTestId('memberRole')).not.toBeEmpty();
        await expect(card.getByTestId('memberBlurb')).not.toBeEmpty();

        const readMore = card.getByTestId('truncator');
        const readMoreCount = await readMore.count();
        
        if (readMoreCount > 0){
            const blurbBefore = await card.getByTestId('memberBlurb').innerText();
            await readMore.click();
            const blurbAfter = await card.getByTestId('memberBlurb').innerText();
            expect(blurbAfter.length).toBeGreaterThan(blurbBefore.length);

        }        
        
    }
});


