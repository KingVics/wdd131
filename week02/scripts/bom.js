const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);

// event
button.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    return;
  }
  input.focus();
});

deleteButton.addEventListener('click', function () {
  list.removeChild(li);
  input.value = '';
  input.focus();
});
