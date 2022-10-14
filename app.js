var turn = document.getElementById("turn");
let boxes = document.querySelectorAll("#main div"), X_or_O = 0;

function selectWinner(b1,b2,b3){
    b1.classList.add('win');
    b2.classList.add('win');
    b3.classList.add('win');
    turn.innerHTML = b1.innerHTML + "is  a winner";
    turn.style.fontSize = "40px";
}

//Getting a Dub
function getWinner(){
    var box1 = $('#box1');
    var box2 = $('#box1');
    var box3 = $('#box1');
    var box4 = $('#box1');
    var box5 = $('#box1');
    var box6 = $('#box1');
    var box7 = $('#box1');
    var box8 = $('#box1');
    var box9 = $('#box1');
    
    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML){
        selectWinner(box1, box2, box3);
    }else if(box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML){
        selectWinner(box4, box5, box6);
    }else if(box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML){
        selectWinner(box7, box8, box9);
    }else if(box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML){
        selectWinner(box1, box4, box7);
    }else if(box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML){
        selectWinner(box2, box5, box8);
    }else if(box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML){
        selectWinner(box3, box6, box9);
    }else if(box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML){
        selectWinner(box1, box5, box9);
    }else if(box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML){
        selectWinner(box3, box5, box7);
    }
}

for (var i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function () {
      if (this.innerHTML !== "X" && this.innerHTML !== "O") {
        if (X_or_O % 2 === 0) {
          console.log(X_or_O);
          this.innerHTML = "X";
          turn.innerHTML = "O Turn Now";
          getWinner();
          X_or_O += 1;

        } else {
          console.log(X_or_O);
          this.innerHTML = "O";
          turn.innerHTML = "X Turn Now";
          getWinner();
          X_or_O += 1;
        }
      }

    };
  }
  $('#replay').click(replay);

  function replay(){
    for (let i = 0; i < boxes.length; i++){
        box[i].classList.remove('win');
        box[i].innerHTML = '';
        turn.innerHTML = "Play";
        turn.style.fontSize = '25px'
    }
  }

  function myFunction(){
    document.getElementsByTagName('p').value = "X"
  }
