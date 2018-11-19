var tab2=document.querySelectorAll(".tab");
var header=document.querySelector("h6");
var p2=document.querySelector(".p2");

var pArr=["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla deserunt consectetur ratione id tempore laborum laudantium facilis reprehenderit beatae dolores ipsum nesciunt alias iusto dicta eius itaque blanditiis modi velit.",
"Adipisci autem obcaecati velit natus quos beatae explicabo at tempora minima voluptates deserunt eum consectetur reiciendis placeat dolorem repellat in nam asperiores impedit voluptas iure repellendus unde eveniet accusamus ex.",
"Atque ratione soluta laboriosam illo inventore amet ipsum aliquam assumenda harum provident nam accusantium neque debitis obcaecati maxime officia saepe ad ducimus in quam libero vero quasi. Saepe sit nisi?",
"Quidem perferendis id sapiente cumque ullam repellendus dolorum odit rerum quibusdam tempora voluptatibus ipsum. Maiores laborum velit aperiam dicta quisquam assumenda at esse exercitationem culpa sequi porro minus ipsa aut.",
"Iste eligendi ratione libero impedit quos necessitatibus labore corporis deserunt quo porro hic eius delectus ea ad amet dolore officiis debitis! Libero officia magnam consequuntur dignissimos molestias quia modi repellat."
]

var titleArr=["Heading1",
"Heading2",
"Heading3",
"Heading4",
"Heading5"
]

tab2[0].addEventListener("click",changeTab1);
 function changeTab1(){
   	for(let i=0; i<tab2.length; i++){
       tab2[i].style.backgroundColor="#f7f7f7";
   	}
   tab2[0].style.backgroundColor="lightgray";
   header.innerHTML=titleArr[0];
   p2.innerHTML=pArr[0];
}

tab2[1].addEventListener("click",changeTab2);
   function changeTab2(){
   	for(let i=0; i<tab2.length; i++){
   	   tab2[i].style.backgroundColor="#f7f7f7";
   	}
   tab2[1].style.backgroundColor="lightgray";
   header.innerHTML=titleArr[1];
   p2.innerHTML=pArr[1];
  
}


tab2[2].addEventListener("click",changeTab3);
   function changeTab3(){
   	for(let i=0; i<tab2.length; i++){
   	   tab2[i].style.backgroundColor="#f7f7f7";
   	}
   tab2[2].style.backgroundColor="lightgray";
   header.innerHTML=titleArr[2];
   p2.innerHTML=pArr[2];
 
}


tab2[3].addEventListener("click",changeTab4);
   function changeTab4(){
   for(let i=0; i<tab2.length; i++){
   	  tab2[i].style.backgroundColor="#f7f7f7";
   	}
   tab2[3].style.backgroundColor="lightgray";
   header.innerHTML=titleArr[3];
   p2.innerHTML=pArr[3];
}



tab2[4].addEventListener("click",changeTab5);
   function changeTab5(){
   	for(let i=0; i<tab2.length; i++){
   	   tab2[i].style.backgroundColor="#f7f7f7";
   	}
   tab2[4].style.backgroundColor="lightgray";
   header.innerHTML=titleArr[4];
   p2.innerHTML=pArr[4]; 
 
}






// var tab2=document.querySelectorAll(".tab");



// var pArr=["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla deserunt consectetur ratione id tempore laborum laudantium facilis reprehenderit beatae dolores ipsum nesciunt alias iusto dicta eius itaque blanditiis modi velit.",
// "Adipisci autem obcaecati velit natus quos beatae explicabo at tempora minima voluptates deserunt eum consectetur reiciendis placeat dolorem repellat in nam asperiores impedit voluptas iure repellendus unde eveniet accusamus ex.",
// "Atque ratione soluta laboriosam illo inventore amet ipsum aliquam assumenda harum provident nam accusantium neque debitis obcaecati maxime officia saepe ad ducimus in quam libero vero quasi. Saepe sit nisi?",
// "Quidem perferendis id sapiente cumque ullam repellendus dolorum odit rerum quibusdam tempora voluptatibus ipsum. Maiores laborum velit aperiam dicta quisquam assumenda at esse exercitationem culpa sequi porro minus ipsa aut.",
// "Iste eligendi ratione libero impedit quos necessitatibus labore corporis deserunt quo porro hic eius delectus ea ad amet dolore officiis debitis! Libero officia magnam consequuntur dignissimos molestias quia modi repellat."]

// var titleArr=["Heading1",
// "Heading2",
// "Heading3",
// "Heading4",
// "Heading5"]

//    function change(){
//    	for(let i=0; i<tab2.length; i++){
//    		tab2[i].style.backgroundColor="white";}

//    var header=document.querySelector("h6");
//    var p2=document.querySelector(".p2");
//    if(tab2[0].addEventListener("click",function changetab1(){
//    	  tab2[0].style.backgroundColor="lightgray";
//       header.innerHTML=titleArr[0]
//       p2.innerHTML=pArr[0];
//    }))

//    	else  if(tab2[1].addEventListener("click",function changetab2(){
//       tab2[1].style.backgroundColor="lightgray";
//       header.innerHTML=titleArr[1];
//       p2.innerHTML=pArr[1];
//    }))
//    	else if(tab2[2].addEventListener("click",function changetab3(){
//    	  tab2[2].style.backgroundColor="lightgray";
//       header.innerHTML=titleArr[2];
//       p2.innerHTML=pArr[2];
//    }))
 
//  	else if(tab2[3].addEventListener("click",function changetab4(){
//       tab2[3].style.backgroundColor="lightgray";
//  	  header.innerHTML=titleArr[3];
//       p2.innerHTML=pArr[3];
//    }))
//  	else if(tab2[4].addEventListener("click",function changetab5(){
//  	  tab2[4].style.backgroundColor="lightgray";
//       header.innerHTML=titleArr[4];
//       p2.innerHTML=pArr[4];
//    }))
// }
