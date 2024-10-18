"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.to = to;
var fnv1 = require("./proto/generated/v1/run_function_pb");
var protobuf_1 = require("@bufbuild/protobuf");
// to bootstraps a response to the supplied request. It automatically copies the
// desired state from the request.
function to(req) {
    var _a;
    var rsp = (0, protobuf_1.create)(fnv1.RunFunctionResponseSchema, {
        meta: (0, protobuf_1.create)(fnv1.ResponseMetaSchema, { tag: (_a = req.meta) === null || _a === void 0 ? void 0 : _a.tag }),
        desired: req.desired,
        context: req.context,
    });
    return rsp;
}
