const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');

button1.addEventListener('click', function (e) {
    document.querySelector(".fullcontain").style.display = 'block';
    document.querySelector(".fullcontain.lowresolve").style.display = 'none';
    button1.style.background = "#fff";
    button1.style.color = "#333";
    button2.style.background = "#333";
    button2.style.color = "#fff";

});

button2.addEventListener('click', function (e) {
    document.querySelector(".fullcontain").style.display = "none";
    document.querySelector(".fullcontain.lowresolve").style.display = 'block';
    button1.style.background = "#333";
    button1.style.color = "#fff";
    button2.style.background = "#fff";
    button2.style.color = "#333";
});

// Open/close Project 1
var openProject1 = document.querySelector(".openProject1");
var project1 = document.getElementById("project1");
var closeProject1 = document.getElementById("closeProject1");
openProject1.addEventListener('click', function (e) {
    project1.style.display = "block";
});
closeProject1.addEventListener('click', function (e) {
    project1.style.display = "none";
});
// Open close Project 2
var openProject2 = document.querySelector(".openProject2");
var project2 = document.getElementById("project2");
var closeProject2 = document.getElementById("closeProject2");
openProject2.addEventListener('click', function (e) {
    project2.style.display = "block";
});
closeProject2.addEventListener('click', function (e) {
    project2.style.display = "none";
});
// Open close Project 3
var openProject3 = document.querySelector(".openProject3");
var project3 = document.getElementById("project3");
var closeProject3 = document.getElementById("closeProject3");
openProject3.addEventListener('click', function (e) {
    project3.style.display = "block";
});
closeProject3.addEventListener('click', function (e) {
    project3.style.display = "none";
});
// Open close Project 4
var openProject4 = document.querySelector(".openProject4");
var project4 = document.getElementById("project4");
var closeProject4 = document.getElementById("closeProject4");
openProject4.addEventListener('click', function (e) {
    project4.style.display = "block";
});
closeProject4.addEventListener('click', function (e) {
    project4.style.display = "none";
});
// open close Project 5
var openProject5 = document.querySelector(".openProject5");
var project5 = document.getElementById("project5");
var closeProject5 = document.getElementById("closeProject5");
openProject5.addEventListener('click', function (e) {
    project5.style.display = "block";
});
closeProject5.addEventListener('click', function (e) {
    project5.style.display = "none";
});
window.onclick = function (event) {
    if (event.target == project1) {
        project1.style.display = "none";
    }
    if (event.target == project2) {
        project2.style.display = "none";
    }
    if (event.target == project3) {
        project3.style.display = "none";
    }
    if (event.target == project4) {
        project4.style.display = "none";
    }
    if (event.target == project5) {
        project5.style.display = "none";
    }
}