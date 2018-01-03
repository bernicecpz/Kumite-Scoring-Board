//
// Copyright (c) 2017 by Bernice Choy Pei Zhen
// Fork of original work by Justin (Interface design & its functions for initial scoreboard)
// Fork of an original work by Yaphi for Countdown Timer (https://codepen.io/yaphi1/pen/QbzrQP)
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//


//Logic to be written here
"use strict"; //Strict mode: Not allowed to use undeclared variables

//Global variables to be accessed by the functions

//Generic keyword for javascript usage
var document;
var event;
var key;
var button;

//Point Management
var AO_Points = 0;
var AKA_Points = 0;
var aoPointZone;
var akaPointZone;

//Time Management
var timeDisplay;
var timeString = "00:00";
var t = 0;
var timeInMinutes = 0;
var currentTime = 0;
var deadline = 0;
var clockRunning = false;
var minutes = 0;
var seconds = 0;
var minutesTD = 0;
var secondsTD = 0;

var timeObject;
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
    if(!clockRunning){
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
          case 83:
            if(timeInMinutes < oneMinute){
              timeString = "00:30"
              timeInMinutes = halfMinute;
            }else{
              timeInMinutes = timeInMinutes + halfMinute;
            }

            break;
        }


        //Allowing setting of the time if there isn't an existing clock.
        currentTime = Date.parse(new Date());
        deadline = new Date(currentTime + timeInMinutes);

        //Computation of minutes and seconds after setting the value of timer
        minutesTD = Math.floor((timeInMinutes % (1000 * 60 * 60)) / (1000 * 60));
        secondsTD = Math.floor((timeInMinutes % (1000 * 60)) / 1000);

        //If the seconds option is pressed, i.e. key "S", the formatting of the display will be formatted accordingly
        if(key == 83){
          //The if-else condition is to standardize the display of the timer in terms of leading zeros
          if(secondsTD > 10){
            timeDisplay.innerHTML = "0"+minutesTD + ":" + secondsTD;
          }else{
            timeDisplay.innerHTML = "0"+minutesTD + ":0" + secondsTD;
          }
        }else{
          timeDisplay.innerHTML = timeString;
        }
    }
}

//Timer functions: Avoid editing these functions as they are forked from another source and has been modified to meet the requirements of the app

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

//To be reviewed
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
      case 27:
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
