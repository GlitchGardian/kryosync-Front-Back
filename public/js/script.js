// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.container'),
//     smooth: true,
//     smoothMobile: true,
//     inertia: 0.5, 
//     multiplier: 0.8,
// });

const webTopic = document.getElementById("web-topic");
const appTopic = document.getElementById("app-topic");
const uiTopic = document.getElementById("ui-topic");
const web = document.getElementById("web")
const app = document.getElementById("app")
const ui = document.getElementById("ui")

function changeProject(name){

  if(name === "web"){
    appTopic.classList.remove("topic-slected");
    uiTopic.classList.remove("topic-slected");
    webTopic.classList.add("topic-slected");
    web.style.display = "grid";
    app.style.display = "none";
    ui.style.display = "none";
  } else if(name === "app"){
    webTopic.classList.remove("topic-slected");
    uiTopic.classList.remove("topic-slected");
    appTopic.classList.add("topic-slected");
    app.style.display = "grid";
    web.style.display = "none";
    ui.style.display = "none";
  } else{
    webTopic.classList.remove("topic-slected");
    appTopic.classList.remove("topic-slected");
    uiTopic.classList.add("topic-slected");
    ui.style.display = "grid";
    app.style.display = "none";
    web.style.display = "none";
  }
}