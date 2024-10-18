#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grpc = require("@grpc/grpc-js");
var resource = require("./resource");
var fnv1 = require("./proto/generated/v1/run_function_pb");
var protobuf_1 = require("@bufbuild/protobuf");
var res = {
    "spec": {
        "forProvider": {
            "region": "eu-south"
        },
    },
};
if (require.main === module) {
    var req = (0, protobuf_1.create)(fnv1.RunFunctionRequestSchema, {
        meta: (0, protobuf_1.create)(fnv1.RequestMetaSchema, {
            tag: "test"
        }),
        observed: (0, protobuf_1.create)(fnv1.StateSchema, {
            composite: (0, protobuf_1.create)(fnv1.ResourceSchema),
            resources: {
                "foo": (0, protobuf_1.create)(fnv1.ResourceSchema),
                "bar": (0, protobuf_1.create)(fnv1.ResourceSchema, {
                    resource: res
                })
            },
        }),
        desired: (0, protobuf_1.create)(fnv1.StateSchema, {
            composite: (0, protobuf_1.create)(fnv1.ResourceSchema),
            resources: {
                "foo": (0, protobuf_1.create)(fnv1.ResourceSchema, {
                    resource: {
                        "apiVersion": "v1",
                        "kind": "mykind"
                    }
                }),
                "bar": (0, protobuf_1.create)(fnv1.ResourceSchema, {
                    resource: res
                })
            },
        })
    });
    var rsp = resource.to(req);
    var json_1 = (0, protobuf_1.toJson)(fnv1.RunFunctionResponseSchema, rsp);
    var host_1 = '0.0.0.0:9443';
    var server = new grpc.Server();
    server.bindAsync(host_1, grpc.ServerCredentials.createInsecure(), function () {
        console.log("Server running at ", host_1);
        console.log("response", json_1);
    });
}
