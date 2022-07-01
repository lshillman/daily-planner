# Daily Planner

## [See it live](https://lshillman.github.io/daily-planner/)

A lightweight planner for a single workday. Could I have used Google Tasks? Sure. Did I want to? Heck no! Why would I want to deny myself the opportunity to learn all about moment.js and bootstrap? Plus, of course, a refresher on localStorage.

Essentially this is a page that will let you store some text for each hour of a workday. It will format each block of time depending on whether it's in the past, present, or future.

## Technologies used:

* HTML
* CSS
* JS
* jQuery
* moment.js
* Bootstrap


## Code snippet

Since I had save buttons separate from textareas, getting the textareas' values into localStorage involved some pretty gnarly dom traversal:

````javascript
function saveToLocal(e) {
    console.log(e.currentTarget.parentElement.previousElementSibling);
    localStorage.setItem(e.currentTarget.parentElement.previousElementSibling.id, e.currentTarget.parentElement.previousElementSibling.value);
}
````

## Colors! Responsiveness!

Truly, a tour de force. Check out this responsiveness. Marvel at the color coding.

https://user-images.githubusercontent.com/5232938/176805227-5e67e083-fc57-4757-9e04-1c13bca7a439.mov

## Credits

No help on this one, but I did make extensive use of the bootstrap, jQuery, and moment.js documentation.


## License

Talk to me if you want to use this.
