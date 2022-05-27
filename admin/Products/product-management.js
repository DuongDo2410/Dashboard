class productManagement {
    constructor(){
        this.productList = localStorage.getItem("products") ? JSON.parse( localStorage.getItem("products") ) : [];
    }
    getProductList(){
        return this.productList =  localStorage.getItem("products") ? JSON.parse( localStorage.getItem("products") ) : [];
    }
    

    setProductList(productList){
        this.productList = localStorage.setItem("products", JSON.stringify(productList))
    }
    addProduct(product){
        this.productList = localStorage.getItem("products") ? JSON.parse( localStorage.getItem("products") ) : [];
        this.productList.push({
            id: product.id,
            image: product.image,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            description: product.description,
            status: product.status
        })
        localStorage.setItem("products", JSON.stringify(this.productList))
        this.render(this.productList)
    }

    render(products){
        // let productsLocal = this.getProductList();
        const productsList = products.map((item, index) => {
            // console.log("object",item.status);
            return /*html */`
                <tr role="row" class="odd">
                    <td tabindex="0">${item.id}</td>
                    <td class="d-flex justify-content-center" ><img src = ${item.image} alt="" width="70px" height="70px" style="object-fit:cover;"></td>
                    <td class="tdname"><p class="name">${item.name}</p></td>
                    <td>${item.price}</td>
                    <td>${item.quantity}</td>
                    <td>
                        ${item.status == true
                            ?
                            '<span class="m-badge  m-badge--success m-badge--wide">còn hàng</span>'
                            :
                            '<span class="m-badge  m-badge--danger m-badge--wide">Hết hàng</span>'
                        }
                        
                    </td>
                    <td>
                        <span class="m-badge m-badge--primary m-badge--dot">
                        </span>&nbsp;
                        <span class="m--font-bold m--font-primary">loại sản
                            phẩm
                        </span>
                    </td>
                    <td nowrap="">
                        
                    <!-- Button trigger modal -->
                        <button type="button" class="m-portlet__nav-link btn m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="modal" data-target="#exampleModal" onclick="update(${item.id})">
                            <i class="la la-edit"></i>
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Cập nhật sản phẩm
                                        </h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>

                                    </div>
                                    <div class="modal-body">
                                        <div class="m-portlet">

                                            <!--begin::Form-->
                                            <div class="m-form m-form--fit m-form--label-align-right m-form--group-seperator-dashed">
                                                <div class="m-portlet__body">
                                                    <div class="form-group m-form__group row">
                                                        <input type="text" id="idUpdate" hidden>
                                                        <div class="col-lg-6">
                                                            <label>Tên sản phẩm:</label>
                                                            <input type="email" class="form-control m-input" id="nameUpdate">
                                                            <span class="m-form__help">Please enter your
                                                                full name</span>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <label class="">Giá sản phẩm:</label>
                                                            <input type="email" class="form-control m-input" id="priceUpdate">
                                                            <span class="m-form__help">Please enter your
                                                                contact number</span>
                                                        </div>
                                                    </div>
                                                    <div class="form-group m-form__group row">
                                                        <div class="col-lg-6">
                                                            <label>Loại sản phẩm:</label>
                                                            <div class="m-input-icon m-input-icon--right">
                                                                <input type="text" class="form-control m-input">
                                                                <span class="m-input-icon__icon m-input-icon__icon--right"><span><i
                                                                            class="la la-map-marker"></i></span></span>
                                                            </div>
                                                            <span class="m-form__help">Please enter your
                                                                address</span>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <label class="">Số lượng sản phẩm:</label>
                                                            <input type="number"
                                                                class="form-control m-input"
                                                                id="quantityUpdate">
                                                            <span class="m-form__help">Please enter your
                                                                contact number</span>
                                                        </div>
                                                    </div>
                                                    <div class="form-group m-form__group">
                                                        <label for="exampleTextarea">Mô tả sản
                                                            phẩm:</label>
                                                        <textarea class="form-control m-input" id="descriptionUpdate" rows="3"></textarea>
                                                    </div>
                                                    <div class="form-group m-form__group">
                                                        <label for="exampleTextarea">Ảnh sảnphẩm:</label>
                                                        <input type="text" class="form-control m-input" id="imageUpdate">
                                                    </div>
                                                </div>
                                            </div>

                                            <!--end::Form-->
                                        </div>
                                    </div>

                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                                        <button type="button" class="btn btn-primary" id="btnUpdate" data-dismiss="modal">Cập nhật</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <!-- Button trigger modal -->
                        <button type="button" class="m-portlet__nav-link btn m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="modal" data-target="#exampleModalCenter" onclick="remove(${item.id})" >
                            <i class="flaticon-close"></i>
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                        aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLongTitle">Thông báo</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        Bạn có muốn xóa
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                                        <button type="button" class="btn btn-primary" id="btnRemove" data-dismiss="modal">Xóa</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            `
        }).join("")
        document.querySelector(".showProducts").innerHTML = productsList;
    }

    removeProduct(id){
            let btn = document.querySelector("#btnRemove");
            btn.onclick = ()=>{
                let products = this.getProductList();
                let newProducts = products.filter(item => item.id != id ? item.id : '');
                console.log(newProducts);
                localStorage.setItem("products", JSON.stringify(newProducts))
                this.render(newProducts)
            }
    }
    
    updateProduct(id){
        // lấy data trong local
        let products = this.getProductList();
        // duyệt mảng local vừa lấy kiểm tra nếu id edit == id local thì trả về mảng ko thì trả về rỗng 
        let getValue = products.find(item => item.id == id ? item.id : '')
        let name = document.querySelector("#nameUpdate");
        let image = document.querySelector("#imageUpdate");
        let price = document.querySelector("#priceUpdate");
        let quantity = document.querySelector("#quantityUpdate");
        let description = document.querySelector("#descriptionUpdate");
        let btn = document.querySelector("#btnUpdate");
        let status;

        // hiển thị giá trị vừa lấy đc lên ô input
       
        name.value = getValue.name;
        image.value =  getValue.image;
        price.value = getValue.price;
        quantity.value = getValue.quantity;
        description.value = getValue.description;
        console.log(parseInt(quantity.value));
        
        btn.onclick = ()=>{
            status = parseInt(quantity.value) <= 0 ? false : true;
            // lấy data local
            let products = newProductManagement.getProductList();
            // console.log("product", products);
            // duyệt qua các data vừa lấy kiểm tra nếu id edit == id local thì sẽ gán lại giá trị các phần tử trong object vừa lấy đc
            for (let i = 0; i < products.length; i++) {
                if(id == products[i].id){
                    products[i].id = id;
                    products[i].name = name.value;
                    products[i].image = image.value;
                    products[i].price = price.value;
                    products[i].quantity = quantity.value;
                    products[i].description = description.value;
                    products[i].status = status;
                }
            }
            // console.log("a",products);
            // lưu lại vào local
            this.setProductList(products)
            // show ra web
            this.render(products)
        }

        
    }


    
    searchNameProducts(){
        let searchValue = document.querySelector("#search").value;
        let products = newProductManagement.getProductList();
        let search = products.filter(item => item.name.toUpperCase().includes(searchValue.toUpperCase()) ? item.name : '')
        // console.log(search)
        this.render(search)
    }   
}

