
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    
    for (let x of formData.entries()) {
      console.log(x[0] + ":" +x[1]
      );
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



function myfunction() {
  var name = document.getElementById("fame").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("quantity").value;
  var web = document.getElementById("site").value;
  var contname = document.getElementById("act").value;
  var contph = document.getElementById("conquan").value;
  var conemail = document.getElementById("alter").value;
  var note = document.getElementById("notes").value;
  var poss = document.getElementById("possiblevalues").value;
  var category = document.getElementById("category").value;
  var commission = document.getElementById("commission").value;
  var active = document.getElementById("activate").value;
  var critic = document.getElementById("checkbox").value;
  var payment = document.getElementById("payment").value;
  // Retrieve other input values

  var table = document.getElementById("data-table").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.rows.length);

  var nameCell = newRow.insertCell(0);
  nameCell.innerHTML = name;

  var emailCell = newRow.insertCell(1);
  emailCell.innerHTML = email;

  var phonecell = newRow.insertCell(2);
  phonecell.innerHTML = phone;

  var webcell = newRow.insertCell(3);
  webcell.innerHTML = web;

  var contnamecell = newRow.insertCell(4);
  contnamecell.innerHTML = contname;

  var contphcell = newrow.insertCell(5);
  contphcell.innerHTML = contph;
  
  var conemailcell = newRow.insertCell(6);
  conemailcell.innerHTML = conemail; 
 
  var notescell = newrow.insertCell(7);
  notesccell.innerHTML = note;

var posscell = newrow.insertCell(8);
posscell.innerHTML = poss;

var catecell = newrow.insertCell(9);
catecell.innerHTML = category;

var commcell = newrow.insertCell(10);
commcell.innerHTML = commission;

var activcell = newrow.insertCell(11);
activcell.innerHTML = active;

var criticcell = newrow.insertCell(12);
criticcell.innerHTML = critic;

var paymentcell = newrow.insertCell(13);
paymentcell.innerHTML = payment;

 
  // Create and insert other cells

  // Clear form fields after submission
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("site").value = "";
  document.getElementById("act").value = "";
  document.getElementById("conquan").value = "";
  document.getElementById("alter").value = "";
  document.getElementById("notes").value = "";
  document.getElementById("possiblevalues").value = "";
  document.getElementById("category").value = "";
  document.getElementById("commission").value = "";
  document.getElementById("activate").value = "";
  document.getElementById("checkbox").value = "";
  document.getElementById("payment").value = "";
  // Clear other form fields
}