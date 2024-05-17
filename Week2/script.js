var text=document.querySelector('.texth1');
var cnt=document.querySelector(".texth2");
text.onclick = function(){
    var colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    text.style.color = colorCode;
    let count = Number(cnt.textContent)
    count = count + 1;
    cnt.textContent = count;
    cnt.style.color = colorCode;
}