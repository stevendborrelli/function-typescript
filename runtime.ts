import * as path from 'node:path'
import { ConnectError } from "@connectrpc/connect";
import { fastifyConnectPlugin } from "@connectrpc/connect-fastify";
import routes from "./connect";
import { readFileSync } from "fs";

function functionWithOptions(logLevel?: string, insecure?: boolean, tlsCertsDir?: string) {
    const fastify = require('fastify')({
        http2: true,
        logger: {
            level: logLevel || 'info'
        },
        https: tlsOptions(insecure, tlsCertsDir)
    })
    return fastify
}

export function tlsOptions(insecure?: boolean, tlsCertsDir?: string) {
    if (insecure && tlsCertsDir) {
        return {
            key: readFileSync(path.join(tlsCertsDir, "tls.crt")),
            cert: readFileSync(path.join(tlsCertsDir, "tls.key")),
            ca: readFileSync(path.join(tlsCertsDir, "ca.crt")),
            requestCert: true
        }
    }
}

export async function serve() {
    try {
        const server = functionWithOptions('info')
        server.log.info("pre-await")
        await server.register(fastifyConnectPlugin, {
            routes,
        });
        await server.listen({ host: "localhost", port: 9443 });
        //server.log.info("server is listening at", server.addresses());
    }
    catch (err) {
        console.log("errorpre",err)
        if (err instanceof ConnectError) {
            err.code;    // Code.InvalidArgument
            err.message; // "[invalid_argument] sentence cannot be empty"
            console.log("error", err.message)
        }
    }

}

