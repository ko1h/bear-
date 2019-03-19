import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './try.html';

// import { HungerBear } from "./hungerbear.js";


$(document).ready(function(){
  $("#bear-form").submit(function(event){
  event.preventDefault();

  const playerInput = $("#player1").val();
  console.log(playerInput);

  });
});
