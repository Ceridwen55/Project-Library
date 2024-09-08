const myLibrary =[];

function Book(title, author, status = 'Unread') //Object constructor
{
    this.title = title;
    this.author = author;
    this.status = status;
}

Book.prototype.toggleReadStatus = function()
{
    this.status = (this.status === 'Read') ? 'Unread' : 'Read';
}


function addToLibrary(title,author,status) // adding the book to the array
{
    let book = new Book(title, author, status);
    myLibrary.push(book);
    display();

}

function display() // display the book in the myLibrary array to a form
{   
    const table = document.getElementById("list");

    table.innerHTML = `
        <tr>
            <th>Number</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
            <th>Status</th>
            <th></th>
            <th></th>
        </tr>
    `;
    
    myLibrary.forEach((lib , index) => 
        {
            let row = table.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);

            cell1.innerHTML = index + 1;
            cell2.innerHTML = lib.title;
            cell3.innerHTML = lib.author;
            cell4.innerHTML = lib.status;

            let remBut = document.createElement("button");
            remBut.addEventListener("click", function()
                {
                    removeBook(index);
                })
            cell5.appendChild(remBut);
            remBut.innerHTML = "REMOVE";

            let toggle = document.createElement("button");
            toggle.innerHTML = "Toggle read";
            toggle.addEventListener("click", function()
        {
            lib.toggleReadStatus();
            display()
        });
            cell6.appendChild(toggle);

            
            
        })
        
}


//create HTML form with input to use
const form = document.getElementById("form");
form.addEventListener("submit", function(event)
{
    event.preventDefault();

    //manipulate DOM for form to use in JS
    const titl = document.getElementById("title").value;
    const auth = document.getElementById("author").value;
    const stat = document.getElementById("status").value || 'Unread';
    addToLibrary(titl,auth,stat);


    document.getElementById("title").value ='';
    document.getElementById("author").value = '';
    document.getElementById("status").value =''

});

function removeBook(index)
{
    myLibrary.splice(index, 1);
    display();
}





