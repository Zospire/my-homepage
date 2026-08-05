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

let links = document.querySelectorAll(".page-link");


links.forEach(function(link){


    link.onclick = function(event){


        event.preventDefault();


        let url = this.href;


        document.body.classList.add("fade-out");


        setTimeout(function(){


            window.location.href = url;


        },500);


    }


});

let menuBtn =
document.getElementById("menuBtn");


let navLinks =
document.getElementById("navLinks");


if(menuBtn){


    menuBtn.onclick=function(){


        navLinks.classList.toggle("active");


    }


}