App Page Formatting and More! Changing Font and Background Styles, and Adding Notes and Bookmarks

Nov. 7, 2012

AUTHOR

Steve Husting
http://iphonedevlog.wordpress.com

PROJECT SUMMARY

User may choose alternate font styles and backgrounds for their app, and styles will persist from page to page. User may add notes to a textbox, save, and export via email. User may create and remove bookmarks. Designed for mobile and tablet screens. Because I'm using Phonegap/Apache Cordova to create my projects for the iOS and Android environments, it's coded in HTML, JS, CSS, and uses localStorage for persistence.

PURPOSE OF PROJECT

I wanted my app users to style the text and backgrounds in their mobile and especially tablet devices just once, and have that styling carry over to succeeding relevant pages. This project was started when I found the type size just right for my iPod touch, but too small for my Asus Nexus 7, and wanted to change it. This project accomplishes that, allowing 4 hard-wired font size changes, 12 iOS fonts, 3 Android fonts, and 6 font/background combos. More or different iOS fonts can be added to the list (consult http://www.iosfonts.com for the resident iOS fonts). Using @font-face, one could add numerous True-Type fonts to install more fonts. 

FILES INCLUDED IN PROJECT

- index.html
Simply shows buttons linking to the three key pages of the app: sample html page, bookmark listing, and notes listing (detailed next, below). Also includes a "clear storage" button for developer testing. I expect the bookmark listing and notes listing to be accessed from the index page, not from each html page in a project, although you can do it that way. 

- page1.html
Sample html page with formatting, note, bookmarking buttons, and textbox implemented. Add your own html in place of the sample text. Saving and removing of bookmarks and notes are on the page bookmarked or originating the note -- this page.

-  bookmarkListing.html
Shows list of all bookmarks generated by the user, pulled from localStorage. A button links to the bookmarked page. The text next to the button gives the text within the <title> tags to identify the bookmark. The Javascript for this page is on this page. 

-  noteListing.html
Shows a list of all the notes made by the user, pulled from localStorage. An Export button copies all notes to an email. The Javascript for this page is on this page. If you are using Google Tools or other console with your testing, you'll see a list of all the note key/values stored in the console. User can export all notes via email through this page. 

- css/iWebkitStyle.css
Styles the pages for this project. You'll use your own style sheets for our own pages.

- js/bookmarking.js
This page hosts the code for bookmarking the page. Every page you to be bookmarked links to this page. If you are using Google Tools or other console with your testing, you'll see a list of all the bookmark key/values stored in the console. 

- formattingOptions2.js 
Creates all buttons used for choosing font size, font family, and font/background combos. Contains code to store it all in localStorage. Every page you want user to apply formatting links to this page. 

TEST-DRIVING PROJECT

Simply drop all files into a folder on your hard drive and open index.html. Click on the Page 1 button and click on ABC Options to change font and backgound. Hit Done. Add bookmark. Add note and save. Return to index.htm and click on the buttons to view the saved bookmarks and note. Export the note.

PROJECT ASSUMPTIONS

This project assumes . . . 

. . . that your <p> and background styles are set in an external style sheet. This project will write the paragraph and background CSS in specific innerHTML spans at the top of each page, which will effectively override the external style sheet. Of course, one can change the CSS parameters to style any other aspect of the external style sheet. So this project won't apply the new formatting to the <p> and backgrounds that are inline formatted on the page. 

. . . that your <title> tag page titles are unique throughout the app and are descriptive of your pages. If they are not unique, then they'll need to be changed, for the localStorage logic uses the page title to identify the page the bookmark is found on. The user depends on that information to tell which bookmark links to which page. The bookmarks link to pages, and not to a particular area in a page. 

. . . that your pages all have unique filenames. Again, the localStorage logic requires unique filenames in order for the buttons next to each note and bookmark to guide the user back to the page in the bookmark listing and note listing pages. 

. . . that you are not an expert in JS. The Javascript sections have more comments than usual to help the user understand what they are used for. 

PROJECT IMPLEMENTATION

I'm assuming you have enough experience with HTML/CSS/Javascript to know how to modify these files for your own use. You'll want to change . . .

. . . the html and css pages to style them your way and add you own content.

. . . the formattingOptions2.js page to conform to your own CSS stylesheet. For instance, you may only want to change the font styles for text within <li>, not <p>, and so on. Same thing with the background and the textboxes. You may want different parameters for the background colors. You may want to make more typefaces available, and so on. The footer contains my copyright information. Change it to whatever other content you want in the footer. 

. . . the developer sections, such as the clear storage button in index.html and the console display scripting, peekInside(), in bookmarkListing.html and noteListing.html.

. . . the console output. bookmarking.js, formattingOptions2.js, bookmarkListing.html, and noteListing.html have the peekInside() method which shows all the localStorage contents at the time of the page load. You may want to disable this for public use.  

. . . the copious notes regarding the Javascript methods. You might delete them if you are an experienced developer. But they explain the logic behind the program.

BUGES AND PROBLEMS

I have not found any bugs when using on a desktop webkit browser. 

I automatically prepend a user's note entered into the textarea field with the page's title when a note is saved. Unfortunately, when the user adds to a note already there, the page's title is saved again. 

COPYRIGHT AND LICENSE

Copyright (c) 2012 Steve Husting

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

This entire README shall be included in all copies or substantial portions of the Software, such as in a file called README.txt in the Software. 

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.