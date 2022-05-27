let newProductManagement = new productManagement();
let btnAdd = document.querySelector("#btnAdd");

console.log("object", newProductManagement.getProductList());
newProductManagement.render(newProductManagement.getProductList())


// add product
btnAdd.onclick = ()=> {
    let idValue = Math.floor(Math.random() * (1111-1)) * 111;
    let imageValue = document.querySelector("#image");
    let nameValue = document.querySelector("#name");
    let priceValue = document.querySelector("#price");
    let quantityValue = document.querySelector("#quantity");
    let descriptionValue = document.querySelector("#description");
    let statusValue = parseInt(quantityValue.value) > 0 ? true : false; 
    // console.log(statusValue);
    let newProduct = new Product(idValue, imageValue.value, nameValue.value, priceValue.value, quantity.value, descriptionValue.value, statusValue);
    newProductManagement.addProduct(newProduct)
}

//get id
function remove(id){
    newProductManagement.removeProduct(id)
}


// get id
function update(id){
    newProductManagement.updateProduct(id)
}

let btnUpdate = document.querySelector("#btnUpdate");
// console.log(btnUpdate);

// btnUpdate.onclick = ()=> {
//     alert("a")
//     // lấy giá trị ô input khi edit
//     let id = document.querySelector("#idUpdate").value;
//     let name = document.querySelector("#nameUpdate").value;
//     let image = document.querySelector("#imageUpdate").value;
//     let price = document.querySelector("#priceUpdate").value;
//     let quantity = document.querySelector("#quantityUpdate").value;
//     let description = document.querySelector("#descriptionUpdate").value;
//     let status = parseInt(quantity.value) > 0 ? true : false;
//     // lấy data local
//     let products = newProductManagement.getProductList();
//     console.log("product", products);
//     // duyệt qua các data vừa lấy kiểm tra nếu id edit == id local thì sẽ gán lại giá trị các phần tử trong object vừa lấy đc
//     for (let i = 0; i < products.length; i++) {
//         if(id == products[i].id){
//             products[i].id = id;
//             products[i].name = name;
//             products[i].image = image;
//             products[i].price = price;
//             products[i].quantity = quantity;
//             products[i].description = description;
//             products[i].status = status;
//         }
//     }

//     // lưu lại vào local
//     newProductManagement.setProductList(products)
//     // show ra web
//     newProductManagement.render()
    
// }

//search
let search = document.querySelector("#search");
search.onkeyup = (e)=> {
        newProductManagement.searchNameProducts();
}