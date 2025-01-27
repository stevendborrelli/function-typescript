//
//Copyright 2022 The Crossplane Authors.
//
//Licensed under the Apache License, Version 2.0 (the "License");
//you may not use this file except in compliance with the License.
//You may obtain a copy of the License at
//
//http://www.apache.org/licenses/LICENSE-2.0
//
//Unless required by applicable law or agreed to in writing, software
//distributed under the License is distributed on an "AS IS" BASIS,
//WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//See the License for the specific language governing permissions and
//limitations under the License.

// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts+dts"
// @generated from file v1/run_function.proto (package apiextensions.fn.proto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { RunFunctionRequest, RunFunctionResponse } from "./run_function_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * A FunctionRunnerService is a Composition Function.
 *
 * @generated from service apiextensions.fn.proto.v1.FunctionRunnerService
 */
export declare const FunctionRunnerService: {
  readonly typeName: "apiextensions.fn.proto.v1.FunctionRunnerService",
  readonly methods: {
    /**
     * RunFunction runs the Composition Function.
     *
     * @generated from rpc apiextensions.fn.proto.v1.FunctionRunnerService.RunFunction
     */
    readonly runFunction: {
      readonly name: "RunFunction",
      readonly I: typeof RunFunctionRequest,
      readonly O: typeof RunFunctionResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

