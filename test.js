const ProductRepository = require('./_data_acess/productRepository');
const acess = new ProductRepository();
acess.addProduct('Coca', 4.5);
acess.getProduct(1)