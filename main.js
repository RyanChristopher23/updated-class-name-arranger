student_array=[];
function submit(){
  var display_student_name =[];
  for (var j=1; j<=4; j++){
    var student_name=document.getElementById("student_"+j).value;
    console.log(student_name);
    student_array.push(student_name);
  }
console.log(student_array);
var student_length=student_array.length;
console.log(student_length);
for(var k=0; k<student_length; k++){
    display_student_name.push("<h4>NAME - "+student_array[k]+"</h4>");
    console.log(display_student_name);
}
document.getElementById("display_name_with_commas").innerHTML=display_student_name;
var remove_commas=display_student_name.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting (){
student_array.sort();
console.log(student_array);
var student_sorting=[];
var student_sorting_length=student_array.length;
console.log(student_sorting_length);
for(var k=0; k<student_sorting_length; k++){
    student_sorting.push("<h4>NAME - "+student_array[k]+"</h4>");
    console.log(student_sorting);
}
var remove_commas=student_sorting.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}
function new_update (){
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+student_array+"</h1>";
}