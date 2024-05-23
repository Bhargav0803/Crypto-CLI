// c64c1fe8-737b-4ffd-93e6-5dc113a8e689

import axios from "axios";
import chalk from "chalk";

class CryptoAPI{
    constructor(apiKey){
        this.apiKey=apiKey;
        this.baseURL = 'https://sandbox-api.coinmarketcap.com';
    }

    async getPriceData(coinOption){
        try{
            const res = await axios.get(`${this.baseURL}/v1/cryptocurrency/listings/latest?start=1&limit=100&sort=market_cap&cryptocurrency_type=all&tag=all`,{
            headers: {
                'X-CMC_PRO_API_KEY': this.apiKey,
            },
        });
        // const json = response.data;
        // console.log(json);
        // return json;
        let output='';
        res.data.array.forEach(coin => {    
            output += `Coin: ${coin.data.symbol} (${coin.data.name}) `
        });
        }
        catch(err){
            console.log(err);
        }
    }
}
let response = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
      },
    });
  } catch(ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const json = response.data;
    console.log(json);
    resolve(json);
  }
});

export default CryptoAPI;