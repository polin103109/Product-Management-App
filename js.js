const form = document.getElementById("form");
const userID = document.getElementById("userID");
const productName = document.getElementById("productName");
const price = document.getElementById("price");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function  checkInputs(){
    const userValue = userID.value.trim();
    const productValue = productName.value.trim();
    const priceValue = price.value.trim();

    if(userValue === ''){
        setErrorFor(userID, 'UserID cannot be blank');
    }
    else{
        setSuccessFor(userID);
    }

    if(productValue === ''){
        setErrorFor(productName, 'Product name cannot be blank');
    } else if( productValue.length>3){
        setErrorFor(productName, 'Product name must be smaller');
    }
    else {
        setSuccessFor(productName);
    }

    if(priceValue === ''){
        setErrorFor(price, 'Price cannot be blank');
    } else if( priceValue<0 || priceValue>100000 ){
        setErrorFor(price, 'Price value is Invalid');
    }
    else {
        setSuccessFor(price);
    }
}
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className= 'form-control error';


}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className= 'form-control success';
}
function myFunction(){
    alert("The form-product was added sucessfully!!!");
}



 
  
 
  