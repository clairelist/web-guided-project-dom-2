console.log('project is up');

// 👉 TASK 1- Select the following elements from the DOM:

// A- BUTTONS
const launchButton = document.querySelector('#launchButton');
const confirmButton = document.querySelector('#confirmButton');
const cancelButton = document.querySelector('#cancelButton');

//REMEMBER THE '#' WILL SELECT FOR IDs!!!!

// B- MESSAGES
const successMessage = document.querySelector('h1.success');
const failureMessage = document.querySelector('h1.failure');

// C- MODAL
const modal = document.querySelector('.modal');


// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html - x
//  B- The DOM's element.onclick attribute 
//  C- element.addEventListener('click', callback)

//B ::
launchButton.onclick = function(event){
console.log('But what the heck is going on');
};

//but you can only have onclick once on an element! so we use addEventListener::

launchButton.addEventListener('click', function(event){
    console.log(event.target.nodeName);
});

// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.

//function declaration ie name() {}; func expression ie var name = function();
//dif is declared functions are hoisted; func expressions are not! (recall from func intrducy)

function launch(event){
    modal.classList.remove('off');
    successMessage.classList.add('off');
    failureMessage.classList.add('off');
};
//adding back to those classlists fixes bug where they would persist after clicking!

launchButton.addEventListener('click',launch);

// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.


//write 'confirm' function

function confirm(event){
    successMessage.classList.remove('off'); //remove 'off' state from success msg
    modal.classList.add('off'); //add back 'off' state to modal, above^
}

confirmButton.addEventListener('click', confirm); //runs confirm on 'click'.

// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.

function cancel(event){
    failureMessage.classList.remove('off');
    modal.classList.add('off'); //add back 'off' state to modal, above^
}
cancelButton.addEventListener('click',cancel); //runs cancel on 'click'.

// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.

//NOTE THAT event.key vals taht can be set are literal names of the keys! please
//grep docs for more info! For now, let's use 'Escape'::

function escapeMod(event){ //called so because we are 'escaping' the 'modal' get it
    if(event.key==='Escape'){
        modal.classList.add('off');
    }
}

document.addEventListener('keydown',escapeMod);

//PREVENTY DEFAULT!
//we can 'prevent the default behaviour' of something and do something else if we want
//for forEach to work must make these links an array

Array.from(document.links).forEach(link => { 
    link.addEventListener('click',function(event){
        event.preventDefault(); //this will prevent user from clicking our links and going to their target!
    });
});

// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// ! WE ARE DEPRECATING THIS; ONLY REFERENCE BELOW NOTES::

// Play with stopPropagation and stopImmediatePropagation.
//if we want events to stop ie after firing a single event...

modal.addEventListener('click', function(event){
    console.log('look at me now dad no propagation!');
    event.stopPropagation();
})

//in our code, this prevents previous console logs from running, above^^


// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
function openModal() {

}

function closeModal() {

}

function killReports() {

}


// 👉 TASK 9- [STRETCH] Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.
