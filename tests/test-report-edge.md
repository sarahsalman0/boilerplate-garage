# Test Case Report - Edge Cases

## Overview:
- **Project:** Mock Sprint
- **Sprint:** 0
- **Date:** 16.08.26
- **Tester:** Mackenzie Selleck
- **Environment:** Playwright (browser: Chromium), Deployed URL: "https://boilerplate-garage-frontend-cth4d6rsz.vercel.app"
- **Test File:** edge.spec.js (Playwright), TeamMemberCard.test.tsx (Vitest)

## Summary
| Metric | Score |
|---|---|
| Test Cases | 6 |
| Passed | 6 |
| Failed | |
| Skipped | |
| Pass Rate | 100% |

## Test Cases

### TC-01: Invalid Login is rejected with error message
- **Priority:** High
- **Type:** Security
- **Preconditions:**
- TEST_URL is set
- **Steps:**
1. Navigate to /auth/signin
2. Fill in email and password with "example@fakemail.com" and "password123"
3. Click "login" button
4. Assert "Invalid email or password" alert text is visible
5. Assert the URL remains /auth/signin
- **Expected Results:**
- Invalid credentials are rejected
- an error message is shown
- no redirect occurs
- **Actual Result:**
- **Status:** Pass

### TC-02: Direct navigation to /team without session redirects to login page
- **Priority:** High
- **Type:** Security
- **Preconditions:**
- TEST_URL is set
- no authenticated session is present
- **Steps:**
1. Navigate to /team
2. Assert the URL redirects to /auth/signin
3. Assert 'Login' button is visible
- **Expected Results:**
- Unauthorised users are unable to reach the team page directly using the URL
- If use of direct team URL occurs it redirects to login page 
- **Actual Result:**
- **Status:** Pass

### TC-03: fallback avatar displays when member image fails to load
- **Priority:** Medium
- **Type:** Error Handling
- **Preconditions:**
- TEST_URL is set
- TEST_EMAIL and TEST_PASSWORD are valid
- Team member 'thomas-clowes' exists in /team
- **Steps:**
1. Intercept and abort request for **/team/thomas-clowes/jpg
2. Login with valid credentials
3. Wait for /team redirect
4. Locate thomas-clowes member card
5. Assert that the fallback image is visible on the card
- **Expected Results:**
- when a member's image fails to load the card displays a fallback avatar
- **Actual Result:**
- **Status:** Pass

### TC-04: Member image crops all image sizes without distorting card
- **Priority:** Medium
- **Type:** Visual Layout
- **Preconditions:**
- TEST_URL is set
- TEST_EMAIL and TEST_PASSWORD are valid
- Images exist at tests/fixtures/ : large-photo.jpg, tiny-photo.jpg, tall-photo.jpg, wide-photo.jpg
- **Steps (run for each image):**
1. Intercept **/team/thomas-clowes.jpg and fulfill with image
2. Login with valid credentials
3. Wait for redirect to /team
4. Locate thomas-clowes member card
5. Get bounding box for image element
6. Assert bounding box width = 64px
7. Assert bounding box height = 64px

| Image | Result |
|---|---|
| large-photo.jpg | pass |
| tiny-photo.jpg | pass |
| tall-photo.jpg | pass |
| wide-photo.jpg | pass |

- **Expected Results:**
- All images, regardless of source dimensions, render cropped in 64x64 avater frame
- no card distortion
- **Actual Result:**
- **Status:** Pass

### TC-05: Team page renders correctly across different common viewports
- **Priority:** Medium
- **Type:** Visual Layout
- **Preconditions:**
- TEST_URL is set
- TEST_EMAIL and TEST_PASSWORD are valid
- **Steps (run for each viewport):**
1. Set viewport size
2. Login with valid credentials
3. Wait for redirect to /team
4. Assert all 5 member cards are present
5.Assert that the scroll width is <= client width to establish no horizontal overflow

| Viewport | Result |
|---|---|
| mobile | pass |
| desktop | pass |


- **Expected Results:**
- All viewports render all team cards
-page doesn't produce horizontal scroll overflow
- **Actual Result:**
- **Status:** Pass

## Unit Test

### TC-06: TeamMemberCard handles a large blurb without breaking
- **Priority:** Medium
- **Type:** Unit Test
- **Preconditions:**
-
- **Steps:**
1. Construct extreme length blurb
2. Render a test team card using this blurb
3. Capture blurb preview as blurbPre
4. Assert truncator button is present
5. Assert that blurbPre is smaller than blurb
- **Expected Results:**
- An extremely long blurb doesn't crash page or break rendering
- blurb still renders with truncator
- blurb preview is smaller than the full blurb proving truncator is working as expected
- **Actual Result:**
- **Status:** Pass

## Defects Found
| ID | Test Case | Severity | Description | Status |
|---|---|---|---|---|
| | | | | |

## Notes
- On occasion, test may need to be run a few times to confirm results as E2E runtime lag could potentially mess with results due to automated Playwirght actions triggering prior to load of elements or page
- Blurb length edge case was done via Vitest as a Unit Test as all member blurbs within website did not meet threshold of extreme blurb length and passing a test blurb into E2E testing was deemed too difficult and unnecessary for the scope of the test to be achieved. Testing this edge case via Unit Testing was deemed as a more appropriate approach.
- All images used to test avatar cropping were made using Magick
- To test Playwright test run: npx playwright test test/edge.spec.js --ui
- To test Vitest test run: pnpm --filter frontend run test
- To ensure local .env has correct information setup for testing please input the Testing segment found within .env.example and fill in the necessary fields

## Conclusion
- Successful result achieved from all edge cases
