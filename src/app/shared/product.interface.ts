export class Product {
    productName!: string;
    productQuantity!: number;
    productDescription!: string;
    productRating!: number;
    productImage!: string;
    productPrice!: number;
    productCategory!: string;
    productReviewPersons!: number;

    constructor(
        productName: string,
        productQuantity: number,
        productDescription: string,
        productRating: number,
        productImage: string,
        productPrice: number,
        productCategory: string,
        productReviewPersons: number
    ){
        this.productName = productName;
        this.productQuantity = productQuantity;
        this.productDescription = productDescription;
        this.productRating = productRating;
        this.productImage = productImage;
        this.productPrice = productPrice;
        this.productCategory = productCategory;
        this.productReviewPersons = productReviewPersons;
     }
}



