
const $tableElement = $('#pixelCanvas');
const $inputHeight = $('#inputHeight');
const $inputWidth = $('#inputWidth');
const $colorPicker = $('#colorPicker');

$('#sizePicker').submit((event) => { // Creates the grid upon clicking the button 'Submit'
  event.preventDefault(); // Prevents the grid to be deleted after it is created

  const width = $inputWidth.val(); // Allows the user to add a chosen value inside the input box to add rows
  const height = $inputHeight.val(); // Allows the user to add a chosen value inside the 2nd input box to add columns
  $tableElement.html('');
/**
 * Call to action for the grid
 * Call to action for colors with click
 */
  makeGrid(height, width);
  addCellClickListener();
});

function makeGrid(height, width) {
  for (let i = 0; i < height; i++) {
    $tableElement.append('<tr></tr>'); // This loop creates a row of cells
  }
  for (let i = 0; i < width; i++) {
    $('tr').append('<td></td>'); // This loop adds a cell after every row
  }
}

function addCellClickListener() {
  $('td').click((event) => { // The function allows the user to color a cell on click
    const color = $colorPicker.val();
    $(event.currentTarget).css('background-color', color); // Lets the chosen color on a click event to be added to the grid
  });
}
