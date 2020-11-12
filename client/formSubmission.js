const form = document.getElementById("my-form")
const result = document.getElementById("result")
const hit = document.createElement("p");
const data1 = document.createElement('div');

function enterNewElement (resData) {
  result.append(data1);
  data1.append(hit)
  hit.textContent = `${resData}`
 }
 

   function getRandomResults() {
       fetch("http://localhost:3000/feelinglucky")
       .then(r => r.text())
       .then(data => enterNewElement(data))
      }



function enterNewElement1 (resData1) {
   result.append(data1)
   data1.append(hit)
   hit.textContent=`${resData1}`
}

 function getAllResults () {
    fetch('http://localhost:3000/googlesearch')
     .then (r => r.text ())
     .then(data => enterNewElement1(data))
}



form.addEventListener("submit", (e) => {
e.preventDefault();
console.log(e)
  if (e.submitter.id ==="btn1") {
getAllResults();
   } else {
getRandomResults();
   }
});

console.log("Hey, I am connected")