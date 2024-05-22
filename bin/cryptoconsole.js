#!/usr/bin/env node
import { program } from "commander";


program
    .version('1.0.0')
    .command('key','Manage API key -- https://nomics.com')
    .command('view','View Crypto Coin Prices')
    .parse(process.argv);
