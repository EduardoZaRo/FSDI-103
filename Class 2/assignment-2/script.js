let globalReceipts = []
function createReceipt( productName, 
                        individualPrice, 
                        qty, 
                        beforeTaxPrice, 
                        taxes, 
                        afterTaxPrice){
    document.getElementById("receipts-container").innerHTML +=  `
        <div class="receipt">
            <div class="receipt-content">
                <div class="product-name">
                    <h1>${productName}</h1>
                </div>
                <div class="total-price">
                    <div class="individual-price"><p><strong>Individual price  :</strong>$${individualPrice.toFixed(2)}</p></div>
                    <div class="quantity"><p><strong>Quantity  :</strong>${qty}</p></div>
                    <div class="subtotal"><p><strong>Subtotal  :</strong>${beforeTaxPrice}</p></div>
                </div>
                <div class="taxes"><p><strong>Taxes  :</strong>$${taxes.toFixed(2)}</p></div>
                <div class="final-price"><p><strong>Final price  :</strong> $${afterTaxPrice.toFixed(2)}</p></div>
                <div><p class="date">${new Date().toLocaleString()}</p></div>
            </div>
        </div>
    `;
}
function receiveInfo(){
    let productName = prompt("Enter products name: ");
    let individualPrice = Number(prompt("Enter individual price: "));
    let qty = Number(prompt("Enter quantity: "));
    let beforeTaxPrice = individualPrice * qty;
    let taxes = beforeTaxPrice * 0.16;//16% IVA
    let afterTaxPrice = beforeTaxPrice + taxes;
    createReceipt(  productName, individualPrice, qty,
                    beforeTaxPrice, taxes, afterTaxPrice);
}
console.log(new Date().toLocaleString())
document.getElementById("search-input").addEventListener("keydown", (event) =>{
    let value;
    setTimeout(function() {
        value = document.getElementById("search-input").value;
        console.log(value);
        [...document.getElementById("receipts-container").children].forEach((v)=>{
            if(!value){
                v.classList.remove("hide");
                return;
            }
            if(v.children[0].children[0].children[0].innerText.includes(value)){
                v.classList.remove("hide");
            }
            else{
                v.classList.add("hide");
            }
        })
    }, 100); 
    
    
})
createReceipt( "Oldest example", 3,  3, 3 ,3, 3);
createReceipt( "Example", 3,  3, 3 ,3, 3);
createReceipt( "Example", 3,  3, 3 ,3, 3);
createReceipt( "Example", 3,  3, 3 ,3, 3);
createReceipt( "Example", 3,  3, 3 ,3, 3);
createReceipt( "Example", 3,  3, 3 ,3, 3);
createReceipt( "Example", 3,  3, 3 ,3, 3);
createReceipt( "Example", 3,  3, 3 ,3, 3);
createReceipt( "Newest example", 3,  3, 3 ,3, 3);