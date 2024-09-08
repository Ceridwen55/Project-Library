const myLibrary =[];

function Book(title, author) //Object constructor
{
    this.title = title;
    this.author = author;
}




function addToLibrary(title,author) // adding the book to the array
{
    let book = new Book(title, author);
    myLibrary.push(book);
    display();

}

function display() // display the book in the myLibrary array to a form
{   
    const table = document.getElementById("list");
    
    myLibrary.forEach((lib , index) => 
        {
            let row = table.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);

            cell1.innerHTML = index + 1;
            cell2.innerHTML = lib.title;
            cell3.innerHTML = lib.author;
            
            
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
    addToLibrary(titl,auth);

    console.log("Tit: ", titl,"Auth: ", auth);

    document.getElementById("title").value ='';
    document.getElementById("author").value = '';

});





