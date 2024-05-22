import { program } from "commander";
import view from "../commands/view.js";

program
    .command('price')
    .description('View price of coins')
    .option('--coin <type>','Add specific coin types in CSV format','BTC,ETH,ERC')
    .option('--cur <currency>', 'Change the currency','USD')
    .action((cmd)=>view.price(cmd));

program.parse(process.argv);