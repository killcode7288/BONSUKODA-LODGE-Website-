const slides = document.querySelector(".slider-inner-container").children;

let index = 0;
function autoPlay(){
  nextSlide();
  updateDotIndicator();
}
function nextSlide(){
  if (index == slides.length - 1) {
     index = 0;
  }
  else{
     index++;
  }
  changeSlide();
}
function changeSlide(){
  for(let i=0; i < slides.length; i++){
     slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}
let timer = setInterval(autoPlay, 5000);


const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
function prevSlide(){
if (index == 0) {
index = slides.length - 1;
}
else{
index--;
}
changeSlide();
}
prev.addEventListener("click", function(){
prevSlide();
updateDotIndicator();
resetTimer();
})
next.addEventListener("click", function(){
nextSlide();
updateDotIndicator();
resetTimer();
})
function resetTimer(){
clearInterval(timer);
timer = setInterval(autoPlay, 5000);
}


const indicator = document.querySelector(".indicator");
prev.addEventListener("click", function(){
prevSlide();
updateDotIndicator();
resetTimer();
})
next.addEventListener("click", function(){
nextSlide();
updateDotIndicator();
resetTimer();
})
function resetTimer(){
clearInterval(timer);
timer = setInterval(autoPlay, 5000);
}
dotIndicator();
function dotIndicator(){
for(let i=0; i < slides.length; i++){
const div = document.createElement("div");
div.setAttribute("onclick", "indicateSlide(this)");
div.id = i;
if(i == 0){
div.className = "active";
}
indicator.appendChild(div);
}
}
function indicateSlide(element){
index = element.id;
changeSlide();
updateDotIndicator();
resetTimer();
}
function updateDotIndicator(){
for(let i=0; i < indicator.children.length; i++){
indicator.children[i].classList.remove("active");
}
indicator.children[index].classList.add("active");
}





const mainMenu = document.querySelector('.mainMenu');
            const closeMenu = document.querySelector('.closeMenu');
            const openMenu = document.querySelector('.openMenu');

            openMenu.addEventListener('click',show);
            closeMenu.addEventListener('click',close);

            function show(){
                mainMenu.style.display = 'flex';
                mainMenu.style.top = '0';
            }
            function close(){
                mainMenu.style.top = '-100%';
            }

            var MenuItems = document.getElementById("MenuItems");
        
            MenuItems.style.maxHeight = "0px";
        
            function menutoggle(){
                if(MenuItems.style.maxHeight == "0px")
                {
                    MenuItems.style.maxHeight = "200px";
                }
            else
            {
                MenuItems.style.maxHeight = "0px";
            }
            }

            let value = 5 * "3";


