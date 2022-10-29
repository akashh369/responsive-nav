var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");
var btn4=document.getElementById("btn4");
var btn0=document.getElementById("btn0");
var nav=document.getElementById("nav");



function myfun(x){
    let check=0;
    if(x.matches){
        nav.style.justifyContent="start";
        document.body.style.backgroundColor="yellow";
        btn1.style.display="none";
        btn2.style.display="none";
        btn3.style.display="none";
        btn4.style.display="none";
        btn0.style.display="block";
        btn0.addEventListener("click",function(){
            if(check==0){
                check=1;
                nav.style.flexDirection="coloumn";
                
                btn2.style.display="block";
                btn1.style.display="block";
                btn3.style.display="block";
                btn4.style.display="block";
            }
            else
            if(check==1){
                check=0;
                btn1.style.display="none";
                btn2.style.display="none";
                btn3.style.display="none";
                btn4.style.display="none";
            }
        }
        );
    }
    else{
        nav.style.justifyContent="end";
        document.body.style.backgroundColor="white";
        btn2.style.display="block";
        btn1.style.display="block";
        btn3.style.display="block";
        btn4.style.display="block";
        btn0.style.display="none";
    }
}

var responsive=window.matchMedia("(max-width:700px)");
myfun(responsive);
responsive.addListener(myfun);