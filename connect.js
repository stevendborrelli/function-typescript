"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const run_function_pb_1 = require("./proto/generated/v1/run_function_pb");
const function_1 = __importDefault(require("./function"));
// register the RPC for our function
exports.default = (router) => router.service(run_function_pb_1.FunctionRunnerService, { runFunction: function_1.default });
