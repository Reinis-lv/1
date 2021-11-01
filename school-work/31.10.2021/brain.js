"use strict"

let c = 0; let cmn = ["light mode on","dark mode on"];
const cb = document.getElementById("color-mode");
const b = document.getElementById("color"); const nn = "href";
const nm = ["style-white.css","style-dark.css"];

const w = "white"; const d = "dark"; const con = "color"; 


const dd = "expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/;";
const a = con+"="+w+"; "+dd; const s = con+"="+d+"; "+dd;

function sty() {
  switch(c){
    case 0: 
      b.setAttribute(nn, nm[1]);
      cb.innerHTML = cmn[1];
      document.cookie = s; c++; break;
    case 1:
      b.setAttribute(nn, nm[0]);
      cb.innerHTML = cmn[0];
      document.cookie = a; c--; break;  
} }
function getCookie(cname) {
  let dc = decodeURIComponent(document.cookie);
  let n = cname+"="; let ca = dc.split(';');
  for(let i = 0; i < ca.length; i++) { 
    let c = ca[i];
    while (c.charAt(0) == " ") { c = c.substring(1);}
    if (c.indexOf(n) == 0) { return c.substring(n.length, c.length);}
  } return "";
}
setcolor();
function setcolor() {
  switch(getCookie(con)){
    case d:
      b.setAttribute(nn,nm[1]);
      cb.innerHTML = cmn[1];
      c = 1; break;
    case w:
      b.setAttribute(nn,nm[0]);
      cb.innerHTML = cmn[0];
      c = 0; break;
} }   
