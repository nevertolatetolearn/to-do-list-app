
//1. Adding a new item to the list:
function newItem (){
  let li = $('<li></li>');
  let inputValue = $('input').val();
  li.append(inputValue);
    if (inputValue === '') {
      alert ("You need to add something!");
    } else {
      $('#list').append(li);
    }
}

//2. Striking through an item:
function crossOut () {
  li.toggleClass ("strike");
}

  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

//3. Adding a delete button

let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode(X));
li.append(crossOutButton);

crossOutButton.on("click", deleteListItem);
function  deleteListItem(){
  li.addClass("delete");
}

//4. Sorting the list
$('#list').sortable();

}
