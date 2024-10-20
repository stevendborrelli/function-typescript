import * as fnv1 from './proto/generated/v1/run_function_pb'
import { create } from '@bufbuild/protobuf';

// to bootstraps a response to the supplied request. It automatically copies the
// desired state from the request.
export function to(req: fnv1.RunFunctionRequest): fnv1.RunFunctionResponse {
    const rsp = create(fnv1.RunFunctionResponseSchema, {
        meta: create(fnv1.ResponseMetaSchema, { tag: req.meta?.tag }),
        desired: req.desired,
        context: req.context,
    })
    return rsp
}


