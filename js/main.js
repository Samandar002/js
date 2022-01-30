document.addEventListener('DOMContenet', ()=>{
    var loaderBtn  = document.getElementById('loader');
    setTimeout(function(){
        loaderBtn.style.visibility = 'hidden'
    },1500)
})