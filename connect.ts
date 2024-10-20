import { ConnectRouter, HandlerContext } from "@connectrpc/connect";
import { FunctionRunnerService } from "./proto/generated/v1/run_function_pb";
import runFunction from './function'

// register the RPC for our function
export default (router: ConnectRouter) =>
    router.service(FunctionRunnerService, { runFunction });
