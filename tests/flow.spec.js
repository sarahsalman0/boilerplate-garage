import { test, expect } from '@playwright/test';
const deployedURL = 'to get'

test('happy path: valid login redirects to fully rendered team page', async ({ page }) => {
    await page.goto(`${deployedURL}/login`);
   
    //simulates valid login
    await page.getByTestId('email').fill(process.env.testEmail);
    await page.getByTestId('password').fill(process.env.testPassword);
    await page.getByTestId('loginBtn').click();

    //ensures redirect to team page occurs
    await page.waitForURL(/\/team/);
    await expect(page).toHaveURL(/\/team/);

    // checks that all 5 team cards are present
    const cards = page.getByTestId(/^member-card-/);
    await expect(cards).toHaveCount(5);

    //checks for all key features within each card
    const count = cards.count();
    for (let i = 0; i < count; i++){
        const card = cards.nth(i);
        await expect(card.getByTestId('memberName')).not.toBeEmpty();
        await expect(card.locator('img, [data-testid="fallbackImg"]')).toBeVisible();
        await expect(card.getByTestId('memberRole')).not.toBeEmpty();
        await expect(card.getByTestId('memberBlurb')).not.toBeEmpty();
        
    }
});


