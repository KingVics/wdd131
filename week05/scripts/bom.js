const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

function displayList(item) {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  li.textContent = item;
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete');
  li.append(deleteButton);
  list.append(li);

  deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
  console.log('all done');
}

function setChapterList(name, value) {
  localStorage.setItem('myList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  const list = localStorage.getItem('myList');
  return JSON.parse(list) || [];
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

// event
button.addEventListener('click', () => {
  if (input.value != '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  }
});
