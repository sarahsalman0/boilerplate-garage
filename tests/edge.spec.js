import { test, expect } from '@playwright/test';
const deployedURL = process.env.TEST_URL;

//test invalid login
test('invalid login: testing to ensure invalid users do not gain entry to website', async ({ page }) => {
    await page.goto(`${deployedURL}/auth/signin`);
   
    //simulates invalid login to ensure only valid user's gain access
    await page.getByTestId('email').fill('example@fakemail.com');
    await page.getByTestId('password').fill('password123');
    await page.getByTestId('loginBtn').click();
    await expect(page.getByText('Invalid email or password')).toBeVisible();
    await expect(page).toHaveURL(/\/auth\/signin/);
});

//test direct link redirect
test('redirect to login: direct link to team page redirect back to login page', async ({ page }) => {
    
    //goes directly to team page
    await page.goto(`${deployedURL}/team`);
    //checks that the user is redirected back to login
    await expect(page).toHaveURL(/\/auth\/signin/);
    await expect(page.getByTestId('loginBtn')).toBeVisible();
});

//test that no image gets a fallback - test both those already in place and force an image to error
test('fallback avatar: if a member card does not have an image a fallback avatar is present', async ({ page }) => {
    await page.route('**/team/thomas-clowes.jpg', route => route.abort());
    await page.goto(`${deployedURL}/auth/signin`);
       
    //simulates valid login
    await page.getByTestId('email').fill(process.env.TEST_EMAIL);
    await page.getByTestId('password').fill(process.env.TEST_PASSWORD);
    await page.getByTestId('loginBtn').click();
    
    //redirect to team page
     await page.waitForURL(/\/team/);

    const card = page.getByTestId('memberCardthomas-clowes');
    await expect(card.getByTestId('fallbackImg')).toBeVisible();

});

//test different image sizes

const edgeImgs = [
    'large-photo.jpg', 'tiny-photo.jpg', 
    'tall-photo.jpg', 'wide-photo.jpg',
];

for(const edgeImg of edgeImgs){
    test(`member image crops without distorting card with ${edgeImg}`, async ({ page }) => {
        await page.route('**/team/thomas-clowes.jpg', route => {
            route.fulfill({path: `tests/fixtures/${edgeImg}`});
        });
        
        await page.goto(`${deployedURL}/auth/signin`);
       
        //simulates valid login
        await page.getByTestId('email').fill(process.env.TEST_EMAIL);
        await page.getByTestId('password').fill(process.env.TEST_PASSWORD);
        await page.getByTestId('loginBtn').click();

        //redirect to team page
        await page.waitForURL(/\/team/);

        const card = page.getByTestId('memberCardthomas-clowes');
        const frame = await card.getByRole('img').boundingBox();

        expect(frame.width).toBeCloseTo(64, 0);
        expect(frame.height).toBeCloseTo(64, 0);

    });
};

//test different viewports
const viewports = [
    {name: 'mobile', width:360, height:640},
    {name: 'desktop', width:1280, height:720},
];

for (const viewport of viewports){
    test(`team page renders correctly for ${viewport.name} browser use`, async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.goto(`${deployedURL}/auth/signin`);
       
        //simulates valid login
        await page.getByTestId('email').fill(process.env.TEST_EMAIL);
        await page.getByTestId('password').fill(process.env.TEST_PASSWORD);
        await page.getByTestId('loginBtn').click();

        
        //ensures redirect to team page occurs
        await page.waitForURL(/\/team/);


         // checks that all 5 team cards are present
         const cards = page.getByTestId(/^memberCard/);
         await expect(cards).toHaveCount(5);

         const scroll = await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth);
         expect(scroll).toBe(true);
    });
}

// no current team member blurb exceeds significant character limit
// test will be verfied via uni test in TeamMemberCard.test.tsx









    
    
    
  