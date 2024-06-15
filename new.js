let sidebar=document.querySelector(".sidebar");
let btn=document.querySelector("#btn");

let searchBtn=document.querySelector("fa-plus ");






//sidebar toggle//
 
function openSideBar(){
    sidebar.classList.toggle("active");

          };


// rendering the question input//


let questionInputDiv=document.querySelector('.question');

let search=document.querySelector('.search');
let questionInput=document.querySelector('.input-btn');
console.log(questionInput.value);

 search.addEventListener("click",function (e){


let input=questionInput.value ;
   console.log(input);
   questionInputDiv.innerText=input;
   
   containInfo.classList.add('show-refresh');


});


// new chat creation//
let displayRefresh=document.querySelector('.nav-content');
let containInfo=document.querySelector('.contain-info');

displayRefresh.addEventListener("click",function(){

    containInfo.classList.remove('show-refresh');

});