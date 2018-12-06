document.querySelectorAll('#main-header li a')
.forEach( link => link.addEventListener('click', function(event){

    alert( link.innerText )
    event.preventDefault()

})
);