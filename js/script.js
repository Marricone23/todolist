
//document.addEventListener("DOMContentLoaded",()=> {
// Создайте кнопку "закрыть" и добавьте ее к каждому элементу списка

let myNodelist = document.getElementsByTagName("LI");
function closeButton (){
  for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.append(txt);
  myNodelist[i].append(span);
}
}
closeButton();

// Нажмите на кнопку закрыть, чтобы скрыть текущий элемент списка 

let close = document.getElementsByClassName("close");
function hideElemet () 
{for (let i = 0; i < close.length; i++) {
  close[i].addEventListener('click',function() {
    let div = this.parentElement;
    div.style.display = "none";
  });
  }
}
hideElemet();
// Добавление символа "проверено" при нажатии на элемент списка

let list = document.querySelector('ul');
function checked () {
  list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
}
checked();

//добавление нового элемента

function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.append(t);
    if (inputValue === '') {
      alert("Вы должны что-то написать!");
    }else{
      document.getElementById("myUl").append(li);
    }
    document.getElementById("myInput").value = "";
    closeButton();
    hideElemet(); 
  }
