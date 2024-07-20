/* eslint-disable */
import "./style.css";

window.onload = () => {
  //write your code here
  document.querySelector("#excusa").innerHTML = crearExcusas();
};

let crearExcusas = () => {
  let quien = ["Mi gato", "Mi perro", "Mi amigo", "Mi hermano"];
  let que = ["se accidentó", "se quebró", "se rompió el craneo", "se murió"];
  let cuando = ["antes de salir", "ayer", "hoy", "cuando venía para aquí"];

  let IDquien = Math.floor(Math.random() * quien.length);
  let IDque = Math.floor(Math.random() * que.length);
  let IDcuando = Math.floor(Math.random() * cuando.length);

  return quien[IDquien] + " " + que[IDque] + " " + cuando[IDcuando];
};
