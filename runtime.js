"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serve = exports.tlsOptions = void 0;
const path = __importStar(require("node:path"));
const connect_1 = require("@connectrpc/connect");
const connect_fastify_1 = require("@connectrpc/connect-fastify");
const connect_2 = __importDefault(require("./connect"));
const fs_1 = require("fs");
function functionWithOptions(logLevel, insecure, tlsCertsDir) {
    const fastify = require('fastify')({
        http2: true,
        logger: {
            level: logLevel || 'info'
        },
        https: tlsOptions(insecure, tlsCertsDir)
    });
    return fastify;
}
function tlsOptions(insecure, tlsCertsDir) {
    if (insecure && tlsCertsDir) {
        return {
            key: (0, fs_1.readFileSync)(path.join(tlsCertsDir, "tls.crt")),
            cert: (0, fs_1.readFileSync)(path.join(tlsCertsDir, "tls.key")),
            ca: (0, fs_1.readFileSync)(path.join(tlsCertsDir, "ca.crt")),
            requestCert: true
        };
    }
}
exports.tlsOptions = tlsOptions;
function serve() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const server = functionWithOptions('info');
            server.log.info("pre-await");
            yield server.register(connect_fastify_1.fastifyConnectPlugin, {
                routes: connect_2.default,
            });
            yield server.listen({ host: "localhost", port: 9443 });
            //server.log.info("server is listening at", server.addresses());
        }
        catch (err) {
            console.log("errorpre", err);
            if (err instanceof connect_1.ConnectError) {
                err.code; // Code.InvalidArgument
                err.message; // "[invalid_argument] sentence cannot be empty"
                console.log("error", err.message);
            }
        }
    });
}
exports.serve = serve;
