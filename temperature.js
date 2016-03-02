"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate()
{
    var result;
    var temp = original.value;
     var regexp =/^([-+]?\d+(?:\.\d*)?)(?:e([-+]?\d+))?(f$|fa$|far$|farenheit$|c$|ce$|cel$|Celsius$)/i;

    var m = temp.match(regexp); //Comprueba que la cadena de entrada sea aceptada por la Expresión Regular.

    if (m)
    {
      var num = m[1];
      var exp = m[2];
      var type = m[3];

      num = parseFloat(num);

      if (exp) // Si existe el exponente entonces calculamos el número correspondiente.
      {
        exp = parseInt(exp);
        num = num * Math.pow(10, exp);
      }

      if (type == 'c' || type == 'C') // Convierte de C -> F
      {
        result = (num * 9/5)+32;
        result = result.toFixed(1)+" Farenheit"
      }
      else  //Convierte de F -> C
      {
        result = (num - 32)*5/9;
        result = result.toFixed(1)+" Celsius"
      }
      converted.innerHTML = result;
    }
    else
    {
      converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
    }
}
