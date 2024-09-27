var imgList =document.querySelectorAll(".item img");
var layer = document.querySelector(".slider");
var slider = document.querySelector(".slider-item");
var closeBtn =document.getElementById("close");
var previous = document.getElementById("prevBtn");
var next = document.getElementById("nextBtn");
var imgList =Array.from(document.querySelectorAll(".item img"));
var currentIndex =0;


for (let i = 0; i < imgList.length; i++) {
    
    imgList[i].addEventListener("click" ,function(e)
{
    currentIndex= imgList.indexOf(e.target);
    var source= e.target.getAttribute("src");
    slider.style.backgroundImage=`url(${source})`;
    layer.classList.replace('d-none','d-flex');
})
}

function close() {

    layer.classList.replace("d-flex","d-none");
    
}
closeBtn.addEventListener("click",function()
{
   close();
})


function nextSlider() {
    if (currentIndex==imgList.length) {
        currentIndex=0;  
    }
    currentIndex ++;
    var nextButton =imgList[currentIndex].getAttribute("src");
    slider.style.backgroundImage=`url(${nextButton})`;
}

next.addEventListener("click",function()
{
    nextSlider();
})


function previousSlider() {
    if(currentIndex==0)
    {
        currentIndex= imgList.length-1;
    }
    
    currentIndex--;
    var prevButton = imgList[currentIndex].getAttribute("src");
    slider.style.backgroundImage=`url(${prevButton})`;
}

previous.addEventListener("click" ,function()
{
    previousSlider();
})


document.addEventListener("keyup",function(e)
{
    if(e.key=="ArrowRight")
    {
        nextSlider()
    }
    else if (e.key=="ArrowLeft") {
        previousSlider()
    }
     else if (e.key=="Escape"){
        close()
    }
    
} )

layer.addEventListener("click" ,function(e)
{
    if(e.target==layer)
    close();
})




