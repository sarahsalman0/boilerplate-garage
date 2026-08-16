## Team Page & Login Styling Requirements

Team: 87 - IBM Cyber Security - Quantum Risks

Project: Quantum Risk Readiness Platform

Role: Business Analyst (BA)

Prepared by: Srilekha Byreddy

Date: 9 August 2026

## 1. Purpose

This document defines the requirements for the Bootstrap Restyling feature, covering the login page styling and the team page. The login changes are limited to visual styling, while the team page must display the team's project and member information clearly.

## 2. Team Page Requirements

| Requirement | Description |
| --- | --- |
| Team Name | Display the team's name clearly. |
| Project name | Display the project name. |
| Member photo | Each team member must have a profile photo where |
|   | available, with an appropriate treatment required when a |
|   | photo is unavailable. |
| Member name | Each member's name must be displayed. |
| Member role | Each member's project role must be displayed. |
| Member blurb | Each member's short description/about blurb must be |
|   | displayed. |

## 3. Login Page Scope

The login page will be visually restyled using the agreed design. Existing authentication, validation and session behaviour must remain unchanged. Upon successful login, the existing/application login flow should lead the user to the team page.


## 4. Scope Boundaries

## In Scope

- Restyling the existing login page according to the approved UX design.

- Maintaining the existing authentication behaviour.

- Maintaining the existing login to team page flow.

- Redirecting the user to the team page after successful login.

- Preventing unauthenticated users from accessing the team page directly.

- Redirecting unauthenticated users back to the login page.

- Displaying the team name and project information.

- Displaying each team member's photo, name, role and blurb.

- Accommodating the identified content and display edge cases.

## Out of Scope

- Changes to the existing authentication implementation or authentication provider.

- Changes to the underlying login validation logic.

- Development of new authentication functionality.

- Changes to functionality unrelated to the login and team page feature.

## 5. Design Dependency

The BA requirements define the required information and expected behaviour. UX will determine the visual design and appropriate presentation of identified edge cases. The BA will validate the final design against these requirements before development.

## 6. Edge cases

## Edge Case 1 - Missing photo

If a team member doesn't have a photo?

- Requirement: If a team member does not have a profile photo, the team page must provide an appropriate visual treatment rather than displaying a broken or empty image area. UX will determine the specific treatment.

## Edge Case 2 - Long team member name or role

If a team member has a very long name or role?

- Requirement: If a team member has an unusually long name or role title, the information must remain readable without overlapping or breaking the member-card layout. UX will determine the appropriate text treatment.

## Edge Case 3 - Long team member blurb


If a team member has a very long blurb?

- Requirement: If a team member's blurb is significantly longer than the expected length, the team page must display the content without causing layout issues or making the information inaccessible. UX will determine the appropriate presentation and interaction.

## Edge Case 4 - Different photo dimensions

If team members' photos have different sizes or dimensions?

- Requirement: If team members provide photos with different dimensions or aspect ratios, all photos must be displayed consistently without distortion or negatively affecting the layout. UX will determine the appropriate image treatment.

## Edge Case 5 - Smaller screen sizes

If the team page is viewed on a mobile or narrow screen?

- Requirement: The team page must remain usable and readable on smaller screens, with member cards adapting to the available screen size without overlapping, being cut off, or becoming unusable. UX will determine the appropriate responsive layout.

## Edge Case 6 - Invalid login input

If invalid or incomplete information is entered in the email/username or password field?

- Requirement: The existing application validation behaviour must continue to handle invalid or incomplete login input correctly. UX will determine how the validation state is visually presented within the approved login design, without changing the underlying validation logic.

## Edge Case 7 - Direct access without authentication

If an unauthenticated user attempts to access the team page directly?

- Requirement: The existing authentication/session state must be checked before allowing access to the team page. Unauthenticated users must not be able to access the team page directly, and UX will determine the appropriate presentation of the redirect/error state.

## 7. Acceptance Criteria

## AC1 - Successful login leads to team page

- Given the user has valid login credentials

- When the user successfully logs in

- Then the user is directed to the team page.


## AC2 - Invalid login and unauthenticated access

- Given the user enters invalid or incomplete login information, or is not authenticated

- When the user attempts to log in or access the team page directly

- Then the existing authentication and session behaviour prevents unauthorised access to the team page, and the appropriate UX-determined error or redirect treatment is applied.

## AC3 - Team page is displayed correctly

- Given the user has successfully logged in

- When the User views the team page

- Then the team name, project information, and all required information for every team member are displayed completely, with no missing content, broken elements, or visual/layout issues.

## AC4 - Team member information is displayed

- Given the team page is displayed

- When the user views the team members

- Then the required information for every team member, including their photo, name, role and blurb, is displayed completely without missing required content.

## AC5 - Approved login styling is applied

- Given the login page is displayed

- When the user views and interacts with the page

- Then the login page follows the approved design without altering its existing functionality.

## 8. Edge Cases Acceptance Criteria:

## EC1 - Missing profile photo

- Given a team member does not have a profile photo

- When the team page is displayed

- Then an appropriate visual treatment must be provided without displaying a broken or empty image area.

## EC2 - Long team member blurb

- Given a team member has a significantly longer blurb than expected

- When the team page is displayed

- Then the member's information must remain accessible without overlapping or breaking the page layout.

## EC3 - Long team member name or role


- Given a team member has an unusually long name or role

- When the team page is displayed

- Then the name and role must remain readable without overlapping or breaking the member-card layout.

## EC4 - Different photo dimensions

- Given team members have profile photos with different dimensions or aspect ratios

- When the team page is displayed

- Then all profile photos must be presented consistently without distortion or negatively affecting the member-card layout.

## EC5 - Smaller screen sizes

- Given the team page is displayed on a mobile or narrow screen

- When the user views the team members

- Then all required information remains visible, readable and usable without overlapping, being cut off or breaking the page layout.

## EC6 - Invalid Login Input

- Given the user enters invalid or incomplete login information

- When the user attempts to log in

- Then the existing validation behaviour is triggered, the user is not incorrectly directed to the team page, and the UX-determined solution for displaying the validation/error state is applied.

## EC7 - Direct access without authentication

- Given the user is not authenticated

- When the user attempts to access the team page directly

- Then access to the team page is prevented and the user is redirected to the login page using the existing authentication/session behaviour.
