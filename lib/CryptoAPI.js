
import axios from "axios";
import chalk from "chalk";

class CryptoAPI{
    constructor(apiKey){
        this.apiKey=apiKey;
        this.baseURL = 'https://api.coinranking.com';
    }

    async getPriceData(coinOption){
        try{
            // console.log(coinOption)

            const res = await axios.get(`${this.baseURL}/v2/coins?search=${coinOption}&limit=1`,{
            headers: {
                'x-access-token': this.apiKey,
            },
        });

        const data = res.data.data.coins;
      let output = '';

      data.forEach(coin => {
        output += `-----------------------------\n`;
        output += `Coin: ${coin.symbol} (${coin.name}) \n`;
        output += `Price: $${coin.price}\n`;
        output += `Market Cap: $${coin.marketCap}\n`;
        output += `-----------------------------\n`;
      });

      console.log(chalk.green(output));
        }
        catch(err){
            console.log(err);
        }
        return '';
    }
}

export default CryptoAPI;