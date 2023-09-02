var num1 = +prompt("Enter Value 1")
var num2 = +prompt("Enter Value 2")

var add = num1+num2
var sub = num1-num2
var mul = num1*num2
var div = num1/num2
var mod = num1%num2

document.write(
      "<h1>"+
          "<table border='1px'>"+
          "<tr>"+ 
               "<td>"+ "Addition" +"</td>" +
               "<td>"+ "Substraction" +"</td>" +
               "<td>"+ "Multiplication" +"</td>" +
               "<td>"+ "Divid" +"</td>" +
               "<td>"+ "MOD" +"</td>"
          +"</tr>" +
          
          "<tr>"+ 
          "<td>"+ add +"</td>" +
          "<td>"+ sub +"</td>" +
          "<td>"+ mul +"</td>" +
          "<td>"+ div +"</td>" +
          "<td>"+ mod +"</td>"
     +"</tr>"     
          +"</table>"   
      +"</h1>"
)