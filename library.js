const myLibrary =[];

class Book
{
  constructor(title,author,status = 'Unread')
  {
    this.title = title;
    this.author = author;
    this.status = status;
  }

  toggleStatus()
  {
    this.status = (this.status === 'Read') ? 'Unread' : 'Read';
  }

}


function addToLibrary(title,author) // adding the book to the array
{
    let book = new Book(title, author);
    myLibrary.push(book);
    display();

}

function display() {
    const table = document.getElementById("list");
  
    table.innerHTML = `
      <tr>
        <th>Number</th>
        <th>Title</th>
        <th>Author</th>
        <th>Status</th>
        <th>Remove</th>
      </tr>
    `;
  
    myLibrary.forEach((lib, index) => {
      let row = table.insertRow();
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${lib.title}</td>
        <td>${lib.author}</td>
        <td><button class="toggle">${lib.status}</button></td>
        <td><button class="remove">REMOVE</button></td>
      `;
  
      // Toggle status button
      row.querySelector('.toggle').addEventListener('click', () => {
        lib.toggleStatus();
        display(); // Refresh the table to reflect the new status
      });
  
      // Remove button
      row.querySelector('.remove').addEventListener('click', () => {
        removeBook(index);
      });
    });
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


    document.getElementById("title").value ='';
    document.getElementById("author").value = '';
    

});

function removeBook(index)
{
    myLibrary.splice(index, 1);
    display();
}





