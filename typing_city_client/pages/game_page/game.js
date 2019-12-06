
// let cube = document.getElementById("cube");
let cube = document.querySelector(".cube-center");
let currentClass = '';

function changeSide(newClass) {
    // let checkedRadio = radioGroup.querySelector(':checked');
    // let moveClass = 'cube-move-' + checkedRadio.value;
    if ( currentClass ) {
        cube.classList.remove( currentClass );
    }
    cube.classList.add( newClass );
    currentClass = newClass;
}


document.addEventListener("DOMContentLoaded", () => {
    let cube = document.getElementById("cube");

    game_start();

    document.body.addEventListener("click", (event) => {
        // let cube = document.getElementById("cube");
        // console.log(cube);
        // cube.style.transform = "rotateY(45deg) rotateX(45deg)"
    });


    document.addEventListener("keyup", (event) => {

        // alert(event.key);

        if(event.key === "ArrowRight") {
            // changeSide("cube-move-right");
            cube.style.transform = "rotateY(90deg)";
        } else if(event.key === "ArrowLeft") {
            // changeSide("cube-move-left");
            cube.style.transform = "rotateY(-90deg)";
        } else if(event.key === "ArrowUp") {
            cube.style.transform = "rotateX(-90deg)";
        } else if(event.key === "ArrowDown") {
            cube.style.transform = "rotateX(90deg)";
        }
    })
});



function game_start() {
    // shoot_torpedo();


    for(let i = 0; i < 10; i++) {

    }   

    setInterval(() => {shootTorpedo();}, 5000);

    // moveTorpedo();

    setInterval(() => {
        moveTorpedo();
    },1000);

}

function moveTorpedo() {
    const divTorpedo = document.querySelector(".torpedo");

    // debugger

    // alert(`${divTorpedo.style.bottom}`);

    setInterval(() => {
        let movePoint = parseInt(divTorpedo.style.bottom) + 5;

        divTorpedo.style.bottom = `${movePoint}px`;
    }, 1000);
}

function shootTorpedo() {

    let randomWord = faker.random.word();

    let divTorpedo = document.createElement('div');
    let imgTorpedo = document.createElement('img');
    let h3Word = document.createElement('h3');

    divTorpedo.className = "torpedo";
    imgTorpedo.src = "torpedo.png";
    h3Word.innerHTML = randomWord;

    divTorpedo.style.bottom = "1px";

    divTorpedo.appendChild(imgTorpedo);
    divTorpedo.appendChild(h3Word);

    let randomPosition = Math.floor(Math.random() * 700) + 200;

    divTorpedo.style.left = `${randomPosition}px`;

    const htmlLowDanger = document.querySelector(".low-danger");

    htmlLowDanger.append(divTorpedo);
}