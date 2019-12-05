var letters = "ABCDEFGHI".split("");
var numbers = "123456789".split("");

function clearPuzzle() {
  for (l = 0; l < 9; l++) {
    for (n = 0; n < 9; n++) {
      document.getElementById(letters[l] + numbers[n]).value = "";
    }
  }
}


function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}



function fillPuzzle(puzzle) {

  var preset = [];
  preset[0] = `
400000805
030000000
000700000
020000060
000080400
000010000
000603070
500200000
104000000`;

  clearPuzzle();
  sudoku = preset[puzzle].split("\n");
    for (r = 1; r < 10; r++) {
      var line = sudoku[r].split("");
      for (c = 0; c < 9; c++) {
        // If the number isn't a zero
        if (line[c] != "0") {
          var square = letters[c] + numbers[r-1];
          var square1 = letters[c] + numbers[r-1];
          document.getElementById(square).value = line[c];
          document.getElementById(square1).value = line[c];
        }
      }
    }

}


