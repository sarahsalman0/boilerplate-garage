# **Validation of Design Against Requirements**

| Team | 87 \- IBM Cyber Security \- Quantum Risks |
| :---- | :---- |
| **Project** | Quantum Risk Readiness Platform |
| **Task** | Validate the restyled login page and team page mockups against the BA requirements, including required fields, login scope, acceptance criteria and identified edge cases.  |
| **Based on** | Restyled Login Page & Team Page: Mockups, prepared by Jerome Altamia, 11 August 2026 |
| **Prepared by** | Srilekha Byreddy |
| **Date** | 11 August 2026 |
| **Status** | Validated \- Design requirements and identified edge cases validated; functional testing remains for implementation verification.  |

## **BA Validation of UX Design:**

| Requirement | Validation | Evidence | Result |
| :---- | :---- | :---- | :---- |
| Team name displayed  | Team name is clearly shown at the top of the team page.  | UX mockup shows “Team 87 \- IBM Cyber Security \- Quantum Risks”.  | Pass |
| Project name displayed  | Project name is displayed directly below the team name.  | UX traceability explicitly confirms this  | Pass |
| Member photo  | Every member has a photo where available; fallback is provided when unavailable.  | Photos use a fixed circular frame; initials are used as fallback.  | Pass |
| Member name  | Names are displayed on each member card.  | Traceability confirms names wrap normally to avoid layout problems.  | Pass |
| Member role  | Role is displayed for each member  | Roles use the mono uppercase label treatment  | Pass |
| Member blurb | Each member has a short description.  | Mockup shows blurbs and provides Read more/Show less for longer content | Pass |
| Login visual styling  | Login page has a consistent approved visual design.  | Dark security-console theme, teal interactive elements and consistent styling.  | Pass |
| Authentication unchanged  | This cannot be proven from the visual mockup itself, but the UX document states existing authentication/validation/session behaviour was untouched.  | UX documentation states existing handlers and validation were unchanged.  | Documented |

### 

### **Edge Cases:**

| Edge cases | Requirements | UX Design | Result |
| :---- | :---- | :---- | :---- |
| EC1 \-  Missing photo | No broken/empty image area; UX decides treatment.  | Use teal initials avatar.  | Pass |
| EC2 \- Long blurb  | Must remain accessible without breaking layout.  | Use Read more/Show less  | Pass |
| EC3 \- Long name/role  | Must remain readable without breaking cards  | Flexible columns and normal wrapping are specified.  | Pass |
| EC4 \- Different photo dimensions  | Photos must remain consistent without distortion.  | Fixed circular frame prevents distortion  | Pass |
| EC5 \- Small screens  | Page must remain usable/readable on mobile/narrow screens.  | Grid changes from 1 to 3 columns depending on screen size  | Pass |
| EC6 \- Invalid login  | Existing validation remains unchanged; UX determines visual error treatment.  | Existing red error states are retained/recoloured; validation logic unchanged.  | Pass |
| EC7 \- Direct access without authentication  | Unauthenticated users must not access the team page and must be redirected to login.  | /team is protected by a server-side session check. Unauthenticated requests are redirected to /auth/signin  The document states that a logged-out request to /team was directly verified to return a redirect rather than page content  | Pass |

# **Acceptance Criteria Validation:**

**AC1 \- Successful login leads to team page**

The requirement is successful login must direct the user to the team page.

UX design document states that the sign-in redirect target points to team page

**Result:** Documented, but functional testing is still required.

### **AC2 \- Invalid login / unauthenticated access**

The requirement has two parts:

1. Invalid login must be handled correctly.  
2. Unauthenticated users must not access the team page.

Invalid login handling is covered, with the existing validation behaviour and error treatment remaining unchanged. The updated implementation also confirms that unauthenticated users cannot directly access /team and are redirected to /auth/Signin.

**Result: Pass** \- Both invalid login handling and unauthenticated direct access are addressed.

**AC3 \- Team page displayed correctly**

The design clearly contains:

* Team name, Project name, Member information, Photos/fallbacks, Roles and Blurbs

The mockup also addresses the responsive layout.

**Result:** Pass for design.

Actual browser testing is still needed to prove there are no broken elements.

### **AC4 \- Member information displayed**

The design directly addresses:

* Photo, Name, Role, Blurb

and the traceability table maps each requirement to the team page.

**Result:**  Pass

### **AC5 \- Approved login styling**

The login design follows the agreed visual styling, and the UX document states the existing functionality was not changed.

**Result:**  Pass for design.

