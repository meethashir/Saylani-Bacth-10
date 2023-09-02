var name = prompt('Enter Your Name')
var sub1 = +prompt('Enter Biology Marks')
var sub2 = +prompt('Enter Chemistry Marks')
var sub3 = +prompt('Enter Maths Marks')
var sub4 = +prompt('Enter Physics Marks')
var sub5 = +prompt('Enter Urdu Marks')
var total = sub1 + sub2 + sub3 + sub4 + sub5
var percentage = (total/500)*100

document.write(
    "<h1>"+
        "<table border='1px'>"+
        "<tr>"+ 
             "<td>"+ "Name" +"</td>" +
             "<td>"+ "Biology" +"</td>" +
             "<td>"+ "Chemistry" +"</td>" +
             "<td>"+ "Maths" +"</td>" +
             "<td>"+ "Physics" +"</td>" + 
             "<td>"+ "Urdu" +"</td>"+
             "<td>"+ "Total" +"</td>"+
             "<td>"+ "Percentage" +"</td>"+
        +"</tr>" +
        
        "<tr>"+ 
        "<td>"+ name +"</td>"+
        "<td>"+ sub1 +"</td>" +
        "<td>"+ sub2 +"</td>" +
        "<td>"+ sub3 +"</td>" +
        "<td>"+ sub4 +"</td>" +
        "<td>"+ sub5 +"</td>" +
        "<td>"+ total +"</td>" +
        "<td>"+ percentage +"</td>"+
   +"</tr>"     
        +"</table>"   
    +"</h1>"
)