'use strict';
/**
 * Add your functions here...
 */

function targetTextToConsole(event) {
    console.log(event.target.textContent);
}

function tttcAttacher() {
    const button0 = document.getElementById("button0");
    button0.addEventListener("click", e => targetTextToConsole(e));
}

function lovelyParaAttacher() {
    const para = document.getElementById("thisisalovelyparagraph");
    para.addEventListener("click", lovelyToggle);
}

function lovelyButtonAttacher() {
    const button1 = document.getElementById("button1");
    button1.addEventListener("click", lovelyToggle);
}

function concatAttacher() {
    const in1 = document.getElementById("in1");
    const in2 = document.getElementById("in2");

    function handler() {
        const out1 = document.getElementById("out1");

        out1.textContent = in1.value + in2.value;
    }

    in1.addEventListener("change", handler);
    in2.addEventListener("change", handler);
}

function snitchAttacher() {
    const mouseWatcher = document.getElementById("mousewatcher");
    
    mouseWatcher.addEventListener("mouseover", snitchUpdater);
    mouseWatcher.addEventListener("mouseout", snitchUpdater);
}

function snitchUpdater(e) {
    const snitch = document.getElementById("snitch");
    snitch.textContent = e.type === "mouseover" ? "IN" : "OUT";
}

function reportAttacher() {
    const mouseReporter = document.getElementById("mousereporter");

    mouseReporter.addEventListener("mousemove", reportUpdater);
}

function reportUpdater(event) {
    const report = document.getElementById("report");

    report.textContent = `x: ${event.screenX} y: ${event.screenY}`;
}

function idValidationAttacher() {
    const newid = document.getElementById("newid");

    newid.addEventListener("input", function () {
        if (newid.value.includes(" ")) {
            newid.classList.add("invalid");
        } else {
            newid.classList.remove("invalid");
        }
    }); 
}
