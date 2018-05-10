# 8 - 9 May 2018
1. Decided not to include a guided tour with IntroJs as this web application is a simple and standalone. Will simply include a help icon when hover over will display a keyboard layout for quick overview.
2. Addition of more shortcut keys
- For corresponding Category 1 and Category 2 fouls positioning on the screen
- Current suggestions: Q,W,E,A,S,D (AO); I,O,P,J,K,L (AKA). These keys are representative of what is reflected on the keyboard and interface
3. Replace S button to add 30 seconds to the +/= button. 


# 4 January 2018
- Included shortcut keys (ESC and Enter)
1. Enter: Handle pause and resume of timer
2. Esc: Clear all values at the end of a match

Note: Have fully included features available in the initial version

#  28 December 2017
- Revisited Yaphi's code for start and stop timer, tested and customized codes to requirement. Timer is working as expected. More test cases need to be added to safeguard from NaN or any potential errors not within control, e.g. browser compatibility

## Additional features/Shortcut:
1. Shortcut features
- ESC: Reset all values
2. Help Icon
- For convenience of checking which keys to press
- Hover over
3. Guided Tour
		
## Checking off from features stated on 17 December 2017:
### Timer
- Included original feature by setting the minutes up to 4 minutes [DONE]
- Timer function allows the additional of 30 seconds option [DONE, Press Key "S"], though pressing the 30 seconds options would also allow the adding of the time. [ACCEPTED, but must state in instruction/guide]
- Can count down fully and will not continue decrease into the negative numbers [DONE]
- BUT cannot be pause nor resumed [RESOLVED]
- Ability to pause the timer & to store the remaining timing
- Ability to continue the timer when the timer has been paused


#  22 December 2017
- Timer can switch between boolean values accurately, but not returning the correct time frequently
- The timing when starting has high frequency of skipping a few seconds
- The timer can be paused correctly and accurately once. However, subsequently it cannot be paused.
- Should consider writing my own. As of now everything seems to be correct. However,I am not sure how to make it work (Especially for the start and pause)


#  17 December 2017
## Progress on	Features:
### Timer
1. Included original feature by setting the minutes up to 4 minutes
2. Timer function allows the additional of 30 seconds option
- Though pressing the 30 seconds options would also allow the adding of the time.
3. Can count down fully and will not continue decrease into the negative numbers
- BUT cannot be pause nor resumed

###	To be implemented: Timer
1. Ability to pause the timer
- To store the remaining timing
2. Ability to continue the timer when the timer has been paused

#  15 December ~ 16 December 2017
## Modifications made:
- IE display for blueRedDiv has been corrected to work for IE11+ onwards

## Areas to Note:
1. The display of the expected size and viewing will only work when "Duplicate" is selected under the Project Settings
2. Microsoft Edge/IE will need to be zoomed in to 150% to be viewed in the expected resolution/size

## Features priority:
1. Timer Function
- Increase the font of the numbers for the timer
- Includes a popup menu that allows customized input of time
- Can use W3C source codes, but will have to modify the comparison values to simulate the countdown


2. Shortcut features (Using of keyboard shortcuts rather than just clicking only)
3. Guided Tour: Integration IntroJs into the HTML/CSS and Javascript

#  13 December ~ 14 December 2017
- Javascript is written for AO and AKA foul buttons
- Points initialization for AO and AKA, i.e. point 0 is being displayed via JS
- Points manipulation for AO and AKA is tested and working for required functions - add and minus

## Remaining feature to develop:
1. Timer Function - Setting of minutes and seconds, the buttons to start/stop the timer
- Increase the font of the numbers for the timer
- Includes a popup menu that allows customized input of time
2. Esc Function - Reset all the values
3. Guided Tour/ Help Page? - A quick guide on usage (Hover-over)/ Redirect to guide page (Open new window)

## Areas to note:
1. IE displayed the blueRedDiv horizontally instead of the expected display, i.e. vertically (May choose to provide warning NOT to use Internet Explorer)
2. Microsoft Edge/IE will need to be zoomed in to 150% to be viewed in the expected resolution/size
3. Visuals of checkbox across the browsers (Chrome, Firefox, Microsoft Edge/IE) are different (Not within control)


#  12 December 2017
- Scrap current progress for UX/UI; Note: should use px instead of percentage.
- Considering that the interface is displayed via Duplicate screen, it will be fine if able to display as expected [ACCEPTED]
- Resumed plan to proceed to write logic for animation with Javascript

#  9 December 2017
- Drafted the complete layout of the Kumite Scoring Board
- SENSHU option is included
- Check against W3C HTML and CSS validators
## Next milestone
- Logic: Javascript will be included from this date onwards


# Project Started: 4 December 2017
- Technology Used: HTML/CSS and Javascript
