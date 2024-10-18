import * as resource from './resource'
import * as fnv1 from './proto/generated/v1/run_function_pb'
import * as grpc from '@grpc/grpc-js';
import * as k8s from '@kubernetes/client-node'; 

type Input = {
    objectMeta: k8s.V1ObjectMeta;
    //typeMeta: k8s.v1TypeMeta;

    Input: FunctionInput;
}

type FunctionInput = {
    users: string[];
    orgName: string;
}

// runFunction runs our function
function runFunction(req: fnv1.RunFunctionRequest): fnv1.RunFunctionResponse {
    let rsp = resource.to(req)

    let input = req.input

    return rsp
}