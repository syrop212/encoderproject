//my name
$("#inputArea").keydown(function(e) {
  if(e.keyCode == 67) {
    $("#textArea").append("c");
  }
});

$("#inputArea").keydown(function(e) {
  if(e.keyCode == 65) {
    $("#textArea").append("a");
  }
});
$("#inputArea").keydown(function(e) {
  if(e.keyCode == 82) {
    $("#textArea").append("r");
  }
});
$("#inputArea").keydown(function(e) {
  if(e.keyCode == 76) {
    $("#textArea").append("l");
  }
});
$("#inputArea").keydown(function(e) {
  if(e.keyCode == 79) {
    $("#textArea").append("o");
  }
});
$("#inputArea").keydown(function(e) {
  if(e.keyCode == 83) {
    $("#textArea").append("s" + " ");
  }
});

//check/uncheck
$("input[type='radio']").click(function(e) {
  $("input:checked").prop('checked', false);
  $(this).prop('checked', true);
  if ($("input:checked").val("echo") == "echo") {
    $("#textArea").append();
  }
  else if ($("input:checked").val("Caesar cipher") == "echo") {
    $("#textArea").append();
  }
  else {
    $("#textArea").append();
  }
});
