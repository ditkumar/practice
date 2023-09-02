var arr= [
    {
    dp:"https://plus.unsplash.com/premium_photo-1691030256235-47d75d5890b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1682695794947-17061dc284dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
},
{
    dp:"https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    story:"https://images.unsplash.com/photo-1682695798522-6e208131916d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
},
{
    dp:"https://media.istockphoto.com/id/1254506255/photo/group-of-college-female-students-collecting-information-in-the-old-fort-and-making-college.jpg?s=1024x1024&w=is&k=20&c=3lHxPsbRSzxC5nMSnk5q-81oB2IjRPGZNE0OD0d7J1w=",
    story:"https://images.unsplash.com/photo-1693432576099-0ec959b2c88f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
},
{
    dp:"https://images.unsplash.com/photo-1682695798522-6e208131916d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    story:"https://images.unsplash.com/photo-1682685797742-42c9987a2c34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
},

]
var clutter =""

arr.forEach(function(elem,idx){
    clutter += `<div class="stoyiran">
    <img id="${idx }" src="${elem.dp}" alt="">
</div>`
})
document.querySelector(".story").innerHTML = clutter

document.querySelector(".story").addEventListener("click", function(dets){
 document.querySelector(".full-screen").style.display = "block"
 document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    
  setTimeout(function(){
    document.querySelector(".full-screen").style.display = "none"
  },3000)

})

var cont = document.querySelector("#container")
 var icon = document.querySelector("i")

 cont.addEventListener("dblclick", function(){
    icon.style.display = "block"
     
    setTimeout(function(){
        icon.style.display = "none"
    },3000);
 })

 var stan = document.querySelector("h4")

 var add = document.querySelector("#frend")
var rmove = document.querySelector(".remove")


 add.addEventListener("click",function(){
    stan.innerHTML = "freinds"
    stan.style.color = "purple"
    // console.log("hey")
 })
  rmove.addEventListener("click", function(){
    stan.innerHTML = "Stranger"
    stan.style.color = "red"
  })