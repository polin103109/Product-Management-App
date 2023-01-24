const list1 = [];
const list2 = [];
const list3 = [];

let n = 1;
let x = 0;

function addProduct() {
  const AddRows = document.getElementById("product-Table");
  const NewRow = AddRows.insertRow(n);

  list1[x] = document.getElementById("userID").value;
  list2[x] = document.getElementById("productName").value;
  list3[x] = document.getElementById("price").value;

  const cel1 = NewRow.insertCell(0);
  const cel2 = NewRow.insertCell(1);
  const cel3 = NewRow.insertCell(2);

  cel1.innerHTML = list1[x];
  cel2.innerHTML = list2[x];
  cel3.innerHTML = list3[x];
  n++;
  x++;

}


 
