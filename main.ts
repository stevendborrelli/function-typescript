#!/usr/bin/env node

import * as grpc from '@grpc/grpc-js';
import * as resource from './resource'
import * as fnv1 from './proto/generated/v1/run_function_pb'
import {
    create,
    toJson,
    JsonObject
} from '@bufbuild/protobuf';

let res: JsonObject = {
    "spec": {
        "forProvider": {
            "region": "eu-south"
        },
    },
}

if (require.main === module) {
    let req = create(fnv1.RunFunctionRequestSchema, {
        meta: create(fnv1.RequestMetaSchema, {
            tag: "test"
        }),
        observed: create(fnv1.StateSchema, {
            composite: create(fnv1.ResourceSchema),
            resources: {
                "foo": create(fnv1.ResourceSchema),
                "bar": create(fnv1.ResourceSchema, {
                    resource: res
                })
            },
        }),
        desired: create(fnv1.StateSchema, {
            composite: create(fnv1.ResourceSchema),
            resources: {
                "foo": create(fnv1.ResourceSchema, {
                    resource: {
                        "apiVersion": "v1",
                        "kind": "mykind"
                    }
                }),
                "bar": create(fnv1.ResourceSchema, {
                    resource: res
                })
            },
        })
    })
    let rsp = resource.to(req)
    let json = toJson(fnv1.RunFunctionResponseSchema, rsp);

    const host = '0.0.0.0:9443';
    const server = new grpc.Server();
    server.bindAsync(host,
        grpc.ServerCredentials.createInsecure(),
        () => {
            console.log("Server running at ", host);
            console.log("response", json)
        });
}