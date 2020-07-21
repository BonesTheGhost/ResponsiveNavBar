const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  //Toggle Nav
  burger.addEventListener('click', ()=> {
    nav.classList.toggle('nav-active');


    //Animation; because we used querySelectorAll, we also get access to index here!
    navLinks.forEach((link,index)=>{
    //console.log(index);
    
      if(link.style.animation){
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease-in forwards ${index / 5 + .3}s`;
        console.log(index / 5);
      }
    });
  });

  

}

const app = () => {
  navSlide();
}

app();