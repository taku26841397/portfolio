const slides = document.querySelectorAll('.slide');
    let current_index = 0;
    const delay = 4000; // 5秒
    
    slides[current_index].style.opacity = 1;

    const show_next_slide = () => {

      
      slides[current_index].style.opacity = 0;

      
      current_index = current_index + 1;

      
      if (current_index >= slides.length) {
        current_index = 0;
      }

     
      slides[current_index].style.opacity = 1;

      
      setTimeout(show_next_slide, delay);
    };

    
    setTimeout(show_next_slide, delay);


// ロード画面

const loading = document.getElementById("loading");

    window.addEventListener("load", () => {
      setTimeout(() => {
        loading.classList.add("hide");
      }, 2000);  
    });


const load_amine = (entries, obs) => {
  
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
     
       const keyframes= {
          opacity: [0, 1],
          filter: ['blur(.8rem)', 'blur(0)'], 
          translate: ['0 1rem', 0],
        }

       const options ={
          duration: 1000,
          easing: 'ease',
          fill: 'forwards',
          delay:0
        }
      

      entry.target.animate(keyframes,options)
      
      obs.unobserve(entry.target);
    }
  });
};

const fadeObserver_load = new IntersectionObserver(load_amine);


const Elements_load = document.querySelectorAll('.loading_text');
Elements_load.forEach((Element) => {
  fadeObserver_load.observe(Element);
});

const load_amine2 = (entries, obs) => {
  
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
     
       const keyframes= {
          opacity: [0, 1],
          filter: ['blur(.8rem)', 'blur(0)'], 
          translate: ['0 1rem', 0],
        }

       const options ={
          duration: 1000,
          easing: 'ease',
          fill: 'forwards',
          delay:600
        }
      

      entry.target.animate(keyframes,options)
      
      obs.unobserve(entry.target);
    }
  });
};

const fadeObserver_load2 = new IntersectionObserver(load_amine2);


const Elements_load2 = document.querySelectorAll('.loading_text2');
Elements_load2.forEach((fadeElement) => {
  fadeObserver_load2.observe(fadeElement);
});