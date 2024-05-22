import KeyManager from "../lib/KeyManager.js"
import inquirer from "inquirer"
import chalk from "chalk";
import { isRequired } from "../utils/validation.js";


const key = {
    async set() {
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: chalk.blue('Enter API key') + chalk.gray(' https://nomics.com'),
                validate: isRequired
            }
        ]);

        //Debug log - console.log("User input received:", input.key);  

        const key = keyManager.setKey(input.key);
        //Debug log - console.log("KeyManager setKey result:", key);

        if (key) {
            console.log(chalk.green('API Key Set'));
        } else {
            console.log(chalk.red('Failed to set API Key'));
        }
    },
    show() {
        try{
            const keyManager = new KeyManager();
            const key = keyManager.getKey();
            console.log('Current API Key: ' + chalk.yellow(key));
            return key;
        }
        catch(err){
            console.error(chalk.red(err.message));
        }
    },
    remove() {
        try{
            const keyManager = new KeyManager();
            keyManager.deleteKey();
            console.log(chalk.red('API Key Removed'));
        }
        catch(err){
            console.error(chalk.red(err.message));
        }
    }
}

export default key;