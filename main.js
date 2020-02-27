document.addEventListener('scroll', toggleBackTop);

function toggleBackTop() {
    if (window.scrollY >= 700) {
        document.querySelector('.back-top').style.opacity = '1';
    } else {
        document.querySelector('.back-top').style.opacity = '0';
    }
}

document.querySelector('.back-top').addEventListener('click', scrollTop);

function scrollTop(event) {
    event.preventDefault(); 
    
        var scrollInterval = setInterval(function(){
            if (window.scrollY != 0) {
                window.scrollBy(0, -50);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15)
}

