#!/usr/bin/env node

//const { Command } = require("commander");

import * as runtime from "./runtime"

if (require.main === module) {
  
    runtime.serve()
}