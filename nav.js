var image1=document.getElementById('img1');
var change=document.getElementsByClassName('container')
var image2=document.getElementById('img2');

image1.addEventListener('click',()=>{
    change[0].style.display='block';
image1.style.display="none";
    image2.style.display="block";
})
    image2.addEventListener('click',()=>{
   
        change[0].style.display='none';
        image1.style.display="block";
        image2.style.display="none";
        })  