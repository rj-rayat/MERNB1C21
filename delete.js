document.getElementById('input').addEventListener('keyup', function(event){
    console.log(event.target.value)
    const input = event.target.value;
    const btn = document.getElementById('btn')
    if (input == "delete"){
        btn.removeAttribute('disabled');
    }else {
        btn.setAttribute('disabled', true)
    }
})

document.getElementById('btn').addEventListener('click', function(){
    const p = document.getElementById('para')
    p.style.display = "none"
    console.log('deleted')
})