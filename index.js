import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!
//click
let tumimg = document.querySelectorAll(" img");
tumimg.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.target.setAttribute("style", "filter: grayscale(100%)");
  });
});
//dblclick
tumimg.forEach((a) => {
  a.addEventListener("dblclick", (e) => {
    e.target.setAttribute("style", "filter: grayscale(0%)");
  });
});
//mouseover/mouseout
document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("mouseover", (item) => {
    item.target.setAttribute("style", "color: red");
  });
});
document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("mouseout", (item) => {
    item.target.setAttribute("style", "color: none");
  });
});

//resize
/* let x = 0;
function fresize() {
  let txt = (x += 1);
  console.log(window.innerWidth);
  if (window.innerWidth < 700) {
    document.querySelector("body").style.backgroundColor = "purple";
  } else {
    document.querySelector("body").style.backgroundColor = "pink";
  }
} */
//focus
const asli1 = document.querySelector("#asli");
asli1.addEventListener("focus", (event) => {
  event.target.style.backgroundColor = "pink";
});

const buton = document.querySelectorAll(".btn");
buton.forEach((b) => {
  b.addEventListener("click", (c) => {
    c.target.setAttribute("style", "color: purple ");
  });
});
buton.forEach((d) => {
  d.addEventListener("dblclick", (f) => {
    f.target.setAttribute("style", "color:none");
  });
});
