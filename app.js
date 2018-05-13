const list=document.querySelector('#book-list ul');
//delete books
list.addEventListener('click',function(e){
  if (e.target.className == 'delete'){
    const li=e.target.parentElement;
    // li.parentNode.removeChild(li);
       list.removeChild(li);
  }
});

//add book list
const addForm=document.addForm['add-book'];

addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value=addForm.querySelector('input[Type="text"]').value;
});
