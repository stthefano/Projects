
const books = document.querySelector('#book-list ul');


//Delete books
books.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        books.removeChild(li);
    }

})

//Add books
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    //create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //add classes
    deleteBtn.classList.add('delete');
    bookName.classList.add('name');

    //insert elements to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    books.appendChild(li);


});
