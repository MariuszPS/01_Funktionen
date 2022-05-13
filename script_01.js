"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
function test()
{
    console.log("Grizabella");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();

function ausgabeNamen() {
    let firstName = "David"; 
    console.log("Hallo " + firstName + "!"); 
}

// console.log(firstName); // .. stays in Vegas!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

ausgabeNamen2("Bernhard");  // Args ..
ausgabeNamen2("Mohanned");
ausgabeNamen2("Bianca");

function ausgabeNamen2(firstName) { // Parameter
    console.log("Hallo " + firstName + "!"); 
}