let projectList = [
    {
        imagepath: "resources/images/crafts.PNG",
        title: "Dasmoto's Arts and Crafts 1",
        desc: "This is a test website that I created based off a codeacademy prompt. The goal of this project was to learn fundamental HTML and CSS functions to a minimally guided project.",
        link: "https://github.com/awills96/crafts-website-project"
    },
    {
        imagepath: "resources/images/crafts.PNG",
        title: "Dasmoto's Arts and Crafts 2",
        desc: "This is a test website that I created based off a codeacademy prompt. The goal of this project was to learn fundamental HTML and CSS functions to a minimally guided project.",
        link: "https://github.com/awills96/crafts-website-project"
    },
    {
        imagepath: "resources/images/3dots.PNG",
        title: "Dasmoto's Arts and Crafts 3",
        desc: "This is a test website that I created based off a codeacademy prompt. The goal of this project was to learn fundamental HTML and CSS functions to a minimally guided project.",
        link : "https://github.com/awills96/crafts-website-project"
    },
    {
        imagepath: "resources/images/crafts.PNG",
        title: "Dasmoto's Arts and Crafts 4",
        desc: "This is a test website that I created based off a codeacademy prompt. The goal of this project was to learn fundamental HTML and CSS functions to a minimally guided project.",
        link: "https://github.com/awills96/crafts-website-project"
    },
    {
        imagepath: "resources/images/crafts.PNG",
        title: "Dasmoto's Arts and Crafts 5",
        desc: "This is a test website that I created based off a codeacademy prompt. The goal of this project was to learn fundamental HTML and CSS functions to a minimally guided project.",
        link: "https://github.com/awills96/crafts-website-project"
    }
]

let centerIndex = 1;
const leftImage = document.getElementById('project-image-left');
const leftTitle = document.getElementById('left-title');
const leftDesc = document.getElementById('left-desc');
const leftLink = document.getElementById('left-link');
const centerImage = document.getElementById('project-image-center');
const centerTitle = document.getElementById('center-title');
const centerDesc = document.getElementById('center-desc');
const centerLink = document.getElementById('center-link');
const rightImage = document.getElementById('project-image-right');
const rightTitle = document.getElementById('right-title');
const rightDesc = document.getElementById('right-desc');
const rightLink = document.getElementById('right-link');
const rightArrow = document.getElementById('right');
const leftArrow = document.getElementById('left');

function initialize () {
    leftImage.src = projectList[centerIndex - 1].imagepath;
    leftTitle.innerHTML = projectList[centerIndex - 1].title;
    leftDesc.innerHTML = projectList[centerIndex - 1].desc;
    leftLink.innerHTML = projectList[centerIndex - 1].link;
    centerImage.src = projectList[centerIndex].imagepath;
    centerTitle.innerHTML = projectList[centerIndex].title;
    centerDesc.innerHTML = projectList[centerIndex].desc;
    centerLink.innerHTML = projectList[centerIndex].link;
    rightImage.src = projectList[centerIndex + 1].imagepath;
    rightTitle.innerHTML = projectList[centerIndex + 1].title;
    rightDesc.innerHTML = projectList[centerIndex + 1].desc;
    rightLink.innerHTML = projectList[centerIndex + 1].link;
}

function shiftLeft () {
    centerIndex--;

    if (centerIndex === -1){
        centerIndex = projectList.length - 1;
    }

    let right = centerIndex + 1;
    let left = centerIndex - 1;

    if (right === projectList.length){
        right = 0;
    }

    if (left === -1){
        left = projectList.length - 1;
    }

    leftImage.src = projectList[left].imagepath;
    leftTitle.innerHTML = projectList[left].title;
    leftDesc.innerHTML = projectList[left].desc;
    leftLink.innerHTML = projectList[left].link;
    centerImage.src = projectList[centerIndex].imagepath;
    centerTitle.innerHTML = projectList[centerIndex].title;
    centerDesc.innerHTML = projectList[centerIndex].desc;
    centerLink.innerHTML = projectList[centerIndex].link;
    rightImage.src = projectList[right].imagepath;
    rightTitle.innerHTML = projectList[right].title;
    rightDesc.innerHTML = projectList[right].desc;
    rightLink.innerHTML = projectList[right].link;
}

function shiftRight () {
    centerIndex++;

    if (centerIndex === projectList.length){
        centerIndex = 0;
    }

    let right = centerIndex + 1;
    let left = centerIndex - 1;

    if (right === projectList.length){
        right = 0;
    }

    if (left === -1){
        left = projectList.length - 1;
    }

    leftImage.src = projectList[left].imagepath;
    leftTitle.innerHTML = projectList[left].title;
    leftDesc.innerHTML = projectList[left].desc;
    leftLink.innerHTML = projectList[left].link;
    centerImage.src = projectList[centerIndex].imagepath;
    centerTitle.innerHTML = projectList[centerIndex].title;
    centerDesc.innerHTML = projectList[centerIndex].desc;
    centerLink.innerHTML = projectList[centerIndex].link;
    rightImage.src = projectList[right].imagepath;
    rightTitle.innerHTML = projectList[right].title;
    rightDesc.innerHTML = projectList[right].desc;
    rightLink.innerHTML = projectList[right].link;
}

initialize();

leftArrow.onclick = shiftLeft;
rightArrow.onclick = shiftRight;