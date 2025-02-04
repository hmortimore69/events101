'use strict';
/**
 * Add your functions here...
 */

function targetTextToConsole(event) {
    console.log(event.target.textContent);
}

function tttcAttacher() {
    const button0 = document.querySelector("#button0");
    button0.addEventListener("click", e => targetTextToConsole(e));
}

function lovelyParaAttacher() {
    const para = document.querySelector("#thisisalovelyparagraph");
    para.addEventListener("click", lovelyToggle);
}

function lovelyButtonAttacher() {
    const button1 = document.querySelector("#button1");
    button1.addEventListener("click", lovelyToggle);
}

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

function snitchAttacher() {
    const mouseWatcher = document.querySelector("#mousewatcher");
    
    mouseWatcher.addEventListener("mouseover", snitchUpdater);
    mouseWatcher.addEventListener("mouseout", snitchUpdater);
}

function reportAttacher() {
    const mouseReporter = document.querySelector("#mousereporter");

    mouseReporter.addEventListener("mousemove", reportUpdater);
}

function reportUpdater(event) {
    const report = document.querySelector("#report");

    report.textContent = `x: ${event.screenX} y: ${event.screenY}`;
}

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
