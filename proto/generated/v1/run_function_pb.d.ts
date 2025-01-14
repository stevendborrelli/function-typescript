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

// @generated by protoc-gen-es v2.2.0 with parameter "target=ts+dts"
// @generated from file v1/run_function.proto (package apiextensions.fn.proto.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { JsonObject, Message } from "@bufbuild/protobuf";
import type { Duration } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file v1/run_function.proto.
 */
export declare const file_v1_run_function: GenFile;

/**
 * A RunFunctionRequest requests that the Composition Function be run.
 *
 * @generated from message apiextensions.fn.proto.v1.RunFunctionRequest
 */
export declare type RunFunctionRequest = Message<"apiextensions.fn.proto.v1.RunFunctionRequest"> & {
  /**
   * Metadata pertaining to this request.
   *
   * @generated from field: apiextensions.fn.proto.v1.RequestMeta meta = 1;
   */
  meta?: RequestMeta;

  /**
   * The observed state prior to invocation of a Function pipeline. State passed
   * to each Function is fresh as of the time the pipeline was invoked, not as
   * of the time each Function was invoked.
   *
   * @generated from field: apiextensions.fn.proto.v1.State observed = 2;
   */
  observed?: State;

  /**
   * Desired state according to a Function pipeline. The state passed to a
   * particular Function may have been accumulated by previous Functions in the
   * pipeline.
   *
   * Note that the desired state must be a partial object with only the fields
   * that this function (and its predecessors in the pipeline) wants to have
   * set in the object. Copying a non-partial observed state to desired is most
   * likely not what you want to do. Leaving out fields that had been returned
   * as desired before will result in them being deleted from the objects in the
   * cluster.
   *
   * @generated from field: apiextensions.fn.proto.v1.State desired = 3;
   */
  desired?: State;

  /**
   * Optional input specific to this Function invocation. A JSON representation
   * of the 'input' block of the relevant entry in a Composition's pipeline.
   *
   * @generated from field: optional google.protobuf.Struct input = 4;
   */
  input?: JsonObject;

  /**
   * Optional context. Crossplane may pass arbitary contextual information to a
   * Function. A Function may also return context in its RunFunctionResponse,
   * and that context will be passed to subsequent Functions. Crossplane
   * discards all context returned by the last Function in the pipeline.
   *
   * @generated from field: optional google.protobuf.Struct context = 5;
   */
  context?: JsonObject;

  /**
   * Optional extra resources that the Function required.
   * Note that extra resources is a map to Resources, plural.
   * The map key corresponds to the key in a RunFunctionResponse's
   * extra_resources field. If a Function requested extra resources that
   * did not exist, Crossplane sets the map key to an empty Resources message to
   * indicate that it attempted to satisfy the request.
   *
   * @generated from field: map<string, apiextensions.fn.proto.v1.Resources> extra_resources = 6;
   */
  extraResources: { [key: string]: Resources };

  /**
   * Optional credentials that this Function may use to communicate with an
   * external system.
   *
   * @generated from field: map<string, apiextensions.fn.proto.v1.Credentials> credentials = 7;
   */
  credentials: { [key: string]: Credentials };
};

/**
 * Describes the message apiextensions.fn.proto.v1.RunFunctionRequest.
 * Use `create(RunFunctionRequestSchema)` to create a new message.
 */
export declare const RunFunctionRequestSchema: GenMessage<RunFunctionRequest>;

/**
 * Credentials that a Function may use to communicate with an external system.
 *
 * @generated from message apiextensions.fn.proto.v1.Credentials
 */
export declare type Credentials = Message<"apiextensions.fn.proto.v1.Credentials"> & {
  /**
   * Source of the credentials.
   *
   * @generated from oneof apiextensions.fn.proto.v1.Credentials.source
   */
  source: {
    /**
     * Credential data loaded by Crossplane, for example from a Secret.
     *
     * @generated from field: apiextensions.fn.proto.v1.CredentialData credential_data = 1;
     */
    value: CredentialData;
    case: "credentialData";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message apiextensions.fn.proto.v1.Credentials.
 * Use `create(CredentialsSchema)` to create a new message.
 */
export declare const CredentialsSchema: GenMessage<Credentials>;

/**
 * CredentialData loaded by Crossplane, for example from a Secret.
 *
 * @generated from message apiextensions.fn.proto.v1.CredentialData
 */
export declare type CredentialData = Message<"apiextensions.fn.proto.v1.CredentialData"> & {
  /**
   * @generated from field: map<string, bytes> data = 1;
   */
  data: { [key: string]: Uint8Array };
};

/**
 * Describes the message apiextensions.fn.proto.v1.CredentialData.
 * Use `create(CredentialDataSchema)` to create a new message.
 */
export declare const CredentialDataSchema: GenMessage<CredentialData>;

/**
 * Resources represents the state of several Crossplane resources.
 *
 * @generated from message apiextensions.fn.proto.v1.Resources
 */
export declare type Resources = Message<"apiextensions.fn.proto.v1.Resources"> & {
  /**
   * @generated from field: repeated apiextensions.fn.proto.v1.Resource items = 1;
   */
  items: Resource[];
};

/**
 * Describes the message apiextensions.fn.proto.v1.Resources.
 * Use `create(ResourcesSchema)` to create a new message.
 */
export declare const ResourcesSchema: GenMessage<Resources>;

/**
 * A RunFunctionResponse contains the result of a Composition Function run.
 *
 * @generated from message apiextensions.fn.proto.v1.RunFunctionResponse
 */
export declare type RunFunctionResponse = Message<"apiextensions.fn.proto.v1.RunFunctionResponse"> & {
  /**
   * Metadata pertaining to this response.
   *
   * @generated from field: apiextensions.fn.proto.v1.ResponseMeta meta = 1;
   */
  meta?: ResponseMeta;

  /**
   * Desired state according to a Function pipeline. Functions may add desired
   * state, and may mutate or delete any part of the desired state they are
   * concerned with. A Function must pass through any part of the desired state
   * that it is not concerned with.
   *
   *
   * Note that the desired state must be a partial object with only the fields
   * that this function (and its predecessors in the pipeline) wants to have
   * set in the object. Copying a non-partial observed state to desired is most
   * likely not what you want to do. Leaving out fields that had been returned
   * as desired before will result in them being deleted from the objects in the
   * cluster.
   *
   * @generated from field: apiextensions.fn.proto.v1.State desired = 2;
   */
  desired?: State;

  /**
   * Results of the Function run. Results are used for observability purposes.
   *
   * @generated from field: repeated apiextensions.fn.proto.v1.Result results = 3;
   */
  results: Result[];

  /**
   * Optional context to be passed to the next Function in the pipeline as part
   * of the RunFunctionRequest. Dropped on the last function in the pipeline.
   *
   * @generated from field: optional google.protobuf.Struct context = 4;
   */
  context?: JsonObject;

  /**
   * Requirements that must be satisfied for this Function to run successfully.
   *
   * @generated from field: apiextensions.fn.proto.v1.Requirements requirements = 5;
   */
  requirements?: Requirements;

  /**
   * Status conditions to be applied to the composite resource. Conditions may also
   * optionally be applied to the composite resource's associated claim.
   *
   * @generated from field: repeated apiextensions.fn.proto.v1.Condition conditions = 6;
   */
  conditions: Condition[];
};

/**
 * Describes the message apiextensions.fn.proto.v1.RunFunctionResponse.
 * Use `create(RunFunctionResponseSchema)` to create a new message.
 */
export declare const RunFunctionResponseSchema: GenMessage<RunFunctionResponse>;

/**
 * RequestMeta contains metadata pertaining to a RunFunctionRequest.
 *
 * @generated from message apiextensions.fn.proto.v1.RequestMeta
 */
export declare type RequestMeta = Message<"apiextensions.fn.proto.v1.RequestMeta"> & {
  /**
   * An opaque string identifying the content of the request. Two identical
   * requests should have the same tag.
   *
   * @generated from field: string tag = 1;
   */
  tag: string;
};

/**
 * Describes the message apiextensions.fn.proto.v1.RequestMeta.
 * Use `create(RequestMetaSchema)` to create a new message.
 */
export declare const RequestMetaSchema: GenMessage<RequestMeta>;

/**
 * Requirements that must be satisfied for a Function to run successfully.
 *
 * @generated from message apiextensions.fn.proto.v1.Requirements
 */
export declare type Requirements = Message<"apiextensions.fn.proto.v1.Requirements"> & {
  /**
   * Extra resources that this Function requires.
   * The map key uniquely identifies the group of resources.
   *
   * @generated from field: map<string, apiextensions.fn.proto.v1.ResourceSelector> extra_resources = 1;
   */
  extraResources: { [key: string]: ResourceSelector };
};

/**
 * Describes the message apiextensions.fn.proto.v1.Requirements.
 * Use `create(RequirementsSchema)` to create a new message.
 */
export declare const RequirementsSchema: GenMessage<Requirements>;

/**
 * ResourceSelector selects a group of resources, either by name or by label.
 *
 * @generated from message apiextensions.fn.proto.v1.ResourceSelector
 */
export declare type ResourceSelector = Message<"apiextensions.fn.proto.v1.ResourceSelector"> & {
  /**
   * API version of resources to select.
   *
   * @generated from field: string api_version = 1;
   */
  apiVersion: string;

  /**
   * Kind of resources to select.
   *
   * @generated from field: string kind = 2;
   */
  kind: string;

  /**
   * Resources to match.
   *
   * @generated from oneof apiextensions.fn.proto.v1.ResourceSelector.match
   */
  match: {
    /**
     * Match the resource with this name.
     *
     * @generated from field: string match_name = 3;
     */
    value: string;
    case: "matchName";
  } | {
    /**
     * Match all resources with these labels.
     *
     * @generated from field: apiextensions.fn.proto.v1.MatchLabels match_labels = 4;
     */
    value: MatchLabels;
    case: "matchLabels";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message apiextensions.fn.proto.v1.ResourceSelector.
 * Use `create(ResourceSelectorSchema)` to create a new message.
 */
export declare const ResourceSelectorSchema: GenMessage<ResourceSelector>;

/**
 * MatchLabels defines a set of labels to match resources against.
 *
 * @generated from message apiextensions.fn.proto.v1.MatchLabels
 */
export declare type MatchLabels = Message<"apiextensions.fn.proto.v1.MatchLabels"> & {
  /**
   * @generated from field: map<string, string> labels = 1;
   */
  labels: { [key: string]: string };
};

/**
 * Describes the message apiextensions.fn.proto.v1.MatchLabels.
 * Use `create(MatchLabelsSchema)` to create a new message.
 */
export declare const MatchLabelsSchema: GenMessage<MatchLabels>;

/**
 * ResponseMeta contains metadata pertaining to a RunFunctionResponse.
 *
 * @generated from message apiextensions.fn.proto.v1.ResponseMeta
 */
export declare type ResponseMeta = Message<"apiextensions.fn.proto.v1.ResponseMeta"> & {
  /**
   * An opaque string identifying the content of the request. Must match the
   * meta.tag of the corresponding RunFunctionRequest.
   *
   * @generated from field: string tag = 1;
   */
  tag: string;

  /**
   * Time-to-live of this response. Deterministic Functions with no side-effects
   * (e.g. simple templating Functions) may specify a TTL. Crossplane may choose
   * to cache responses until the TTL expires.
   *
   * @generated from field: optional google.protobuf.Duration ttl = 2;
   */
  ttl?: Duration;
};

/**
 * Describes the message apiextensions.fn.proto.v1.ResponseMeta.
 * Use `create(ResponseMetaSchema)` to create a new message.
 */
export declare const ResponseMetaSchema: GenMessage<ResponseMeta>;

/**
 * State of the composite resource (XR) and any composed resources.
 *
 * @generated from message apiextensions.fn.proto.v1.State
 */
export declare type State = Message<"apiextensions.fn.proto.v1.State"> & {
  /**
   * The state of the composite resource (XR).
   *
   * @generated from field: apiextensions.fn.proto.v1.Resource composite = 1;
   */
  composite?: Resource;

  /**
   * The state of any composed resources.
   *
   * @generated from field: map<string, apiextensions.fn.proto.v1.Resource> resources = 2;
   */
  resources: { [key: string]: Resource };
};

/**
 * Describes the message apiextensions.fn.proto.v1.State.
 * Use `create(StateSchema)` to create a new message.
 */
export declare const StateSchema: GenMessage<State>;

/**
 * A Resource represents the state of a composite or composed resource.
 *
 * @generated from message apiextensions.fn.proto.v1.Resource
 */
export declare type Resource = Message<"apiextensions.fn.proto.v1.Resource"> & {
  /**
   * The JSON representation of the resource.
   *
   * * Crossplane will set this field in a RunFunctionRequest to the entire
   *   observed state of a resource - including its metadata, spec, and status.
   *
   * * A Function should set this field in a RunFunctionRequest to communicate
   *   the desired state of a composite or composed resource.
   *
   * * A Function may only specify the desired status of a composite resource -
   *   not its metadata or spec. A Function should not return desired metadata
   *   or spec for a composite resource. This will be ignored.
   *
   * * A Function may not specify the desired status of a composed resource -
   *   only its metadata and spec. A Function should not return desired status
   *   for a composed resource. This will be ignored.
   *
   * @generated from field: google.protobuf.Struct resource = 1;
   */
  resource?: JsonObject;

  /**
   * The resource's connection details.
   *
   * * Crossplane will set this field in a RunFunctionRequest to communicate the
   *   the observed connection details of a composite or composed resource.
   *
   * * A Function should set this field in a RunFunctionResponse to indicate the
   *   desired connection details of the composite resource.
   *
   * * A Function should not set this field in a RunFunctionResponse to indicate
   *   the desired connection details of a composed resource. This will be
   *   ignored.
   *
   * @generated from field: map<string, bytes> connection_details = 2;
   */
  connectionDetails: { [key: string]: Uint8Array };

  /**
   * Ready indicates whether the resource should be considered ready.
   *
   * * Crossplane will never set this field in a RunFunctionRequest.
   *
   * * A Function should set this field to READY_TRUE in a RunFunctionResponse
   *   to indicate that a desired composed resource is ready.
   *
   * * A Function should not set this field in a RunFunctionResponse to indicate
   *   that the desired composite resource is ready. This will be ignored.
   *
   * @generated from field: apiextensions.fn.proto.v1.Ready ready = 3;
   */
  ready: Ready;
};

/**
 * Describes the message apiextensions.fn.proto.v1.Resource.
 * Use `create(ResourceSchema)` to create a new message.
 */
export declare const ResourceSchema: GenMessage<Resource>;

/**
 * A Result of running a Function.
 *
 * @generated from message apiextensions.fn.proto.v1.Result
 */
export declare type Result = Message<"apiextensions.fn.proto.v1.Result"> & {
  /**
   * Severity of this result.
   *
   * @generated from field: apiextensions.fn.proto.v1.Severity severity = 1;
   */
  severity: Severity;

  /**
   * Human-readable details about the result.
   *
   * @generated from field: string message = 2;
   */
  message: string;

  /**
   * Optional PascalCase, machine-readable reason for this result. If omitted,
   * the value will be ComposeResources.
   *
   * @generated from field: optional string reason = 3;
   */
  reason?: string;

  /**
   * The resources this result targets.
   *
   * @generated from field: optional apiextensions.fn.proto.v1.Target target = 4;
   */
  target?: Target;
};

/**
 * Describes the message apiextensions.fn.proto.v1.Result.
 * Use `create(ResultSchema)` to create a new message.
 */
export declare const ResultSchema: GenMessage<Result>;

/**
 * Status condition to be applied to the composite resource. Condition may also
 * optionally be applied to the composite resource's associated claim. For
 * detailed information on proper usage of status conditions, please see
 * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#typical-status-properties.
 *
 * @generated from message apiextensions.fn.proto.v1.Condition
 */
export declare type Condition = Message<"apiextensions.fn.proto.v1.Condition"> & {
  /**
   * Type of condition in PascalCase.
   *
   * @generated from field: string type = 1;
   */
  type: string;

  /**
   * Status of the condition.
   *
   * @generated from field: apiextensions.fn.proto.v1.Status status = 2;
   */
  status: Status;

  /**
   * Reason contains a programmatic identifier indicating the reason for the
   * condition's last transition. Producers of specific condition types may
   * define expected values and meanings for this field, and whether the values
   * are considered a guaranteed API. The value should be a PascalCase string.
   * This field may not be empty.
   *
   * @generated from field: string reason = 3;
   */
  reason: string;

  /**
   * Message is a human readable message indicating details about the
   * transition. This may be an empty string.
   *
   * @generated from field: optional string message = 4;
   */
  message?: string;

  /**
   * The resources this condition targets.
   *
   * @generated from field: optional apiextensions.fn.proto.v1.Target target = 5;
   */
  target?: Target;
};

/**
 * Describes the message apiextensions.fn.proto.v1.Condition.
 * Use `create(ConditionSchema)` to create a new message.
 */
export declare const ConditionSchema: GenMessage<Condition>;

/**
 * Ready indicates whether a composed resource should be considered ready.
 *
 * @generated from enum apiextensions.fn.proto.v1.Ready
 */
export enum Ready {
  /**
   * @generated from enum value: READY_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * True means the composed resource has been observed to be ready.
   *
   * @generated from enum value: READY_TRUE = 1;
   */
  TRUE = 1,

  /**
   * False means the composed resource has not been observed to be ready.
   *
   * @generated from enum value: READY_FALSE = 2;
   */
  FALSE = 2,
}

/**
 * Describes the enum apiextensions.fn.proto.v1.Ready.
 */
export declare const ReadySchema: GenEnum<Ready>;

/**
 * Severity of Function results.
 *
 * @generated from enum apiextensions.fn.proto.v1.Severity
 */
export enum Severity {
  /**
   * @generated from enum value: SEVERITY_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Fatal results are fatal; subsequent Composition Functions may run, but
   * the Composition Function pipeline run will be considered a failure and
   * the first fatal result will be returned as an error.
   *
   * @generated from enum value: SEVERITY_FATAL = 1;
   */
  FATAL = 1,

  /**
   * Warning results are non-fatal; the entire Composition will run to
   * completion but warning events and debug logs associated with the
   * composite resource will be emitted.
   *
   * @generated from enum value: SEVERITY_WARNING = 2;
   */
  WARNING = 2,

  /**
   * Normal results are emitted as normal events and debug logs associated
   * with the composite resource.
   *
   * @generated from enum value: SEVERITY_NORMAL = 3;
   */
  NORMAL = 3,
}

/**
 * Describes the enum apiextensions.fn.proto.v1.Severity.
 */
export declare const SeveritySchema: GenEnum<Severity>;

/**
 * Target of Function results and conditions.
 *
 * @generated from enum apiextensions.fn.proto.v1.Target
 */
export enum Target {
  /**
   * If the target is unspecified, the result targets the composite resource.
   *
   * @generated from enum value: TARGET_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Target the composite resource. Results that target the composite resource
   * should include detailed, advanced information.
   *
   * @generated from enum value: TARGET_COMPOSITE = 1;
   */
  COMPOSITE = 1,

  /**
   * Target the composite and the claim. Results that target the composite and
   * the claim should include only end-user friendly information.
   *
   * @generated from enum value: TARGET_COMPOSITE_AND_CLAIM = 2;
   */
  COMPOSITE_AND_CLAIM = 2,
}

/**
 * Describes the enum apiextensions.fn.proto.v1.Target.
 */
export declare const TargetSchema: GenEnum<Target>;

/**
 * @generated from enum apiextensions.fn.proto.v1.Status
 */
export enum Status {
  /**
   * @generated from enum value: STATUS_CONDITION_UNSPECIFIED = 0;
   */
  CONDITION_UNSPECIFIED = 0,

  /**
   * @generated from enum value: STATUS_CONDITION_UNKNOWN = 1;
   */
  CONDITION_UNKNOWN = 1,

  /**
   * @generated from enum value: STATUS_CONDITION_TRUE = 2;
   */
  CONDITION_TRUE = 2,

  /**
   * @generated from enum value: STATUS_CONDITION_FALSE = 3;
   */
  CONDITION_FALSE = 3,
}

/**
 * Describes the enum apiextensions.fn.proto.v1.Status.
 */
export declare const StatusSchema: GenEnum<Status>;

/**
 * A FunctionRunnerService is a Composition Function.
 *
 * @generated from service apiextensions.fn.proto.v1.FunctionRunnerService
 */
export declare const FunctionRunnerService: GenService<{
  /**
   * RunFunction runs the Composition Function.
   *
   * @generated from rpc apiextensions.fn.proto.v1.FunctionRunnerService.RunFunction
   */
  runFunction: {
    methodKind: "unary";
    input: typeof RunFunctionRequestSchema;
    output: typeof RunFunctionResponseSchema;
  },
}>;

