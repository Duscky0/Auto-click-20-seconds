javascript:(function(){
  let target=null;
  document.addEventListener('mousemove',e=>target=e.target);
  setInterval(()=>{
    if(target && typeof target.click==='function') target.click();
  },20000);
})();
