"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
function test()
{
    console.log ("Grizabella");
}   

/****** Funktionen 02a ******/
// 2a. Parametriesierung + Datenübergabe von INNEN

ausgabeNamen();

function ausgabeNamen() {
    let firstName = "Mariusz";
    console.log("Hallo " + firstName + "!");
}

// console.log(firstName);

/****** Funktionen 02b ******/
// 2b. Parametriesierung + Datenübergabe von AUSSEN

ausgabeNamen2();

function ausgabeNamen2(firstName) {
    console.log("Hallo " + firstName + "!");
}