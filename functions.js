// 
// Copyright (c) 2017 by Bernice Choy
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

//Point Management
var AO_Points = 0;
var AKA_Points = 0;
var aoPointZone;
var akaPointZone;

//Time Management
var timeString = "00:00";
var timeDisplay;
var clockRunning = false;

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
    key = document.getElementById("timerDisplay");
    key = event.keyCode;
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

// handle pause and resume button clicks
window.onload = function(){
  document.getElementById('timerDisplay').onclick = function(){

    if(clockRunning){
      console.log("There is an existing clock. Check status");
      if(!paused){
          pause_clock();
          console.log("Pause toggle");
        }else{
          resume_clock();
          console.log("Resume toggle");
        }
    }else{
      //If the time is more than 0. To guard against the NaN scenario
      if(timeInMinutes > 0){
        run_clock();
        clockRunning = true;
        console.log("No clock running initially. A new clock is running now.");
      }
    }

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
    var button = document.getElementById("Cat1_AO_C");
      if(button.style.backgroundColor == "yellow") {
        button.style.backgroundColor = "white";
      }else{
        button.style.backgroundColor = "yellow";
      }
  }

  function cat1_AO_K() {
    var button = document.getElementById("Cat1_AO_K");
      if(button.style.backgroundColor == "yellow") {
        button.style.backgroundColor = "white";
      }else{
        button.style.backgroundColor = "yellow";
      }
  }


  function cat1_AO_HC() {
    var button = document.getElementById("Cat1_AO_HC");
      if(button.style.backgroundColor == "yellow") {
        button.style.backgroundColor = "white";
      }else{
        button.style.backgroundColor = "yellow";
      }
  }

  //CAT2 Foul buttons

  function cat2_AO_C() {
    var button = document.getElementById("Cat2_AO_C");
      if(button.style.backgroundColor == "yellow") {
        button.style.backgroundColor = "white";
      }else{
        button.style.backgroundColor = "yellow";
      }
  }

  function cat2_AO_K() {
    var button = document.getElementById("Cat2_AO_K");
      if(button.style.backgroundColor == "yellow") {
        button.style.backgroundColor = "white";
      }else{
        button.style.backgroundColor = "yellow";
      }
  }


  function cat2_AO_HC() {
    var button = document.getElementById("Cat2_AO_HC");
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
    var button = document.getElementById("Cat1_AKA_C");
      if(button.style.backgroundColor == "yellow") {
        button.style.backgroundColor = "white";
      }else{
        button.style.backgroundColor = "yellow";
      }
  }

  function cat1_AKA_K() {
    var button = document.getElementById("Cat1_AKA_K");
      if(button.style.backgroundColor == "yellow") {
        button.style.backgroundColor = "white";
      }else{
        button.style.backgroundColor = "yellow";
      }
  }


  function cat1_AKA_HC() {
    var button = document.getElementById("Cat1_AKA_HC");
      if(button.style.backgroundColor == "yellow") {
        button.style.backgroundColor = "white";
      }else{
        button.style.backgroundColor = "yellow";
      }
  }

  //CAT2 Foul buttons

  function cat2_AKA_C() {
    var button = document.getElementById("Cat2_AKA_C");
      if(button.style.backgroundColor == "yellow") {
        button.style.backgroundColor = "white";
      }else{
        button.style.backgroundColor = "yellow";
      }
  }

  function cat2_AKA_K() {
    var button = document.getElementById("Cat2_AKA_K");
      if(button.style.backgroundColor == "yellow") {
        button.style.backgroundColor = "white";
      }else{
        button.style.backgroundColor = "yellow";
      }
  }


  function cat2_AKA_HC() {
    var button = document.getElementById("Cat2_AKA_HC");
      if(button.style.backgroundColor == "yellow") {
        button.style.backgroundColor = "white";
      }else{
        button.style.backgroundColor = "yellow";
      }
  }
