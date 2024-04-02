onload();
function onload(){
  let links = document.querySelectorAll(".links");
  //console.log(links);
  links.forEach((e) => {
    e.classList.add("li");
  });
  links.forEach((element) => {
    element.addEventListener("mouseover", function () {
      element.classList.remove("li");
    });
  });
  links.forEach((element) => {
    element.addEventListener("mouseout", function () {
      element.classList.add("li");
    });
  });
  
  let actionbar= document.querySelectorAll(".a");
  actionbar.forEach((e) => {
    e.classList.add("i");
  });

  let ft= document.querySelectorAll(".ft");
  ft.forEach((e) => {
    e.classList.add("i");
  });
  //console.log(actionbar);
}


