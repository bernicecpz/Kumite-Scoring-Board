# Kumite-Scoring-Board
A web application is used to keep track of scores for participant in sparring (kumite) matches during tournament for sports karate.
**NOTE: This web application is intended for internal usage (club-organized tournaments) only.**

**Please refer to the LICENSE file for the MIT License.**

All suggestions are welcome (if any).

## Instructions
Please refer to the "Instructions & Documentation" Folder on how to use the Kumite-Scoring-Board web application.  

## Technology used
- HTML/CSS
- Javascript

## Objective
- To be reconstructed for maximum compatibility to most commonly used browsers

## Reasons for recreating the application:
1. Adobe Flash dependency and incompatibility for certain browsers, e.g. Chrome on older versions
2. Timer is limited to minutes control. Current rules requires the control of seconds (30 seconds), especially for junior matches
3. Background coverage is highly dependent on the resolution of the laptops used
    - Currently the zoom may change the font size of the elements, may need to take extra care while doing the CSS
4. Difficult to manage and modify due to lack of documentation and software. Current technology used is flash content, which is restrictive in modification.
    - HTML and Javascript will be used for the reconstruction of the application, so as to make it easier to maintain and modify in the future
5. Updates in the WKF Rules: there is a new rule of SENSHU for first point unopposed advantage.
    - Including a simple annotation, i.e. checkbox would aid the score tracker to note down who is awarded the advantage throughout the matches

## Potential Features
*NOTE: These features are implemented and delivered at best-effort basis.*

	1) Guided Tour: Integration of IntroJs into the HTML/CSS and Javascript
    - First-time users of the Kumite-Score-Board to quickly learn how to navigate around the web application.
    - Current consideration(s): IntroJs
	2) Help Icons: For quick viewing of shortcut keys to press by hovering over help icon
    - Will need to ensure that the overall dimension of the scoreboard is not affected by the inclusion of the help icon.  
  3) Automation of awarding SENSHU (Further research & requirement gathering required)
    - Definition of SENSHU: "... understood that one contestant has achieved the** first instance of scoring** on the opponent **without having the opponent also score** before the signal."
    - Perhaps configuring the settings to award automatically by default
    - Give option to automate the process of awarding SENSHU
