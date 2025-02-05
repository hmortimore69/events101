'use strict';
/**
 * Add your functions here...
 */

/*
    Inputs: event: Event
    Return: None
    Description: This function outputs the textContent of the events target to the console.
*/
function targetTextToConsole(event) {
    console.log(event.target.textContent);
}

/*
    Inputs: None
    Return: None
    Description: This function outputs the TextContent of #button0 to the console.
*/
function tttcAttacher() {
    const button0 = document.querySelector("#button0");
    button0.addEventListener("click", e => targetTextToConsole(e));
}

/*
    Inputs: None
    Return: None
    Description: This function calls the provided lovelyToggle function when the #thisisalovelyparagraph is clicked.
*/
function lovelyParaAttacher() {
    const para = document.querySelector("#thisisalovelyparagraph");
    para.addEventListener("click", lovelyToggle);
}

/*
    Inputs: None
    Return: None
    Description: This function attaches the event "click" that calls the listenerlovelyToggle to button1.
*/
function lovelyButtonAttacher() {
    const button1 = document.querySelector("#button1");
    button1.addEventListener("click", lovelyToggle);
}

/*
    Inputs: None
    Return: None
    Description: This function attaches an event listener to the `in1` and `in2` input elements.
    When `in1` and `in2` change, their content should be joined together and placed inside the `out1` element, 
    such that if you entered `Darth` and `Vader` the content of `out1` would be `DarthVader`.
*/
function concatAttacher() {
    const in1 = document.querySelector(`#in1`);
    const in2 = document.querySelector(`#in2`);

    function handler() {
        const out1 = document.querySelector(`#out1`);
        out1.textContent = in1.value + in2.value;
    }

    in1.addEventListener("change", handler);
    in2.addEventListener("change", handler);
}

/*
    Inputs: None
    Return: None
    Description: This function attaches the event listener "mouseover" and "mouseout" to the 
    #mousewatcher element that calls the snitchUpdater listener.
*/
function snitchAttacher() {
    const mouseWatcher = document.querySelector("#mousewatcher");
    
    mouseWatcher.addEventListener("mouseover", snitchUpdater);
    mouseWatcher.addEventListener("mouseout", snitchUpdater);
}

/*
    Inputs: None
    Return: None
    Description: This function attaches the event "click" to call the listener "reportUpdater" on button1.
*/
function reportAttacher() {
    const mouseReporter = document.querySelector("#mousereporter");

    mouseReporter.addEventListener("mousemove", reportUpdater);
}

/*
    Inputs: None
    Return: None
    Description: This function modifies the textContent of #report to be the coordinates of the mouse.
*/
function reportUpdater(event) {
    const report = document.querySelector("#report");

    report.textContent = `x: ${event.screenX} y: ${event.screenY}`;
}

/*
    Inputs: None
    Return: None
    Description: This function attaches the event "input" to the listener function for #newid.
    The listener function adds the "invalid" class if the input includes a space, and removes it when it doesn't.
*/
function idValidationAttacher() {
    const newid = document.querySelector("#newid");

    newid.addEventListener("input", function () {
        if (newid.value.includes(" ")) {
            newid.classList.add("invalid");
        } else {
            newid.classList.remove("invalid");
        }
    }); 
}
