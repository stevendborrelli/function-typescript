import { FunctionRunnerService, RunFunctionRequest, RunFunctionResponse } from "./proto/generated/v1/run_function_pb";
import { to } from "./response"

// runFunction is the main logic for our function
export default async function runFunction(req: RunFunctionRequest): Promise<RunFunctionResponse> {
    const rsp = to(req)
    //console.log("req", JSON.stringify(req, null, 2))
    console.log("rsp", JSON.stringify(rsp, null, 2))
    return rsp
}