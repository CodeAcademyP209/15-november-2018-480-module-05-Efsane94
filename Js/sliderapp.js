var rightbtn=document.querySelector("#rightbutton");
var bg=document.querySelector("#col2");
var p=document.querySelector(".text");
var i=0;
var j=0;
var pArr=["SLIDE 1",
"SLIDE 2",
"SLIDE 3",
"SLIDE 4"
]
var bgArr=["lightgray",
"darkgray",
"lightgray",
"darkgray"
]
rightbtn.addEventListener("click",function changeright(){
	
     bg.style.backgroundColor=bgArr[i];
     p.innerHTML=pArr[i];
     if(i<pArr.length-1){
     	i++;
     }else{
     	i=0;
     }


})

 var leftbtn=document.querySelector("#leftbutton");
 leftbtn.addEventListener("click", function changeleft(){
 	
	 bg.style.backgroundColor=bgArr[i-1];
     p.innerHTML=pArr[i-1];
     if(i>=pArr.length-2){
     	i--;
     }else{
     	i=3;
     }
})




// function changeright(){
//      bg.style.backgroundColor=bgArr[i];
//      p.innerHTML=pArr[i];

//      if(i<pArr.length){
//      	i++;
//      }else{
//      	i=0;
//      }


// }

// setInterval("changeright()",3000)

