// navbar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
// 
let add=document.querySelector(".add");
let box=document.querySelector(".content");
add.addEventListener("click",()=>{
    box.classList.toggle("hidden");
})

// let userfromlocal=local
  
let productdata=localStorage.getItem("products");
if(productdata){
    productdata=JSON.parse(productdata);
}
else{
    productdata=[];
}

let myform= document.querySelector(".myform");  // access the form 
let proname = document.querySelector(".name");   // access the input
let proquantity = document.querySelector('.quantity');
let proprice = document.querySelector('.price');
myform.addEventListener("submit", function(ev){
    ev.preventDefault();     // stopping the refresh
    // console.log(ev); 
    // console.log(proname.value , proquantity.value , proprice.value);
    let newpro={
        name:proname.value , price:proprice.value , quantity:proquantity.value
    }
    productdata.push(newpro);
    localStorage.setItem("products",JSON.stringify(productdata)); 
    showproduct();
})

// function showproduct(){
//   let productsJson=localStorage.getItem("products");
//   let productInfo=JSON .parse(productsJson);
//   console.log(productInfo);

//   let productList=document.querySelector(".productList");
// productList.innerHTML="";
// for(let i=0;i<productInfo.length ;i++){
//     let productItem=productInfo[i];
//     console.log(productItem);

//     let li=document.createElement("li");
//     li.innerHTML=` <span class="productItem"></span>
//     <span class="productName">${productItem.name}</span>
//     <span class="productQuantity">${productItem.quantity}</span>
//     <span class="productPrice">${productItem.price}</span>`
//     productList.append(li);
//     }
// }


// ...

function showproduct() {
    let productsJson = localStorage.getItem("products");
    let productInfo = JSON.parse(productsJson);
  
    let productList = document.querySelector(".productList");
    productList.innerHTML = "";
  
    for (let i = 0; i < productInfo.length; i++) {
      let productItem = productInfo[i];
  
      let li = document.createElement("li");
      li.innerHTML = `
        <span class="productName">${productItem.name}</span>
        <span class="productQuantity">${productItem.quantity}</span>
        <span class="productPrice">${productItem.price}</span>
        <button class="deleteButton" data-index="${i}">Delete</button>
      `;
  
      productList.append(li);
    }
  
    // Add event listener to delete buttons
    let deleteButtons = document.querySelectorAll(".deleteButton");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", handleDelete);
    });
  }
  
  function handleDelete(event) {
    let index = event.target.dataset.index;
    let productsJson = localStorage.getItem("products");
    let productInfo = JSON.parse(productsJson);
  
    // Remove the item from the productInfo array
    productInfo.splice(index, 1);
  
    // Save the updated productInfo array back to local storage
    localStorage.setItem("products", JSON.stringify(productInfo));
  
    // Re-render the product list
    showproduct();
  }
  
  // ...


