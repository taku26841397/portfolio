const heading = document.querySelector('.about');
// const heading2 = document.querySelector('.about_text');

// const show=(entries)=>{
//     const keyframes = {
//     opacity: [0, 1],
//     translate: ['0 10px', 0],
  
//     };
    
//     const options = {
//         duration:1000,
//         easing:'ease-out',
//         fill:'forwards',
        
        
//     }
// entries[0].target.animate(keyframes,1000)
// // entries[1].target.animate(keyframes,1000)

// }

// const observer =new IntersectionObserver(show,{threshold:0.5})

// 

const animateFade = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      
       const keyframes= {
          opacity: [0, 1],
          filter: ['blur(.4rem)', 'blur(0)'], 
          translate: ['0 2rem', 0],
        }

       const options ={
          duration: 2000,
          easing: 'ease',
          fill: 'forwards',
          delay:300
        }
      

      entry.target.animate(keyframes,options)
      
      obs.unobserve(entry.target);
    }
  });
};

const fadeObserver = new IntersectionObserver(animateFade);


const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach((fadeElement) => {
  fadeObserver.observe(fadeElement);
});



const animateFade2 = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      
       const keyframes= {
          opacity: [0, 1],
          filter: ['blur(.4rem)', 'blur(0)'], 
          translate: ['0 2rem', 0],
        }

       const options ={
          duration: 2000,
          easing: 'ease',
          fill: 'forwards',
          delay:1000
        }
      

      entry.target.animate(keyframes,options)
      
      obs.unobserve(entry.target);
    }
  });
};


const fadeObserver2 = new IntersectionObserver(animateFade2);


const fadeElements2 = document.querySelectorAll('.fadein2');
fadeElements2.forEach((fadeElement) => {
  fadeObserver2.observe(fadeElement);
});




const images = document.querySelectorAll('.img1')

images.forEach((image)=>{
  image.addEventListener('mouseover',(event)=>{
    image.animate({opacity:[0,1]},500)
  })
})



