let button = document.getElementById("helloBtn");


button.onclick = function(){

    alert("你好，我是Zospire，很高兴认识你！");

}

let darkButton = document.getElementById("darkBtn");


darkButton.onclick = function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        darkButton.textContent = "切换白天模式";

    } else {

        darkButton.textContent = "切换夜间模式";

    }

}