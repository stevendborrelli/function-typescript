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
Object.defineProperty(exports, "__esModule", { value: true });
exports.to = void 0;
const fnv1 = __importStar(require("./proto/generated/v1/run_function_pb"));
const protobuf_1 = require("@bufbuild/protobuf");
// to bootstraps a response to the supplied request. It automatically copies the
// desired state from the request.
function to(req) {
    var _a;
    const rsp = (0, protobuf_1.create)(fnv1.RunFunctionResponseSchema, {
        meta: (0, protobuf_1.create)(fnv1.ResponseMetaSchema, { tag: (_a = req.meta) === null || _a === void 0 ? void 0 : _a.tag }),
        desired: req.desired,
        context: req.context,
    });
    return rsp;
}
exports.to = to;
