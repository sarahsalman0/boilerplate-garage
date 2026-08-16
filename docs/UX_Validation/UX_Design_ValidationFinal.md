# **Validation of Design Against Re uirements** **<u>q</u>** 

|**Team**|87 - IBM Cyber Security - Quantum Risks|
|---|---|
|**Project**|Crack the channel - Interactive QKD Learning Platform|
|**Task**|Validate the restyled login page and team page mockups<br>against the BA requirements, including required fields, login<br>scope, acceptance criteria and identified edge cases.|
|**Based on**|Restyled Login Page & Team Page: Mockups, prepared by<br>Jerome Altamia, 13 August 2026|
|**Prepared by**|Srilekha Byreddy|
|**Date**|13 August 2026|
|**Status**|Validated - Design requirements and identified edge cases<br>validated; functional testing remains for implementation<br>verification.|



### **BA Validation of UX Design:** 

|Requirement|Validation|Evidence|Result|
|---|---|---|---|
|Team name<br>displayed|Team name is<br>clearly shown at the<br>top of the team<br>page.|UX mockup shows<br>“Team 87 - IBM<br>Cyber Security -<br>Quantum Risks”.|Pass|
|Project name<br>displayed|Project name is<br>displayed directly<br>below the team<br>name.|UX traceability<br>explicitly confirms<br>this|Pass|
|Member photo|Every member has<br>a photo where<br>available; fallback is<br>provided when<br>unavailable.|Photos use a fixed<br>circular frame;<br>initials are used as<br>fallback.|Pass|



|Member name|Names are<br>displayed on each<br>member card.|Traceability confirms<br>names wrap<br>normally to avoid<br>layout problems.|Pass|
|---|---|---|---|
|Member role|Role is displayed for|Roles use the mono|Pass|
||each member|uppercase label<br>treatment||
|Member blurb|Each member has a<br>short description.|Mockup shows<br>blurbs and provides<br>Read more/Show<br>less for longer<br>content|Pass|
|Login visual styling|Login page has a<br>consistent approved<br>visual design.|Dark security-<br>console theme,<br>accent(violet)<br>interactive elements<br>and consistent<br>styling.|Pass|
|Authentication<br>unchanged|This cannot be<br>proven from the<br>visual mockup itself,<br>but the UX<br>document states<br>existing<br>authentication/valida<br>tion/session<br>behaviour was<br>untouched.|UX documentation<br>states existing<br>handlers and<br>validation were<br>unchanged.|Documented|



#### **Edge Cases:** 

|Edge cases|Requirements|UX Design|Result|
|---|---|---|---|
|EC1 -  Missing<br>photo|No broken/empty<br>image area; UX<br>decides treatment.|Use accent(violet) initials avatar.|Pass|
|EC2 - Long<br>name/role|Must remain<br>readable without<br>breaking cards|Flexible columns and normal<br>wrapping are specified.|Covered|



|EC3 - Long blurb|Must remain<br>accessible without<br>breaking layout.|Use Read more/Show less|Pass|
|---|---|---|---|
|EC4 - Different<br>photo dimensions|Photos must remain<br>consistent without<br>distortion.|Fixed circular frame prevents<br>distortion|Pass|
|EC5 - Small screens|Page must remain<br>usable/readable on<br>mobile/narrow<br>screens.|Grid changes from 1 to 3<br>columns depending on screen<br>size|Pass|
|EC6 - Invalid login|Existing validation<br>remains unchanged;<br>UX determines visual<br>error treatment.|Existing red error states are<br>retained/recoloured; validation<br>logic unchanged.|Pass|
|EC7 - Direct access<br>without<br>authentication|Unauthenticated<br>users must not<br>access the team<br>page and must be<br>redirected to login.|/team is protected by a server-<br>side session check.<br>Unauthenticated requests are<br>redirected to /auth/signin  The<br>document states that a logged-<br>out request to /team was directly<br>verified to return a redirect rather<br>than page content|Addressed<br>separately /<br>functional<br>verification<br>required|



##### **Project Title and Visual Consistency** 

**Requirement:** The project title and visual styling displayed in the UX mockups must be consistent with the agreed project direction and current design. 

**Validation Evidence:** The updated login and team-page mockups now reflect the “Crack the Channel - Interactive QKD Learning Platform” project direction. The visual design has also been updated to use the approved violet accent consistently across interactive elements **.** 

##### **Result:** Pass 

##### **Validation Notes:** 

- ✓ Project title updated consistently across the mockups 

- ✓ Violet accent colour reflected in the current design 

- ✓ Login and team-page mockups are visually consistent 

- ✓ Updated mockups are ready for BA re-validation 

. 

## **Acceptance Criteria Validation:** 

#### **AC1 - Successful login leads to team page** 

The requirement is successful login must direct the user to the team page. UX 

design document states that the sign-in redirect target points to team page 

**Result:** Documented, but functional testing is still required. 

#### **AC2 - Invalid login / unauthenticated access** 

The requirement has two parts: 

1. Invalid login must be handled correctly. 

2. Unauthenticated users must not access the team page. 

Invalid login handling is covered, with the existing validation behaviour and error treatment remaining unchanged. The updated implementation also confirms that unauthenticated users cannot directly access /team and are redirected to /auth/Signin. 

**Result: Pass** - Both invalid login handling and unauthenticated direct access are addressed. 

#### **AC3 - Team page displayed correctly** 

The design clearly contains: 

- Team name, Project name, Member information, Photos/fallbacks, Roles and Blurbs 

The mockup also addresses the responsive layout. 

**Result:** Pass for design. 

Actual browser testing is still needed to prove there are no broken elements. 

#### **AC4 - Member information displayed** 

The design directly addresses: 

- Photo, Name, Role, Blurb and the traceability table maps 

each requirement to the team page. 

**Result:** Pass 

#### **AC5 - Approved login styling** 

The login design follows the agreed visual styling, and the UX document states the existing functionality was not changed. 

**Result:** Pass for design. 

