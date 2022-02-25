
/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/
//"NaviBar" is a variable that searches the document for the navigation bar which has an ID of "navbar__list".
const naviBar = document.getElementById('navbar__list');

//"sections" is an array variable to save all the sections in the document. 
const sections = Array.from(document.querySelectorAll('section'));

//"countOfSections" is a variable that contains the total number of sections in this document.
const countOfSections = sections.length;

/**
 * End Global Variables
 * Start Helper Functions
 *
*/


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

//This function creates a number of list items that is equal to the number of sections. 
//Inside each list item, the function adds an anchor that includes the section Link.
//It also set its class according the predefined class for menus in the CSS file. 
function createNavMenu () {
    for (var i = 0 ; i < countOfSections; i++ ) {
        menuElement = document.createElement('li');
        menuElement.innerHTML = `<a href="#${sections[i].id}" class="menu__link"> ${sections[i].id}</a>`;
        naviBar.appendChild(menuElement);
    };
}


// Add class 'active' to section when near top of viewport

//This function will test each section in the document.
// Then it will allocate the number of the current section in the variable currentSection.
// if two sections are fulfilling the conditions, the program will allocate to the latest checked section.
function checkViewPort () {
        for (var i = 0; i < countOfSections; i++ ) {
        if  (   (sections[i].getBoundingClientRect().top <400) &&
                (sections[i].getBoundingClientRect().top> -250)) {
        }
    }
    currentSec = i-1
    return currentSec //this will return the current section number to the variable current Section. 
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// the function has been declared but not yet invoked. This will cause that the navigation menu will not appear.
// Therefore, the following code is to call the function.
createNavMenu ();


// Scroll to section on link click
    // This part of the code was built to move the user to the proper section.
    // However, it does not work.   

 // naviBar.addEventListener('click', function(chk){
  //chk.preventDefault();
  //chk = chk || window.event;
//    var target = chk.target;
  //  chkText = target.text
    
    //if (chkText= "section1") {
     //   window.scrollTo({
       //   left: 0,
     //     top: 600,
       //   behavior: 'smooth'
        //});
    //} else if (chkText = "section2"){
        //window.scrollTo({
//          left: 0,
          //top: 1200,
//          behavior: 'smooth'
        //});
        //alert(chkText);
      //} else if (chkText = "section3"){
//        window.scrollTo({
//          left: 0,
          //top: 1800,
          //behavior: 'smooth'
        //});
    //} else {
        //window.scrollTo({
//          left: 0,
          //top: 2400,
          //behavior: 'smooth'
        //});
    //}
  //}
///)
