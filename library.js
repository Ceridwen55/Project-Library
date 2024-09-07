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

}

function display() // display the book in the myLibrary array to a form
{   
    const form = document.getElementById("list");
    
    myLibrary.forEach((lib ,index) => 
        {
            let row = form.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);

            cell1.innerHTML = index + 1;
            cell2.innerHTML = lib.title;
            cell3.innerHTML = lib.author;
            
            
        })
        
}

