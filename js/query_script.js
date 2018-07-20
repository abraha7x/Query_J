function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$("#BotonEnviar").click(function(){

  var campovacio = "";
  var mensajerror = "";

  //Validacion de campos vacios
  if ($("#email").val() == "")
  {
    campovacio = campovacio + "Email<br>";
  }
  if ($("#telefono").val() == "")
  {
    campovacio = campovacio + "Telefono<br>";
  }
  if ($("#password").val() == "")
  {
    campovacio = campovacio + "Password<br>";
  }
  if ($("#confirm").val() == "")
  {
    campovacio = campovacio + "Confirm<br>";
  }
  if (campovacio!="")
  {
    mensajerror = "<p>Los siguientes campos estan vacios</p>" + campovacio + mensajerror;
  }
  //Validacion formato de email
  if (isEmail($("#email").val()) == false)
  {
    mensajerror = mensajerror + "<p>Tu direccion es incorrecta</p>";
  }
  //Validacion nuemrica
  if ($.isNumeric($("#telefono").val()) == false)
  {
    mensajerror = mensajerror + "<p>Tu numero es incorrecto</p>";
  }
  if ($("#password").val() != $("#confirm").val())
  {
    mensajerror = mensajerror + "<p>Tu contraseña no es igual es incorrecto</p>";
  }
  if (mensajerror!="")
  {
    $("#MensajesError").html(mensajerror);
  }
  else{
    $("#mensajexito").html("<p>Exito</p>");
  }
})
