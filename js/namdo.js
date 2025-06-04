document.addEventListener("DOMContentLoaded" , ()=>{
    
    //슬라이드
    const slide = document.getElementById('slide');

    const callback = ()=>{
        slide.style.transition = "none";
        slide.style.left=0;
        slide.append(slide.firstElementChild);
    }
    
    const toLeft = ()=> {
        slide.style.transition = "left 1s";
        slide.style.left="-800px";
        setTimeout(callback , 1000);
    }
    
    
    setInterval(toLeft , 2800);


    //팝업모달
    const notice_a = [...document.querySelectorAll("#notice li a")];
    const popup = document.querySelector('#popup')
    const btn = document.querySelector('#popup button')

    notice_a.forEach (i=>{
        i.addEventListener("click" , ()=>{
            popup.style.display = "block";
        });
    });

    btn.addEventListener('click', ()=>{
        popup.style.display = "none";
    });

    //팝업모달 닫기: esc키로 닫기
    document.addEventListener('keydown', e=>{
        if(e.key === 'Escape') popup.style.display='none';
    });


}); //js 끝!!!!!!!!!!!!!!! 
// //alert(slide);