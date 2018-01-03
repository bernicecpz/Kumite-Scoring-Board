# Kumite-Scoring-Board
A web application is used to keep track of scores for participant in sparring (kumite) matches during tournament for sports karate.
**NOTE: While the objective is to be reconstructed for maximum compatibility to most commonly used browsers, it is intended for internal usage (club-organized tournaments) only.**

**Please refer to the LICENSE file for the MIT License.**

All suggestions are welcome (if any).

## Technology used
- HTML/CSS
- Javascript

## Objectives for recreating the application:
1. Adobe Flash dependency and incompatibility for certain browsers, e.g. Chrome on older versions
2. Timer is limited to minutes control. Current rules requires the control of seconds (30 seconds), especially for junior matches
3. Background coverage is highly dependent on the resolution of the laptops used
    - Currently the zoom may change the font size of the elements, may need to take extra care while doing the CSS
4. Difficult to manage and modify due to lack of documentation and software. Current technology used is flash content, which is restrictive in modification
    - HTML and Javascript will be used for the reconstruction of the application, so as to make it easier to maintain and modify in the future
5. Updates in the WKF Rules: there is a new rule of SENSHU for first point unopposed advantage.
    - Including a simple annotation, i.e. checkbox would aid the score tracker to note down who is awarded the advantage throughout the matches
