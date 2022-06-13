
// header related js 


    const navBar = document.querySelector('.navbar');

window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        navBar.classList.add('header_scrolled')
    }
    else{
        navBar.classList.remove('header_scrolled')
    }
}



// progress related js 

function increase(){

const  progressBar = document.querySelectorAll('.progress_bar');

progressBar.forEach(function(bar){

  let percentage = bar.dataset.percent;
   let toolTip = bar.children[0];
  toolTip.innerText = percentage + "%";
   bar.style.width = percentage + "%";
})

}


let aboutSection = document.querySelector('.about_wrapper');


 let optimaize = {
  rootMargin: ' 0px 0px  -500px 0px'
  
 }

let complete = 0;

 const sectionObservervation = new IntersectionObserver(function (entries){

   if(entries[0].isIntersecting && complete !==1){

     complete = 1;

     increase();

  }
 
} , optimaize)

 sectionObservervation.observe(aboutSection);
