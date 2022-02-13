friends=[];
function submit(){
    var display_name=[];
    for(var a=1;a<=4;a++){
        var student_name=document.getElementById("name_of_the_student_"+a).value;
        console.log(student_name);
        friends.push(student_name);

    }
    console.log(friends);
    var friends_length=friends.length;
    console.log(friends_length);

    for(var b=0;b<friends_length;b++){
      display_name.push("<h4>name- "+friends[b]+"</h4>") ;
        console.log(display_name);

    }
    console.log(display_name);
    document.getElementById("display_name_with_commas").innerHTML=display_name;

    var remove_comma=display_name.join(" ");
    console.log(remove_comma);
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}
function sorting(){
    friends.sort();
console.log(friends);

var display_sort_name=[];
var friends_length=friends.length;
    console.log(friends_length);

    for(var b=0;b<friends_length;b++){
        display_sort_name.push("<h4>name- "+friends[b]+"</h4>") ;
          console.log(display_sort_name);
  
      }
      var remove_comma=display_sort_name.join(" ");
      console.log(remove_comma);
      document.getElementById("display_name_without_commas").innerHTML=remove_comma; 
   
}