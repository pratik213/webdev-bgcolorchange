function test1(){
    var colorarray=['red','blue','yellow','pink']
    var body1=document.querySelector("body")
    body1.style.backgroundColor=colorarray[Math.floor(Math.random()*colorarray.length)]
}

var btn = document.querySelector(".btn")
console.log(btn)

btn.addEventListener('click',test1)
