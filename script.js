'use strict';

const TABLE_START_STATE = 4;

//Initialize table

const $DYNAMIC_TABLE = document.querySelector('.dynamic__table');
const $TABLE_BUTTONS = document.querySelectorAll('.table__button');

window.onload = () => {
  for (let i = 0; i < TABLE_START_STATE; i++) {
    let $row = $DYNAMIC_TABLE.insertRow(i);
  
    for (let j = 0; j < TABLE_START_STATE; j++) {
      $row.insertCell(j);
    }
  }  
}

let showButtons = () => {
  for (let btn of $TABLE_BUTTONS){
    btn.style.visibility = 'visible';
  }
}

let hideButtons = () => {
  for (let btn of $TABLE_BUTTONS){
    btn.style.visibility = 'hidden';
  }
}

let tdMouseOver = event => {
  let target = event.target;
  if (target.tagName != 'TD') return;
  console.log('td');
}

$DYNAMIC_TABLE.addEventListener('mouseover', showButtons);
$DYNAMIC_TABLE.addEventListener('mouseout', hideButtons);
$DYNAMIC_TABLE.addEventListener('mouseover', tdMouseOver);

