
/* Bookmark's key/value is the page title and page location. */
function recordBookmark() {
localStorage.setItem( document.title, window.location.pathname );
console.log('added bookmark --> ' + document.title); alert('Bookmark added');
}

// Remove bookmark from localStorage and show a confirmation message
function removeBookmark() {
localStorage.removeItem(document.title);
alert('removed bookmark.');
}

/* Write the note to localStorage. Prepend the page title to show it on the note listing page and as a helpful reference for the email export; otherwise, the user may not remember what page the note was for once it's exported. Also append date save button was tapped. 
*/
function recordNote() { 
var title = document.title + " -- ",
	currentTime = new Date(),
	month = currentTime.getMonth() + 1; // starts month numbering at 1 and not 0.
	if(month == 1){month = "January"};
	if(month == 2){month = "February"};
	if(month == 3){month = "March"};
	if(month == 4){month = "April"};
	if(month == 5){month = "May"};
	if(month == 6){month = "June"};
	if(month == 7){month = "July"};
	if(month == 8){month = "August"};
	if(month == 9){month = "September"};
	if(month == 10){month = "October"};
	if(month == 11){month = "November"};
	if(month == 12){month = "December"};
var	day = currentTime.getDate(),
	year = currentTime.getFullYear(),
	userNote = document.getElementById('userNote').value + ' (' + month + " " + day + ", " + year + ') ';
localStorage.setItem( window.location.pathname, title + userNote);
console.log('added note --> ' + userNote); 
alert('Note Saved'); refresh();
}

// Pull the note from localStorage and display it in the textbox for the page
function showNote() {
var userNote = localStorage.getItem(window.location.pathname);
document.getElementById('userNote').value = userNote;
}

// Delete the note from localStorage and show confirmation message
function removeNote() {
localStorage.removeItem( window.location.pathname );
console.log('removed note.'); refresh();
}
 
/* Writes Bookmark buttons at top of page. */
function writeButtons()
{ document.getElementById('buttonRow').innerHTML ="<div id='formatDiv'>"
+ "<input type='button' class='buttonFormat' value='Bookmark' onclick='recordBookmark()'>"
+ "<input type='button' class='buttonFormat' value='Remove Bookmark' onclick='removeBookmark()'>"
+ "<a href='bookmarkListing.html'><input type='button' class='buttonFormat' value='View Bookmarks'></a></div>";
}

// Display entire localstorage content in console.
// from http://www.joelennon.ie/2011/02/11/basics-of-html5-local-storage/
function peekInside() {
	for(var i=0, len=localStorage.length; i<len; i++) {
    	var key = localStorage.key(i);
    	var value = localStorage[key];
    	console.log("*KEY:* " + key + " ==> *VALUE:* " + value);
    }
}

/* When page loads, show the localStorage content in the console, write the buttons at the top of the page, and show the note in the textarea on the open page. 
*/
function onLoad() {
peekInside(); writeButtons(); showNote();
}

/* This will clear browser's entire localStorage of all previous sessions */
function undoAll() {
localStorage.clear(); refresh(); 
}

// refreshes page to show updated content, esp. after saving a note.
function refresh() {
var thisPage = window.location.href;
window.location.href=thisPage;
} 

