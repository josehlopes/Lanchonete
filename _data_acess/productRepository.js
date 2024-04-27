const IProductRepository = require('../_interface/iProductRepository');
class ProductRepository extends IProductRepository {
    
    constructor() {
        super();
    }
    async addProduct(name, value) {
        try {
            const row = await this.productModel.create({
                name: name,
                value: value
            });
            return row;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getProduct(code) {
        try {
            const row = await this.db.productModel.findOne({
                where: {
                    code: code
                }
            });
            return row;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getAllProducts(){
        try {
            const rows = await this.db.productModel.findAll();
            return rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}

module.exports = ProductRepository;