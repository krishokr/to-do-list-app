
//Todo

// 1. The user can add a new item to a list of items.
// 2. The user can cross out an item from the list of items.
// 3. The user can delete an item from the list of items.
// 4. The user can change the order of items in the list of items.

function newItem(){

    //javascript
    //1. Adding a new item to the list of items: 
        let li = $('<li></li>');
        let inputValue = $('#input').val();
        li.append(inputValue);
    
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            let list = $('#list');
            list.append(li);
        }
    
     //2. Crossing out an item from the list of items:
        function crossOut() {
            li.toggleClass("strike");
        }
        
        li.on("click",function() {
            return crossOut()
        });

    
     //3(i). Adding the delete button "X": 
        let crossOutButton = $("<crossOutButton></crossOutButton");
        crossOutButton.append('X');
        li.append(crossOutButton);
    
        crossOutButton.on("click", function() {
            deleteListItem();
        });

     //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
        function deleteListItem(){
            li.addClass("delete");
        }
     // 4. Reordering the items: 
        $('#list').sortable();

    
}



