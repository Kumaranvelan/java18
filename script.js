
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    
    for (let x of formData.entries()) {
      console.log(x[1]);
    }
  });


// document.getElementById("myForm").addEventListener("submit", function(event) {
//          event.preventDefault();
//         //  const form = event.target;
//         //  const formData = new FormData(form);
         

//          formData={name:kumar,age:25}
//          console.log(formData.entries())
// })


// function myfunction(){
//     const form = document.getElementById('myform').action

// console.log(form)
// };