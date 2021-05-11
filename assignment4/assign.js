function dosomething(){
    console.log("fetching items");
    var h = document.getElementById("first");
    var z = document.getElementById("second");
    console.log(h);
    console.log(z);
    h.innerHTML = "heading changed";
    z.innerHTML =  "<a href=https://www.youtube.com/>heading changed too</a>";
}