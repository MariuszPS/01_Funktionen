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

// ausgabeNamen2("Bernhard");  // Args ..
// ausgabeNamen2("Mohanned");
// ausgabeNamen2("Bianca");

function ausgabeNamen2(firstName) { // Parameter
    console.log("Hallo " + firstName + "!"); 
}

/******* Funktionen 02c *******/
// 2c. Mehrere Parameter

// ausgabeNamenParams("Maxine","Mützerich");
// ausgabeNamenParams(prompt("Vorname?"),prompt("Nachname?"));

function ausgabeNamenParams(firstName,familyName) {
    console.log("Hallo " + firstName + " " + familyName + "!");
    }

    /*********Funktionen 03a *********/
    // 03a. Vorbereitung
    // Postulat: one funktion = one job (Uncle Bob)
    // SRP single responsibility principle 

    ausgabeNamenParams("Maxine","Mützerich");

function ausgabeNamenParams(firstName,familyName) {
    // 1 job: composing
    let str = "Hallo " + firstName + " " + familyName + "!";
    // 2 job: output
        console.log(str);
  }




  