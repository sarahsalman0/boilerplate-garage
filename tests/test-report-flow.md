# Test Case Report - E2E Deployment Testing of Happy Path: Login -> Redirect -> Team Page

## Overview:
- **Project:** Mock Sprint
- **Sprint:** 0
- **Date:** 16.08.26
- **Tester:** Mackenzie Selleck
- **Environment:** Playwright (browser: Chromium), Deployed URL: "https://boilerplate-garage-frontend-cth4d6rsz.vercel.app"
- **Test File:** flow.spec.js

## Summary
| Metric | Score |
|---|---|
| Test Cases | 1 |
| Passed | 1 |
| Failed | |
| Skipped | |
| Pass Rate | 100% |

## Test Case: Happy path - valid login redirects to fully rendered team page
- **Priority:** High
- **Type:** E2E
-**Preconditions:**
- TEST_URL, TEST_EMAIL and TEST_PASSWORD .env variables are set and valid
- test account exists and has access to the team page
- **Test Steps:**
1. Navigate to TEST_URL
2. Click "Sign In" button
3. Wait for redirect to /auth/signin
4. Fill in TEST_EMAIL and TEST_PASSWORD in email and password fields
5. Click "Login" button
7. Wait for redirect to /team
8. Assert that the current URL has /team
9. Locate all member card and ensure all 5 members are there
10. For each member card:
    - Assert member's name isn't empty
    - Assert an image or fallback image is visible
    - Assert member's role isn't empty
    - Assert member's blurb isn't empty
    - If a truncator elemnt for the blurb is present:
        - Capture blurb pre truncator click
        - Click truncator
        - Capture blurb after truncator click
        - Assert that the blurb test length has increase after click

- **Expected Result:**
- User can login successfully
- User is redirected from /auth/signin to /team after successful login
- Team page renders all 5 member cards
- Every member card contains a name, role, image or fallback image and blurb
- Where blurb is too large, a truncator exists, expanding it reveals additional blurb text successfully

- **Actual Result:**
- **Status:** Pass
- **Notes:**
- On occasion, test may need to be run a few times to confirm results as E2E runtime lag could potentially mess with results due to automated Playwirght actions triggering prior to load of elements or page
- Ensure that the deployed version that is being tested is the most up to date deployed URL as it must reflect the current state of the github code. If run on old deployments it won't reflect current code state.
- To test Playwright test run: npx playwright test test/flow.spec.js --ui
- To ensure local .env has correct information setup for testing please input the Testing segment found within .env.example and fill in the necessary fields

## Defects Found
| ID | Test Case | Severity | Description | Status |
|---|---|---|---|---|
| | | | | |

## Conclusion
- Successful E2E happy path execution with complete login, redirect and rendering of all 5 team member cards
