const slide_all = document.querySelectorAll('.slide_on');

const slide = document.querySelector('.slide_on');

const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {

    dot.addEventListener('click', () => {

        // すべてリセット
        slide_all.forEach((slide) => {
            slide.classList.toggle('is_active');
            slide.classList.toggle('is_inactive');
        });
        dots.forEach(d => d.classList.remove('dot_is_active'));

        // クリックされた番号を表示
        // slide_all[index].classList.add('dot_is_active');
        dots[index].classList.add('dot_is_active');

    });

});
const slider2 = document.querySelector('.slides_on');
const slide2 = document.querySelectorAll('.slide_on');
const slidesho = () => {

    slide2.forEach((slide) => {
        slide.classList.toggle('is_inactive');
        slide.classList.toggle('is_active');

    })
}




slider2.addEventListener('mouseover', () => {
    slidesho()
    dots.forEach((d) => {
        d.classList.toggle('dot_is_active');
        
    })

})