/*Add skill 
@on"click" listens for a click on the "add Skill" button.
@function runs the function once clicked.
@.append() appends the li element to the end of the list.
@.val("") sets the input button clear.
*/
$("#add-skill").on("click", function(){
    let $skill = $('input').val();//Sets the input text to the $skill
    $('ul').append(`<li id="skill"><span>X</span>${$skill}</li>`);
    $("input").val("");
})

/*Remove skill
@on"click" listens for a click on the remove "X".
@function runs the function when clicked.
@.remove() removes the list element.
*/
$("#skills").on("click", function(){
    let $liText = $("#skill");//Sets the $liText variable to the list item.
    $liText.remove();
});