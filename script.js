// Mouse Enter

document.getElementById('mouse-enter').addEventListener('mouseenter', function(){
    console.log("Mouse Entered")
    const heading = document.getElementById('heading')
    heading.style.color = "red"
});

// Mouse Move

document.getElementById('mouse-move').addEventListener('mousemove', function(){
     console.log("Mouse Moving")
    const heading = document.getElementById('heading')
    heading.style.color = "green"
});

// Mouse out effect

document.getElementById('mouse-out').addEventListener('mouseout', function(){
    console.log("Mouse out")
    const heading = document.getElementById('heading')
    heading.style.color = "yellow"
});


// Keyup effect

document.getElementById('keyup').addEventListener('keydown', function(event){
    console.log(event.target.value)
})


