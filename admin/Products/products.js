class Product{
    id;
    image;
    name;
    price;
    quantity;
    description;
    status;
    constructor (id, image, name, price, quantity, description, status){
        this.id = id;
        this.image = image;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
        this.status = status;
    }

    get getId(){
        return this.id
    }
    set setId(id){
        this.id = id
    }

    get getImage(){
        return this.image
    }
    set setImage(image){
        this.image = image
    }

    get getName(){
        return this.id
    }
    set setName(name){
        this.name = name
    }

    get getPrice(){
        return this.price
    }
    set setPrice(price){
        this.price = price
    }

    get getQuantity(){
        return this.quantity
    }
    set setQuantity(quantity){
        this.quantity = quantity
    }

    get getDescription(){
        return this.description
    }
    set getDescription(description){
        this.description = description
    }

    get getStatus(){
        return this.status
    }
    set getStatus(status){
        this.status = status
    }
    
}



