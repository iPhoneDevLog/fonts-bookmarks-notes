/* ****** Undo buttons (reverts to external style sheet CSS) ******** */

function fontFamUndo()
{ localStorage.removeItem("changeFont");
var changeFont = document.getElementById('changeFont').innerHTML="";
localStorage.setItem('changeFont', changeFont);
console.log('Undo fontFam'); }

function backgroundUndo()
{ localStorage.removeItem("changeBG");
var changeBG = document.getElementById('changeBG').innerHTML="";
localStorage.setItem('changeBG', changeBG);
console.log('Undo background'); }

function changeSizeUndo()
{ localStorage.removeItem("changeSize");
var changeSize = document.getElementById('changeSize').innerHTML="";
localStorage.setItem('changeSize', changeSize);
console.log('Undo changeSize'); }

function undoAll() {
changeSizeUndo(); fontFamUndo(); backgroundUndo();
}

/* This will clear a browser's entire localStorage for all previous sessions. Use for development. */
function undoAll() {
localStorage.clear();
}


/* ****** Page formatting methods ******** */

// change font size

function changeSize4()
{ var changeSize = document.getElementById('changeSize').innerHTML="<style type='text/css'>p, .textareaBox\{font-size:2.6em;line-height:1.2em;\}</style>";
localStorage.setItem('changeSize', changeSize);}

function changeSize3()
{ var changeSize = document.getElementById('changeSize').innerHTML="<style type='text/css'>p, .textareaBox\{font-size:2em;line-height:1.2em;\}</style>";
localStorage.setItem('changeSize', changeSize);}

function changeSize2()
{ var changeSize = document.getElementById('changeSize').innerHTML="<style type='text/css'>p, .textareaBox\{font-size:1.7em;line-height:1.2em;\}</style>"; 
localStorage.setItem('changeSize', changeSize);}

function changeSize1()
{ var changeSize = document.getElementById('changeSize').innerHTML="<style type='text/css'>p, .textareaBox\{font-size:1.4em;line-height:1.2em;\}</style>"; 
localStorage.setItem('changeSize', changeSize);}

function changeSizeUndo()
{ var changeSize = document.getElementById('changeSize').innerHTML="";
localStorage.setItem('changeSize', changeSize);}

// change font style, iOS

function fontFamAmType()
{ var changeFont = document.getElementById('changeFont').innerHTML="<style type='text/css'>p, .textareaBox\{font-family:CourierNewPS-BoldMT, American Typewriter;\}</style>"; 
localStorage.setItem('changeFont', changeFont);}

function fontFamArialRound()
{ var changeFont = document.getElementById('changeFont').innerHTML="<style type='text/css'>p, .textareaBox\{font-family:Arial Rounded MT Bold;\}</style>"; 
localStorage.setItem('changeFont', changeFont); }

function fontFamAvNextCond()
{ var changeFont = document.getElementById('changeFont').innerHTML="<style type='text/css'>p, .textareaBox\{font-family:AvenirNextCondensed-DemiBold;\}</style>"; 
localStorage.setItem('changeFont', changeFont); }

function fontFamBaskerville()
{ var changeFont = document.getElementById('changeFont').innerHTML="<style type='text/css'>p, .textareaBox\{font-family:Baskerville;\}</style>"; 
localStorage.setItem('changeFont', changeFont); }

function fontFamChalkboard()
{ var changeFont = document.getElementById('changeFont').innerHTML="<style type='text/css'>p, .textareaBox\{font-family:ChalkboardSE-Regular;\}</style>"; 
localStorage.setItem('changeFont', changeFont); }

function fontFamGeorgia()
{ var changeFont = document.getElementById('changeFont').innerHTML="<style type='text/css'>p, .textareaBox\{font-family:Georgia;\}</style>"; 
localStorage.setItem('changeFont', changeFont); }

function fontFamGill()
{ var changeFont = document.getElementById('changeFont').innerHTML="<style type='text/css'>p, .textareaBox\{font-family:GillSans;\}</style>"; 
localStorage.setItem('changeFont', changeFont); }

function fontFamHelv()
{ var changeFont = document.getElementById('changeFont').innerHTML="<style type='text/css'>p, .textareaBox\{font-family:HelveticaNeue, Helvetica, ArialMT;\}</style>"; 
localStorage.setItem('changeFont', changeFont); }

function fontFamOpt()
{ var changeFont = document.getElementById('changeFont').innerHTML="<style type='text/css'>p, .textareaBox\{font-family:Optima-Regular;\}</style>"; 
localStorage.setItem('changeFont', changeFont); }

function fontFamTimes()
{ var changeFont = document.getElementById('changeFont').innerHTML="<style type='text/css'>p, .textareaBox\{font-family:TimesNewRomanPSMT;\}</style>"; 
localStorage.setItem('changeFont', changeFont); }

function fontFamTrebuchet()
{ var changeFont = document.getElementById('changeFont').innerHTML="<style type='text/css'>p, .textareaBox\{font-family:TrebuchetMS;\}</style>"; 
localStorage.setItem('changeFont', changeFont); }

function fontFamVerdana()
{ var changeFont = document.getElementById('changeFont').innerHTML="<style type='text/css'>p, .textareaBox\{font-family:Verdana;\}</style>"; 
localStorage.setItem('changeFont', changeFont); }

// change font style, Android

function fontFamSans()
{ var changeFont = document.getElementById('changeFont').innerHTML="<style type='text/css'>p, .textareaBox\{font-family:Droid Sans;\}</style>"; 
localStorage.setItem('changeFont', changeFont); }

function fontFamSansMono()
{ var changeFont = document.getElementById('changeFont').innerHTML="<style type='text/css'>p, .textareaBox\{font-family:Droid Sans Mono;\}</style>"; 
localStorage.setItem('changeFont', changeFont); }

function fontFamSerif()
{ var changeFont = document.getElementById('changeFont').innerHTML="<style type='text/css'>p, .textareaBox\{font-family:Droid Serif;\}</style>"; 
localStorage.setItem('changeFont', changeFont); }

// change font/background color combo

function backgroundChgBW()
{ var changeBG = document.getElementById('changeBG').innerHTML="<style type='text/css'>body\{background-color:white;\} p, .textareaBox\{color:black;\}.textareaBox\{background:white;color:black;\}</style>"; 
localStorage.setItem('changeBG', changeBG); }

function backgroundChgGW()
{ var changeBG = document.getElementById('changeBG').innerHTML="<style type='text/css'>body\{background-color:white;\} p, .textareaBox\{color:#aaa;\}.textareaBox\{background:white;color:#aaa;\}</style>"; 
localStorage.setItem('changeBG', changeBG); }

function backgroundChgWB()
{ var changeBG = document.getElementById('changeBG').innerHTML="<style type='text/css'>body\{background-color:black;\} p, .textareaBox\{color:white;\}.textareaBox\{background:black;color:white;\}</style>"; 
localStorage.setItem('changeBG', changeBG); }

function backgroundChgGB()
{ var changeBG = document.getElementById('changeBG').innerHTML="<style type='text/css'>body\{background-color:#000;\} p, .textareaBox\{color:#666;\}.textareaBox\{background:#000;color:#666;\}</style>"; 
localStorage.setItem('changeBG', changeBG); }

function backgroundChgWG()
{ var changeBG = document.getElementById('changeBG').innerHTML="<style type='text/css'>body\{background-color:#999;\} p, .textareaBox\{color:white;\}.textareaBox\{background:#999;color:white;border-color:#fff;\}</style>"; 
localStorage.setItem('changeBG', changeBG); }

function backgroundChgBG()
{ var changeBG = document.getElementById('changeBG').innerHTML="<style type='text/css'>body\{background-color:#999;\} p, .textareaBox\{color:#000;\}.textareaBox\{background:#999;color:#000;border-color:#fff;\}</style>"; 
localStorage.setItem('changeBG', changeBG); }


/* ****** POPULATE INNERHTML with above changes on page ******** */

function loadData() { 
var changeSize = localStorage.getItem('changeSize'); 
document.getElementById('changeSize').innerHTML = changeSize;
var changeFont = localStorage.getItem('changeFont'); 
document.getElementById('changeFont').innerHTML = changeFont;
var changeBG = localStorage.getItem('changeBG'); 
document.getElementById('changeBG').innerHTML = changeBG;
showNote();console.log('loadData fired!');
}

/* The page formatting buttons in a hidden div. */

function addFormatting()
{ document.getElementById('formatContents').innerHTML ="<div id='formatDiv'><p>(This is a test sentence. Change formatting and check it against this sentence.)</p>"
+ "<h3>Font Size</h3>"
+ "<input type='button' class='buttonFormat' value='Enlarge Font +4' onclick='changeSize4()'>"
+ "<input type='button' class='buttonFormat' value='Enlarge Font +3' onclick='changeSize3()'>"
+ "<input type='button' class='buttonFormat' value='Enlarge Font +2' onclick='changeSize2()'>"
+ "<input type='button' class='buttonFormat' value='Enlarge Font +1' onclick='changeSize1()'>"
+ "<input type='button' class='buttonUndo' value='UNDO' onclick='changeSizeUndo()'>"

+ "<h3>Font Style <span style='font-style:italic'>(not all fonts are available in all devices)</span></h3>"
+ "<input type='button' class='buttonFormat' value='Arial Rounded' onclick='fontFamArialRound()'>"
+ "<input type='button' class='buttonFormat' value='Avenir Next Cond.' onclick='fontFamAvNextCond()'>"
+ "<input type='button' class='buttonFormat' value='Baskerville' onclick='fontFamBaskerville()'>"
+ "<input type='button' class='buttonFormat' value='Chalkboard' onclick='fontFamChalkboard()'>"
+ "<input type='button' class='buttonFormat' value='Georgia' onclick='fontFamGeorgia()'>"
+ "<input type='button' class='buttonFormat' value='Gill Sans' onclick='fontFamGill()'>"
+ "<input type='button' class='buttonFormat' value='Helvetica, Arial' onclick='fontFamHelv()'>"
+ "<input type='button' class='buttonFormat' value='Optima' onclick='fontFamOpt()'>"
+ "<input type='button' class='buttonFormat' value='Times New Roman' onclick='fontFamTimes()'>"
+ "<input type='button' class='buttonFormat' value='Trebuchet' onclick='fontFamTrebuchet()'>"
+ "<input type='button' class='buttonFormat' value='Typewriter, Courier' onclick='fontFamAmType()'>"
+ "<input type='button' class='buttonFormat' value='Verdana' onclick='fontFamVerdana()'>"
+ "<input type='button' class='buttonFormat' value='Sans' onclick='fontFamSans()'>"
+ "<input type='button' class='buttonFormat' value='Sans Mono' onclick='fontFamSansMono()'>"
+ "<input type='button' class='buttonFormat' value='Serif' onclick='fontFamSerif()'>"
+ "<input type='button' class='buttonUndo' value='UNDO' onclick='fontFamUndo()'>"

+ "<h3>Background</h3>"
+ "<input type='button' class='buttonFormat' value='Black on White' onclick='backgroundChgBW()'>"
+ "<input type='button' class='buttonFormat' value='Gray on  White' onclick='backgroundChgGW()'>"
+ "<input type='button' class='buttonFormat' value='White on Black' onclick='backgroundChgWB()'>"
+ "<input type='button' class='buttonFormat' value='Gray on  Black' onclick='backgroundChgGB()'>"
+ "<input type='button' class='buttonFormat' value='White on Gray' onclick='backgroundChgWG()'>"
+ "<input type='button' class='buttonFormat' value='Black on Gray' onclick='backgroundChgBG()'>"
+ "<input type='button' class='buttonFormat' value='Undo' onclick='backgroundUndo()'>"
+ "<div class='clearing'></div><input type='button' class='buttonUndo' value='DEFAULT VALUES' onclick='undoAll()'>"
+ "<input type='button' class='buttonDone' value='DONE' onclick='hideOptions();'>"
+ "<p>&nbsp;</p></div></div>";
}


function addFooter()
{ document.getElementById('footerContents').innerHTML="<span style='color:#999999'>Copyright 2012 by Steve Husting</span>"
}

/* Hides the page content div to show the formatting buttons. */
function showOptions()
{  document.getElementById('visible').innerHTML="<style type='text/css'>\#bodyDiv\{display:none;\} \#formatDiv\{visibility:visible;\}</style>";addFormatting();}

/* Hides the page formatiting div to show the page content. */
function hideOptions()
{ document.getElementById('visible').innerHTML="<style type='text/css'>\#bodyDiv\{visibility:visible;\} \#formatDiv\{display:none;\}</style>";}

/* When page loads, hide the formatting options, show the localStorage contents in console, add the formatting buttons at top of page, and populate the textarea with the note user earlier wrote for that page. */
function startFunctions() {
hideOptions(); peekInside(); writeButtons(); showNote();
}

// refreshes the page to show updated content
function refresh() {
var thisPage = window.location.href;
window.location.href=thisPage;
} 

// go to bookmark listing page. Not implemented here. Used for developement.
function toBookmarks() {
window.location = 'bookmarkListing.html';
} 

// go to notes listing page. Not implemented here. Used for developement.
function toNotes() {
window.location = 'noteListing.html';
} 

// You'll want to remove this and its button on index.html. Used for development and a sample button. 
function toPage1() {
window.location = 'page1.html';
} 

// Display localstorage entire content in console: 
// from http://www.joelennon.ie/2011/02/11/basics-of-html5-local-storage/
function peekInside() {
	for(var i=0, len=localStorage.length; i<len; i++) {
    	var key = localStorage.key(i);
    	var value = localStorage[key];
    	console.log("*KEY:* " + key + " ==> *VALUE:* " + value);
    }
}

// Back button
function goBack()
  {
  window.history.back();
  }