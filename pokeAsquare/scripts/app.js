
$('button').on('click', () => {
  console.log('click works');
  // when the user clicks the button, we populate the square
  createSquares(30);

})

//Now we need to write a function named (createSquares) that sets up our squares, Try to write a function that takes a parameter numberOfSquares that will create an arbitary number of divs depending on the parameter and attach them to the squares class from the html


const createSquares = (numberOfSquares) => {

for (let i = 0; i <= numberOfSquares; i++) {
// creating squares
  const $div = $('<div/>');
  // this is where the random color is applied
  applyRandomColor($div);
  // attach the square
  $('.squares').append($div);

}

}


// Now we have a bunch of blue squares, but we want our squares to have a radom, red, blue, or green color try to write a function to make that happen.

const applyRandomColor = (square) => {
  const randNum = Math.floor(Math.random() * 3) + 1;

  if(randNum === 1){
    square.css('background-color', 'red');

  }else if(randNum === 2) {
    square.css('background-color', 'blue');
  }else {
    square.css('background-color', 'green');
  }

}
