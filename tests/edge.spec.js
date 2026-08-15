import { test, expect } from '@playwright/test';
const deployedURL = 'http://localhost:3000';

//test invalid login
test('invalid login: testing to ensure invalid users do not gain entry to website', async ({ page }) => {
    await page.goto(`${deployedURL}/login`);
   
    //simulates invalid login to ensure only valid user's gain access
    await page.getByTestId('email').fill('example@fakemail.com');
    await page.getByTestId('password').fill('password123');
    await page.getByTestId('loginBtn').click();
    //await see what page should say
});

//test direct link redirect
test('redirect to login: direct link to team page redirect back to login page', async ({ page }) => {
    
    //goes directly to team page
    await page.goto(`${deployedURL}/team`);
    //checks that the user is redirected back to login
    await expect(page).toHaveURL(/\/login/);
    await expect(page.getByTestId('login-btn')).toBeVisible();
});

//test that no image gets a fallback - test both those already in place and force an image to error
test('fallback avatar: if a member care does not have an image a fallback avatar is present', async ({ page }) => {
    await page.goto(`${deployedURL}/login`);
       
    //simulates valid login
    await page.getByTestId('email').fill(process.env.testEmail);
    await page.getByTestId('password').fill(process.env.testPassword);
    await page.getByTestId('loginBtn').click();
    
    //redirect to team page
     await page.waitForURL(/\/team/);

    //test that member's without images has a fallback - we have members that weren't comfy with their images on the page
     const card = page.getByTestId('memberCard3');
     await expect(card.getByTestId('fallbackImg')).toBeVisible();

});
//test long blurb truncation
test('long blurb: ensure long blurbs are handled correctly by truncating', async ({ page }) => {
    const longBlurb = 'blah'.repeat(2500);
    await page.goto(`${deployedURL}/login`);
       
    //simulates valid login
    await page.getByTestId('email').fill(process.env.testEmail);
    await page.getByTestId('password').fill(process.env.testPassword);
    await page.getByTestId('loginBtn').click();
    
    //redirect to team page
     await page.waitForURL(/\/team/);

    //test that member's without images has the fallback avatar
     const card = page.getByTestId('memberCard1');
     const testtrunc = card.getByTestId('memberBlurb');
     testtrunc.textContent = longBlurb
     await expect(card.getByTestId('truncator')).toBeVisible;

});

//test different image sizes

//test different viewports










    
    
    
  