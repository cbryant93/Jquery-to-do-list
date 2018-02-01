$(document).ready(function(){

var $newTodo = $("#newTodo");
var $toDoList = $("#toDoList");
var $submit = $("#submit");

// $("newTodo").submit(function(){
//   $toDoList.prepend($("<li>Hello World!</li>"));
//   console.log(toDoList);
// })

$submit.on('click',function(event){
  $toDoList.append("<li>"+$newTodo.val()+"</li>");
  
})


});
