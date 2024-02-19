
/* In JavaScript, "querySelector" is a method that allows you to
select elements from the HTML document using CSS-style selectors. 
It's a part of the Document Object Model (DOM) API, which provides 
methods and properties for interacting with HTML documents.
 */

/* menu.addEventListener('click', function() { ... });

    This line adds an event listener to the "menu" element. 
    It listens for a 'click' event, and when the event occurs, 
    it executes the function defined inside.
*/

/*
    menu.classList.toggle('is-active');
    This line toggles the class "is-active" on the menu element. 
*/
/*
    menuLinks.classList.toggle('active');
    This line toggles the class "active" on the menuLinks element. 
*/

const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar_menu');
menu.addEventListener('click',function(){
    menu.classList.toggle('is_active');
    menuLinks.classList.toggle('active');
});
