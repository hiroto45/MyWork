'use strict';

{
 const menu = document.querySelector('.menu');
 const MyInfo = document.querySelector('.MyInfo');
 const info = document.querySelector('.info');
 const bar1 = document.querySelector('.bar1');
 const bar2 = document.querySelector('.bar2');
 const bar3 = document.querySelector('.bar3');
 const close = document.getElementById('close')

 //headerメニュのモーダル
 menu.addEventListener('click' , () =>{
  menu.classList.add('remove');
  MyInfo.classList.add('appear');
  bar1.classList.add('appear');
  bar2.classList.add('appear');
  bar3.classList.add('appear');
  close.classList.add('appear')
  info.classList.add('appear')
 });
 
 close.addEventListener('click' , () =>{
  menu.classList.remove('remove');
  MyInfo.classList.remove('appear');
  bar1.classList.remove('appear');
  bar2.classList.remove('appear');
  bar3.classList.remove('appear');
  close.classList.remove('appear');
  info.classList.remove('appear')
 });

 //スライド
  const images = document.querySelectorAll('.hero img');
  let currentIndex = 0;
   
  function show (){
    setTimeout(() =>{
        images[currentIndex].classList.remove('show')
        currentIndex++;
        if(currentIndex > images.length -1){
          currentIndex = 0;
        }
        images[currentIndex].classList.add('show')
        show();
      
    } , 5000);
   }

   show();

   //API

   const targets = document.querySelectorAll('.target');
   
   function callback (enties,obs){
     enties.forEach(entry =>{
      if(!entry.isIntersecting){
        return;
      }
      entry.target.classList.add('api');
      obs.unobserve(entry.target);
      //「交差オブザーバーAPI」において、コールバック関数の引数である entries は、観察対象の要素についての情報が含まれた配列です。この配列の各要素は、観察されている各要素に関する以下の情報を含みます。

   //target：観察されている要素自体を表すDOM要素。
     })
   }

  const  options ={
    threshold: 0.3, 
   };

    const observer = new IntersectionObserver(callback ,options);
      
    targets.forEach((target) =>{
            observer.observe(target);
      })

  }