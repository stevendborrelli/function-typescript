import * as fnv1 from './proto/generated/v1/run_function_pb'
import { create } from '@bufbuild/protobuf';
import { Duration, DurationSchema } from "@bufbuild/protobuf/wkt";

const defaultTTL = create(DurationSchema, { seconds: BigInt(60) })

// to bootstraps a response to the supplied request. It automatically copies the
// desired state from the request.
export function to(req: fnv1.RunFunctionRequest): fnv1.RunFunctionResponse {
    const rsp = create(fnv1.RunFunctionResponseSchema, {
        meta: create(fnv1.ResponseMetaSchema, {
            tag: req.meta?.tag,

        }),
        desired: req.desired,
        context: req.context,
    })
    console.log("pre-return")

    
    // We can add to the results array
    normal(rsp, "this is a normal message")
    
    // This will cause the composition step to fail
    // fatal(rsp, "bad things happened")
    
    console.log(JSON.stringify(rsp, null, 2))
    return rsp
}

function fatal(rsp: fnv1.RunFunctionResponse, message: string) {
    rsp.results.push(
        create(fnv1.ResultSchema, {
            severity: fnv1.Severity.FATAL,
            message: message
        })
    )
}


function normal(rsp: fnv1.RunFunctionResponse, message: string) {
    rsp.results.push(
        create(fnv1.ResultSchema, {
            severity: fnv1.Severity.NORMAL,
            message: message
        })
    )
}

function warning(rsp: fnv1.RunFunctionResponse, message: string) {
    rsp.results.push(
        create(fnv1.ResultSchema, {
            severity: fnv1.Severity.WARNING,
            message: message
        })
    )
}



