let alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;

let myNodelist = document.getElementsByTagName('li');
let ulDOM = document.getElementById('list');
let listStorage = localStorage.getItem('myList') ? JSON.parse(localStorage.getItem('myList')) : [];

listStorage.forEach(addItem);

function newElement() {
  let input = document.getElementById('task').value;
  if (input !== '' && input.match(alpha)) {
    listStorage.push(input);
    localStorage.setItem('myList', JSON.stringify(listStorage));
    document.getElementById('task').value = '';
    addItem(input);
    $('.success').toast('show');
  } else {
    $('.error').toast('show');
  }
}

function addItem(txt) {
  let li = document.createElement('li');
  li.innerHTML = txt;
  list.insertBefore(li, list.childNodes[0]);
  const delBtn = document.createElement('button');
  delBtn.textContent = '\u00D7';
  delBtn.classList.add('close');
  li.appendChild(delBtn);
  delBtn.addEventListener('click', e => {
    li.parentNode.removeChild(li);
    listStorage = listStorage.filter(e => e !== txt);
    localStorage.setItem('myList', JSON.stringify(listStorage));
  });
}

ulDOM.addEventListener('click', function (item) {
  if ((item.target.tagName = 'li')) {
    item.target.classList.toggle('checked');
  }
});
