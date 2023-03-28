//<!-- Autov navbarScrolling -->
const section=document.querySelectorAll('section')
const navlink=document.querySelectorAll('header nav a')
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top>=offset && top< offset + height){
            navlink.forEach(links=>{
                links.classlis.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
    //!-- =====Create sticky nav bar======== --!
 var header=document.querySelector('header')
header.classList.toggle("sticky",window.scrollY>100)

 menubar.classList.remove('bx-x')
 navbar.classList.remove('active')
 //!-- =====Create toggle changer======== --!
};
let menubar=document.querySelector('#menu')
let navbar=document.querySelector('.navbar')
menubar.onclick= ()=>{
    menubar.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

//create atext changer
var type=new Typed('.textline',{
    strings:['Desenvolvedor Front-end'],
    typeSpeed: 100,
    backspeed: 100,
    backDelay: 1000,
    lopp:true
})




