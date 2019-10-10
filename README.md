# Kumite-Scoring-Board
A dashboard used to keep track of scores for participant for sparring (kumite) matches during tournament for sports karate.
**NOTE: This standalone application is intended for internal usage (club-organized tournaments) only.**

**This project is licensed under the terms of the BSD 3-Clause License.**

All suggestions are welcome. If any bugs are found while using this application, please feel free to drop me a comment here or email @ bernicecpz@gmail.com

## Instructions
Please refer to the "Instructions & Documentation" Folder on how to use the Kumite-Scoring-Board web application. Shortcut keys can be viewed through the '?' icon at the top right corner.

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
4. Difficult to manage and modify due to lack of documentation and software. The initial version of the scoreboard used flash content, which is restrictive in modification.
    - HTML and Javascript will be used for the reconstruction of the application, hopefully making it easier to maintain and modify in the future
5. Updates in the WKF Rules: there is a new rule of SENSHU for first point unopposed advantage.
    - Including a simple annotation, i.e. checkbox would aid the score tracker to note down who is awarded the advantage throughout the matches

## Known Issues
Currently, the known issues are related to UX/UI issues. It may take some time to update them. I will attempt to resolve these issues while working on potential features. 
*Issues will be attempted to be resolved at best-effort basis, depending on time availability.*
1. If 30 seconds is pressed first, not able to increment to other values.  
Workaround: Must set the minutes before the seconds
2. The display/entire dashboard is compatible to display resolution (1920 x 1080) and used with the "Duplicate" screen for the project settings.  
Workaround: May choose to zoom in/out by 10-20%

## Potential Features
*NOTE: These features will be implemented and delivered at best-effort basis, depending on time availability.*
1. Switching of background (AO/AKA <-> AKA/AO)
    - To be according to the competitors' position at the start.
    - Switching the position of the background would enable the score-keeper to manage the scores more easily, regardless of the experience of the score-keeper
        - Feature considerations:
          1. Will I be able to swap the entire values between the 2 colors?
          2. Should I do that? If the user press once too many times, will there be an issue?
          3. How do I safeguard the changes? Can I save a backup of the information display on the screen into a text file?
    - Note to Self: Instructions in keyboard shortcuts and the table must be updated upon implementation to avoid confusion
2. Backup of scores / Reporting
    - Can allow score-keeper to backup the data by exporting into CSV file (?)
    - Save into sessionStorage / localStorage of the browser; worst case scenario: technical way of checking. 
        - May not be good for the user of the laptop, use up unnecessary resources(?). 
    - Perhaps if the name of the participant can be included, it can help in compiling the scores of the matches in the event. 
        - However, this is high complexity & must be reliable to be used. Extra care should be taken if attempt to deliver this feature. 

## Archived Features
*Highly unlikely to implement them due to the reasons stated in the points*
- Automation of awarding SENSHU (Further research & requirement gathering required)
    - Definition of SENSHU: "... understood that one contestant has achieved the **first instance of scoring** on the opponent **without having the opponent also score** before the signal."
    - For now, advised against automating due to the extra steps if intervention is required.
      - Perhaps configuring the settings to award automatically by default
      - Give option to automate the process of awarding SENSHU
      - Currently advised against automating it due to the steps required to revert any decisions would be more than if this step is managed manually.
- Absolute Winning (8 point difference)
    - Set the timer to 00:00
    - Concerns: If the score-tracker give the wrong point either side, and the opponent given the points is one point away from a 8 point difference. The issue would be how do I rectify or revert this effect of resetting the timer? 
    - Similar to point 2, may not automate it due to the extra steps needed as explained in the concerns above.
- Flashing of Timer
    - At 10 second mark, the timer will flash in order to notify the score tracker to ring the bell to signal the 10 second countdown.  
        - May unintentionally be distracting
