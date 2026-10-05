// Mouse Enter

// document.getElementById('mouse-enter').addEventListener('mouseenter', function(){
//     console.log("Mouse Entered")
//     const heading = document.getElementById('heading')
//     heading.style.color = "red"
// });

// // Mouse Move

// document.getElementById('mouse-move').addEventListener('mousemove', function(){
//      console.log("Mouse Moving")
//     const heading = document.getElementById('heading')
//     heading.style.color = "green"
// });

// // Mouse out effect

// document.getElementById('mouse-out').addEventListener('mouseout', function(){
//     console.log("Mouse out")
//     const heading = document.getElementById('heading')
//     heading.style.color = "yellow"
// });


// // Keyup effect

// document.getElementById('keyup').addEventListener('keydown', function(event){
//     console.log(event.target.value)
// })

function togglePage (id){
     document.getElementById('home').classList.add('hidden');
     document.getElementById('about').classList.add('hidden');
     document.getElementById(id).classList.remove('hidden')

}

function activeBtn (id){
   
     document.getElementById('home-btn').classList.remove('bg-primary');
     document.getElementById('about-btn').classList.remove('bg-primary');
    document.getElementById(id).classList.add('bg-primary')
     
}

document.getElementById('home-btn').addEventListener('click', function(){
    togglePage('home');
    activeBtn('home-btn')

})
document.getElementById('about-btn').addEventListener('click', function(){
    togglePage('about')
    activeBtn('about-btn')

})


