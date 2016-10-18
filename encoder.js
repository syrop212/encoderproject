


var letters = {
  32: " ",
  65: "a",
  66: "b",
  67: "c",
  68: "d",
  69: "e",
  70: "f",
  71: "g",
  72: "h",
  73: "i",
  74: "j",
  75: "k",
  76: "l",
  77: "m",
  78: "n",
  79: "o",
  80: "p",
  81: "q",
  82: "r",
  83: "s",
  84: "t",
  85: "u",
  86: "v",
  87: "w",
  88: "x",
  89: "y",
  90: "x"
}

//Caesar cipher
var lett = {
  32: " ",
  65: "x",
  66: "y",
  67: "z",
  68: "a",
  69: "b",
  70: "c",
  71: "d",
  72: "e",
  73: "f",
  74: "g",
  75: "h",
  76: "i",
  77: "j",
  78: "k",
  79: "l",
  80: "m",
  81: "n",
  82: "o",
  83: "p",
  84: "q",
  85: "r",
  86: "s",
  87: "t",
  88: "u",
  89: "v",
  90: "w"
}

//echo
$("#inputArea").keydown(function(e) {
    var alpha = letters[e.keyCode];

    var beta = lett[e.keyCode];

    if($("input:checked").val()=="echo") {
      $("#textArea").append(alpha);
    }

    if($("input:checked").val()=="Caesarcipher") {
      $("#textArea").append(beta);
    }

    if($("input:checked").val()=="runes") {
      $("#textArea").append("<images/runes/" + letters[e.keyCode] + ".gif>");
    }
});




//check/uncheck
$("input[type='radio']").click(function(e) {
  $("input:checked").prop('checked', false);
  $(this).prop('checked', true);
});
