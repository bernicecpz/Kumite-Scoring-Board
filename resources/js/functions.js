"use strict"; //Strict mode: Not allowed to use undeclared variables

//Global variables to be accessed by the functions
//Generic keyword for javascript usage
var document, event, key, button;

//Point Management
var AO_Points = 0, AKA_Points = 0;
var aoPointZone, akaPointZone;

//Time Management
var timeDisplay;
var clockRunning = false;
var timeString = "00:00";
var t = 0, timeInMinutes = 0, currentTime = 0, deadline = 0;

var minutes = 0, seconds = 0, minutesTD = 0, secondsTD = 0;

var oneSecond = 1000;
var oneMinute = 60 * oneSecond;
var halfMinute = 30 * oneSecond;


//Initialization at Startup
function initializePointZonesAndTimer() {

  //Display for the points
  aoPointZone = document.getElementById("AO_PointZone");
  akaPointZone = document.getElementById("AKA_PointZone");
  aoPointZone.innerHTML = AO_Points;
  akaPointZone.innerHTML = AKA_Points;


  timeDisplay = document.getElementById("timerDisplay");
  timeDisplay.innerHTML = timeString;
}

function setTimerButton(event) {
    //Retrieve the button pressed, i.e. the keyCode to determine the action to take
    key = document.getElementById("timerDisplay");
    key = event.keyCode;

    //Check if there is an existing clock currently running
    //This is to safeguard against any accidental setting of the timer during the ongoing matches
    if(!clockRunning){ //Set a bound to the adding of time by 30 seconds; Format won't be modified               
        switch(key){
          case 49:
            timeString = "01:00"
            timeInMinutes = oneMinute;
            break;
          case 50:
            timeString = "02:00"
            timeInMinutes = 2*oneMinute;
            break;
          case 51:
            timeString = "03:00"
            timeInMinutes = 3*oneMinute;
            break;
          case 52:
            timeString = "04:00"
            timeInMinutes = 4*oneMinute;
            break;
          case 187:
            //Check that the timing does not pass the 10 min mark then add 30 seconds
            timeInMinutes = timeInMinutes + halfMinute;
            break;
        }


        //Allowing setting of the time if there isn't an existing clock.
        currentTime = Date.parse(new Date());
        deadline = new Date(currentTime + timeInMinutes);

        //Computation of minutes and seconds after setting the value of timer
        minutesTD = Math.floor((timeInMinutes % (1000 * 60 * 60)) / (1000 * 60));
        secondsTD = Math.floor((timeInMinutes % (1000 * 60)) / 1000);

        //If the seconds option is pressed, i.e. key "+/=", the formatting of the display will be formatted accordingly
        if(key ==187){
          //The if-else condition is to standardize the display of the timer in terms of leading zeros
          if(minutesTD >= 10){
            if(secondsTD > 10){
              timeDisplay.innerHTML = minutesTD + ":" + secondsTD;
            }else{
              timeDisplay.innerHTML = minutesTD + ":0" + secondsTD;
            }
          }else if(minutesTD < 10){
            if(secondsTD > 10){
              timeDisplay.innerHTML = "0"+minutesTD + ":" + secondsTD;
            }else{
              timeDisplay.innerHTML = "0"+minutesTD + ":0" + secondsTD;
            }

          }else{
            timeDisplay.innerHTML = timeString;
          }

        }else{
          timeDisplay.innerHTML = timeString;
        }
    }
}

//Timer functions: Avoid editing these functions as they are forked from another source and has been strictly modified minimally to meet the usage requirement

function time_remaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	return {'total':t,'minutes':minutes, 'seconds':seconds};
}

var timeinterval;
function run_clock(){
	var clock = document.getElementById("timerDisplay");
	function update_clock(){
		var t = time_remaining(deadline);
    if(t.seconds < 10){
        clock.innerHTML = "0" + t.minutes + ":0" + t.seconds;
    }else{
        clock.innerHTML = "0" + t.minutes + ":" + t.seconds;
    }
		if(t.total<=0){
      clearInterval(timeinterval);
      clockRunning = false;
    }
	}
	update_clock(); // run function once at first to avoid delay
	timeinterval = setInterval(update_clock,1000);
}

var paused = false; // is the clock paused?
var time_left; // time left on the clock when paused

function pause_clock(){
	if(!paused){
		paused = true;
		clearInterval(timeinterval); // stop the clock
		time_left = time_remaining(deadline).total; // preserve remaining time
	}
}

function resume_clock(){
	if(paused){
		paused = false;

		// update the deadline to preserve the amount of time remaining
		deadline = new Date(Date.parse(new Date()) + time_left);

		// start the clock
		run_clock();
	}
}

function pauseOrResumeClock(paused){
  if(!paused){
      pause_clock();
  }else{
      resume_clock();
  }
}


//Ongoing checking for mouse clicks and button pressed.
window.onload = function(event){

    //For mouseclicks - handle start, pause & resume clock button clicks
    document.getElementById('timerDisplay').onclick = function(){
      if(clockRunning){
        pauseOrResumeClock(paused);
      }else{
        //If the time is more than 0. To guard against the NaN scenario
        if(timeInMinutes > 0){
          run_clock();
          clockRunning = true;
        }
      }
    }

}

//Miscellenous Functions 



function keyCodeShortcut(event){
    //For keyCodes
    key = event.keyCode;
    switch(key){
      case 13: //Handle start, pause & resume clock using "Enter" key
        if(clockRunning){
          pauseOrResumeClock(paused)
        }else{
          //If the time is more than 0. To guard against the NaN scenario
          if(timeInMinutes > 0){
            run_clock();
            clockRunning = true;
          }
        }
      break;
      
      //Managing of Foul Categories
      //AO
      case 81: //Press Q - AO CAT1 C 
        cat1_AO_C();
      break;
      
      case 87: //Press W - AO CAT1 K
        cat1_AO_K();
      break;

      case 69: //Press E -  AO CAT1 HC
        cat1_AO_HC();
      break;

      case 65: //Press A - AO CAT2 C
        cat2_AO_C();
      break;

      case 83: //Press S - AO CAT2 K
        cat2_AO_K();
      break;

      case 68: //Press D - AO CAT2 HC
        cat2_AO_HC();
      break;

      //AKA
      case 73: //Press I - AKA CAT1 C
        cat1_AKA_C();
      break;

      case 79: //Press O - AO CAT1 K
        cat1_AKA_K(); 
      break;

      case 80: //Press P - AO CAT1 HC
        cat1_AKA_HC();
      break;

      case 74: //Press J - AO CAT2 C
        cat2_AKA_C();
      break;

      case 75: //Press K - AO CAT2 K
        cat2_AKA_K();
      break;

      case 76: //Press L - AO CAT2 HC
        cat2_AKA_HC();
      break;

      case 27: //Reset the interface after a match, BUT will safeguard the timer once it has been started. 
        if(!clockRunning){ //safeguard against clearing the values during ongoing matches
          //Timer
          timeString = "00:00";
          t = 0;
          timeInMinutes = 0;
          currentTime = 0;
          deadline = 0;
          clockRunning = false;
          minutes = 0;
          seconds = 0;
          minutesTD = 0;
          secondsTD = 0;

          //Fouls
          var element = document.querySelectorAll('[id^="Cat"]');
          for (var i = 0; i < element.length; ++i) {
            element[i].style.backgroundColor = "white";
          }

          //SENSHU
          element = document.querySelectorAll('[id^="senshu"]');
          for (var i = 0; i < element.length; ++i) {
            element[i].checked = false;
          }


          //Points
          AO_Points = 0;
          AKA_Points = 0;
          aoPointZone.innerHTML = AO_Points;
          akaPointZone.innerHTML = AKA_Points;
        }
      break;
    }
}

//AO
  //Point Manipulation for AO
  function aoPointZoneAdd() {
    AO_Points = AO_Points + 1;
    aoPointZone.innerHTML = AO_Points;
  }

  function aoPointZoneMinus() {
    if(AO_Points != 0) { //Points should not fall below zero
    AO_Points = AO_Points - 1;
    aoPointZone.innerHTML = AO_Points;
    }
  }

  //CAT1 Foul Buttons

  function cat1_AO_C() {
     button = document.getElementById("Cat1_AO_C");
      if(button.style.backgroundColor == "yellow") {
        button.style.backgroundColor = "white";
      }else{
        button.style.backgroundColor = "yellow";
      }
  }

  function cat1_AO_K() {
    button = document.getElementById("Cat1_AO_K");
      if(button.style.backgroundColor == "yellow") {
        button.style.backgroundColor = "white";
      }else{
        button.style.backgroundColor = "yellow";
      }
  }


  function cat1_AO_HC() {
    button = document.getElementById("Cat1_AO_HC");
      if(button.style.backgroundColor == "yellow") {
        button.style.backgroundColor = "white";
      }else{
        button.style.backgroundColor = "yellow";
      }
  }

  //CAT2 Foul buttons

  function cat2_AO_C() {
    button = document.getElementById("Cat2_AO_C");
      if(button.style.backgroundColor == "yellow") {
        button.style.backgroundColor = "white";
      }else{
        button.style.backgroundColor = "yellow";
      }
  }

  function cat2_AO_K() {
    button = document.getElementById("Cat2_AO_K");
      if(button.style.backgroundColor == "yellow") {
        button.style.backgroundColor = "white";
      }else{
        button.style.backgroundColor = "yellow";
      }
  }


  function cat2_AO_HC() {
    button = document.getElementById("Cat2_AO_HC");
      if(button.style.backgroundColor == "yellow") {
        button.style.backgroundColor = "white";
      }else{
        button.style.backgroundColor = "yellow";
      }
  }



//AKA

  //Point Manipulation for AKA
  function akaPointZoneAdd() {
    AKA_Points = AKA_Points + 1;
    akaPointZone.innerHTML = AKA_Points;
  }

  function akaPointZoneMinus() {
    if(AKA_Points != 0) { //Points should not fall below zero
      AKA_Points = AKA_Points - 1;
      akaPointZone.innerHTML = AKA_Points;
    }
  }

  //CAT1 Foul Buttons
  function cat1_AKA_C() {
    button = document.getElementById("Cat1_AKA_C");
      if(button.style.backgroundColor == "yellow") {
        button.style.backgroundColor = "white";
      }else{
        button.style.backgroundColor = "yellow";
      }
  }

  function cat1_AKA_K() {
    button = document.getElementById("Cat1_AKA_K");
      if(button.style.backgroundColor == "yellow") {
        button.style.backgroundColor = "white";
      }else{
        button.style.backgroundColor = "yellow";
      }
  }


  function cat1_AKA_HC() {
    button = document.getElementById("Cat1_AKA_HC");
      if(button.style.backgroundColor == "yellow") {
        button.style.backgroundColor = "white";
      }else{
        button.style.backgroundColor = "yellow";
      }
  }

  //CAT2 Foul buttons

  function cat2_AKA_C() {
    button = document.getElementById("Cat2_AKA_C");
      if(button.style.backgroundColor == "yellow") {
        button.style.backgroundColor = "white";
      }else{
        button.style.backgroundColor = "yellow";
      }
  }

  function cat2_AKA_K() {
    button = document.getElementById("Cat2_AKA_K");
      if(button.style.backgroundColor == "yellow") {
        button.style.backgroundColor = "white";
      }else{
        button.style.backgroundColor = "yellow";
      }
  }


  function cat2_AKA_HC() {
    button = document.getElementById("Cat2_AKA_HC");
      if(button.style.backgroundColor == "yellow") {
        button.style.backgroundColor = "white";
      }else{
        button.style.backgroundColor = "yellow";
      }
  }
