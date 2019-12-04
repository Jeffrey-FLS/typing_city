
document.addEventListener("DOMContentLoaded", () => {
    let cube = document.getElementById("cube");


    document.body.addEventListener("click", (event) => {
        // let cube = document.getElementById("cube");
        // console.log(cube);
        // cube.style.transform = "rotateY(45deg) rotateX(45deg)"
    });

    document.addEventListener("keyup", (event) => {

        // alert(event.key);

        if(event.key === "ArrowRight") {
            // degrees = 45;
            // cube.style.transform = "rotateY(45deg) rotateX(45deg)"
            cube.style.transform = "rotateY(90deg)";
        } else if(event.key === "ArrowLeft") {
            // cube.style.transform = "rotateY(-45deg) rotateX(-45deg)"
            cube.style.transform = "rotateY(-90deg)";
            // cube.style.scale = "0.1";
            // cube.style.perspective = "50px";

        } else if(event.key === "ArrowUp") {
            cube.style.transform = "rotateX(-90deg)";
        } else if(event.key === "ArrowDown") {
            cube.style.transform = "rotateX(90deg)";
        }
    })
});

