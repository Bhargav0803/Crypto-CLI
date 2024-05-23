import KeyManager from "../lib/KeyManager.js"
import CryptoAPI from "../lib/CryptoAPI.js";

const view = {
    async price(cmd) {
        // console.log("HEllo")
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();
            const api = new CryptoAPI();
            const priceData = await api.getPriceData(cmd.coin);
            console.log(priceData);

        } catch (error) {
            console.log(error)
        }
    }
}

export default view;