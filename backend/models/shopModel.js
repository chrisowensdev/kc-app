const fetch = require('node-fetch');

class Shop {
    static async showShopDetail() {
        try {
            const response = await fetch(
                `https://openapi.etsy.com/v2/users/kaitlinscandles/shops?api_key=${process.env.ETSY_KEYSTRING}`
            );
            const data = response.json();
            return data;
        } catch (error) {
            console.error('Error: ', error.message);
            return error.message;
        }
    }

    static async findAllShopListingsActive() {
        try {
            const response = await fetch(
                `https://openapi.etsy.com/v2/shops/${process.env.ETSY_SHOPID}/listings/active?api_key=${process.env.ETSY_KEYSTRING}`
            );
            const data = response.json();
            return data;
        } catch (error) {
            console.error('Error: ', error.message);
            return error.message;
        }
    }
}

module.exports = Shop;
