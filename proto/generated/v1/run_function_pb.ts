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

// @generated by protoc-gen-es v2.2.0 with parameter "target=ts+js+dts"
// @generated from file v1/run_function.proto (package apiextensions.fn.proto.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Duration } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_duration, file_google_protobuf_struct } from "@bufbuild/protobuf/wkt";
import type { JsonObject, Message } from "@bufbuild/protobuf";

/**
 * Describes the file v1/run_function.proto.
 */
export const file_v1_run_function: GenFile = /*@__PURE__*/
  fileDesc("ChV2MS9ydW5fZnVuY3Rpb24ucHJvdG8SGWFwaWV4dGVuc2lvbnMuZm4ucHJvdG8udjEijQUKElJ1bkZ1bmN0aW9uUmVxdWVzdBI0CgRtZXRhGAEgASgLMiYuYXBpZXh0ZW5zaW9ucy5mbi5wcm90by52MS5SZXF1ZXN0TWV0YRIyCghvYnNlcnZlZBgCIAEoCzIgLmFwaWV4dGVuc2lvbnMuZm4ucHJvdG8udjEuU3RhdGUSMQoHZGVzaXJlZBgDIAEoCzIgLmFwaWV4dGVuc2lvbnMuZm4ucHJvdG8udjEuU3RhdGUSKwoFaW5wdXQYBCABKAsyFy5nb29nbGUucHJvdG9idWYuU3RydWN0SACIAQESLQoHY29udGV4dBgFIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3RIAYgBARJaCg9leHRyYV9yZXNvdXJjZXMYBiADKAsyQS5hcGlleHRlbnNpb25zLmZuLnByb3RvLnYxLlJ1bkZ1bmN0aW9uUmVxdWVzdC5FeHRyYVJlc291cmNlc0VudHJ5ElMKC2NyZWRlbnRpYWxzGAcgAygLMj4uYXBpZXh0ZW5zaW9ucy5mbi5wcm90by52MS5SdW5GdW5jdGlvblJlcXVlc3QuQ3JlZGVudGlhbHNFbnRyeRpbChNFeHRyYVJlc291cmNlc0VudHJ5EgsKA2tleRgBIAEoCRIzCgV2YWx1ZRgCIAEoCzIkLmFwaWV4dGVuc2lvbnMuZm4ucHJvdG8udjEuUmVzb3VyY2VzOgI4ARpaChBDcmVkZW50aWFsc0VudHJ5EgsKA2tleRgBIAEoCRI1CgV2YWx1ZRgCIAEoCzImLmFwaWV4dGVuc2lvbnMuZm4ucHJvdG8udjEuQ3JlZGVudGlhbHM6AjgBQggKBl9pbnB1dEIKCghfY29udGV4dCJdCgtDcmVkZW50aWFscxJECg9jcmVkZW50aWFsX2RhdGEYASABKAsyKS5hcGlleHRlbnNpb25zLmZuLnByb3RvLnYxLkNyZWRlbnRpYWxEYXRhSABCCAoGc291cmNlIoABCg5DcmVkZW50aWFsRGF0YRJBCgRkYXRhGAEgAygLMjMuYXBpZXh0ZW5zaW9ucy5mbi5wcm90by52MS5DcmVkZW50aWFsRGF0YS5EYXRhRW50cnkaKwoJRGF0YUVudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoDDoCOAEiPwoJUmVzb3VyY2VzEjIKBWl0ZW1zGAEgAygLMiMuYXBpZXh0ZW5zaW9ucy5mbi5wcm90by52MS5SZXNvdXJjZSLnAgoTUnVuRnVuY3Rpb25SZXNwb25zZRI1CgRtZXRhGAEgASgLMicuYXBpZXh0ZW5zaW9ucy5mbi5wcm90by52MS5SZXNwb25zZU1ldGESMQoHZGVzaXJlZBgCIAEoCzIgLmFwaWV4dGVuc2lvbnMuZm4ucHJvdG8udjEuU3RhdGUSMgoHcmVzdWx0cxgDIAMoCzIhLmFwaWV4dGVuc2lvbnMuZm4ucHJvdG8udjEuUmVzdWx0Ei0KB2NvbnRleHQYBCABKAsyFy5nb29nbGUucHJvdG9idWYuU3RydWN0SACIAQESPQoMcmVxdWlyZW1lbnRzGAUgASgLMicuYXBpZXh0ZW5zaW9ucy5mbi5wcm90by52MS5SZXF1aXJlbWVudHMSOAoKY29uZGl0aW9ucxgGIAMoCzIkLmFwaWV4dGVuc2lvbnMuZm4ucHJvdG8udjEuQ29uZGl0aW9uQgoKCF9jb250ZXh0IhoKC1JlcXVlc3RNZXRhEgsKA3RhZxgBIAEoCSLIAQoMUmVxdWlyZW1lbnRzElQKD2V4dHJhX3Jlc291cmNlcxgBIAMoCzI7LmFwaWV4dGVuc2lvbnMuZm4ucHJvdG8udjEuUmVxdWlyZW1lbnRzLkV4dHJhUmVzb3VyY2VzRW50cnkaYgoTRXh0cmFSZXNvdXJjZXNFbnRyeRILCgNrZXkYASABKAkSOgoFdmFsdWUYAiABKAsyKy5hcGlleHRlbnNpb25zLmZuLnByb3RvLnYxLlJlc291cmNlU2VsZWN0b3I6AjgBIpQBChBSZXNvdXJjZVNlbGVjdG9yEhMKC2FwaV92ZXJzaW9uGAEgASgJEgwKBGtpbmQYAiABKAkSFAoKbWF0Y2hfbmFtZRgDIAEoCUgAEj4KDG1hdGNoX2xhYmVscxgEIAEoCzImLmFwaWV4dGVuc2lvbnMuZm4ucHJvdG8udjEuTWF0Y2hMYWJlbHNIAEIHCgVtYXRjaCKAAQoLTWF0Y2hMYWJlbHMSQgoGbGFiZWxzGAEgAygLMjIuYXBpZXh0ZW5zaW9ucy5mbi5wcm90by52MS5NYXRjaExhYmVscy5MYWJlbHNFbnRyeRotCgtMYWJlbHNFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBIlAKDFJlc3BvbnNlTWV0YRILCgN0YWcYASABKAkSKwoDdHRsGAIgASgLMhkuZ29vZ2xlLnByb3RvYnVmLkR1cmF0aW9uSACIAQFCBgoEX3R0bCLaAQoFU3RhdGUSNgoJY29tcG9zaXRlGAEgASgLMiMuYXBpZXh0ZW5zaW9ucy5mbi5wcm90by52MS5SZXNvdXJjZRJCCglyZXNvdXJjZXMYAiADKAsyLy5hcGlleHRlbnNpb25zLmZuLnByb3RvLnYxLlN0YXRlLlJlc291cmNlc0VudHJ5GlUKDlJlc291cmNlc0VudHJ5EgsKA2tleRgBIAEoCRIyCgV2YWx1ZRgCIAEoCzIjLmFwaWV4dGVuc2lvbnMuZm4ucHJvdG8udjEuUmVzb3VyY2U6AjgBIvgBCghSZXNvdXJjZRIpCghyZXNvdXJjZRgBIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3QSVgoSY29ubmVjdGlvbl9kZXRhaWxzGAIgAygLMjouYXBpZXh0ZW5zaW9ucy5mbi5wcm90by52MS5SZXNvdXJjZS5Db25uZWN0aW9uRGV0YWlsc0VudHJ5Ei8KBXJlYWR5GAMgASgOMiAuYXBpZXh0ZW5zaW9ucy5mbi5wcm90by52MS5SZWFkeRo4ChZDb25uZWN0aW9uRGV0YWlsc0VudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoDDoCOAEiswEKBlJlc3VsdBI1CghzZXZlcml0eRgBIAEoDjIjLmFwaWV4dGVuc2lvbnMuZm4ucHJvdG8udjEuU2V2ZXJpdHkSDwoHbWVzc2FnZRgCIAEoCRITCgZyZWFzb24YAyABKAlIAIgBARI2CgZ0YXJnZXQYBCABKA4yIS5hcGlleHRlbnNpb25zLmZuLnByb3RvLnYxLlRhcmdldEgBiAEBQgkKB19yZWFzb25CCQoHX3RhcmdldCLBAQoJQ29uZGl0aW9uEgwKBHR5cGUYASABKAkSMQoGc3RhdHVzGAIgASgOMiEuYXBpZXh0ZW5zaW9ucy5mbi5wcm90by52MS5TdGF0dXMSDgoGcmVhc29uGAMgASgJEhQKB21lc3NhZ2UYBCABKAlIAIgBARI2CgZ0YXJnZXQYBSABKA4yIS5hcGlleHRlbnNpb25zLmZuLnByb3RvLnYxLlRhcmdldEgBiAEBQgoKCF9tZXNzYWdlQgkKB190YXJnZXQqPwoFUmVhZHkSFQoRUkVBRFlfVU5TUEVDSUZJRUQQABIOCgpSRUFEWV9UUlVFEAESDwoLUkVBRFlfRkFMU0UQAipjCghTZXZlcml0eRIYChRTRVZFUklUWV9VTlNQRUNJRklFRBAAEhIKDlNFVkVSSVRZX0ZBVEFMEAESFAoQU0VWRVJJVFlfV0FSTklORxACEhMKD1NFVkVSSVRZX05PUk1BTBADKlYKBlRhcmdldBIWChJUQVJHRVRfVU5TUEVDSUZJRUQQABIUChBUQVJHRVRfQ09NUE9TSVRFEAESHgoaVEFSR0VUX0NPTVBPU0lURV9BTkRfQ0xBSU0QAip/CgZTdGF0dXMSIAocU1RBVFVTX0NPTkRJVElPTl9VTlNQRUNJRklFRBAAEhwKGFNUQVRVU19DT05ESVRJT05fVU5LTk9XThABEhkKFVNUQVRVU19DT05ESVRJT05fVFJVRRACEhoKFlNUQVRVU19DT05ESVRJT05fRkFMU0UQAzKHAQoVRnVuY3Rpb25SdW5uZXJTZXJ2aWNlEm4KC1J1bkZ1bmN0aW9uEi0uYXBpZXh0ZW5zaW9ucy5mbi5wcm90by52MS5SdW5GdW5jdGlvblJlcXVlc3QaLi5hcGlleHRlbnNpb25zLmZuLnByb3RvLnYxLlJ1bkZ1bmN0aW9uUmVzcG9uc2UiAEJBWj9naXRodWIuY29tL2Nyb3NzcGxhbmUvY3Jvc3NwbGFuZS9hcGlzL2FwaWV4dGVuc2lvbnMvZm4vcHJvdG8vdjFiBnByb3RvMw", [file_google_protobuf_struct, file_google_protobuf_duration]);

/**
 * A RunFunctionRequest requests that the Composition Function be run.
 *
 * @generated from message apiextensions.fn.proto.v1.RunFunctionRequest
 */
export type RunFunctionRequest = Message<"apiextensions.fn.proto.v1.RunFunctionRequest"> & {
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
export const RunFunctionRequestSchema: GenMessage<RunFunctionRequest> = /*@__PURE__*/
  messageDesc(file_v1_run_function, 0);

/**
 * Credentials that a Function may use to communicate with an external system.
 *
 * @generated from message apiextensions.fn.proto.v1.Credentials
 */
export type Credentials = Message<"apiextensions.fn.proto.v1.Credentials"> & {
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
export const CredentialsSchema: GenMessage<Credentials> = /*@__PURE__*/
  messageDesc(file_v1_run_function, 1);

/**
 * CredentialData loaded by Crossplane, for example from a Secret.
 *
 * @generated from message apiextensions.fn.proto.v1.CredentialData
 */
export type CredentialData = Message<"apiextensions.fn.proto.v1.CredentialData"> & {
  /**
   * @generated from field: map<string, bytes> data = 1;
   */
  data: { [key: string]: Uint8Array };
};

/**
 * Describes the message apiextensions.fn.proto.v1.CredentialData.
 * Use `create(CredentialDataSchema)` to create a new message.
 */
export const CredentialDataSchema: GenMessage<CredentialData> = /*@__PURE__*/
  messageDesc(file_v1_run_function, 2);

/**
 * Resources represents the state of several Crossplane resources.
 *
 * @generated from message apiextensions.fn.proto.v1.Resources
 */
export type Resources = Message<"apiextensions.fn.proto.v1.Resources"> & {
  /**
   * @generated from field: repeated apiextensions.fn.proto.v1.Resource items = 1;
   */
  items: Resource[];
};

/**
 * Describes the message apiextensions.fn.proto.v1.Resources.
 * Use `create(ResourcesSchema)` to create a new message.
 */
export const ResourcesSchema: GenMessage<Resources> = /*@__PURE__*/
  messageDesc(file_v1_run_function, 3);

/**
 * A RunFunctionResponse contains the result of a Composition Function run.
 *
 * @generated from message apiextensions.fn.proto.v1.RunFunctionResponse
 */
export type RunFunctionResponse = Message<"apiextensions.fn.proto.v1.RunFunctionResponse"> & {
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
export const RunFunctionResponseSchema: GenMessage<RunFunctionResponse> = /*@__PURE__*/
  messageDesc(file_v1_run_function, 4);

/**
 * RequestMeta contains metadata pertaining to a RunFunctionRequest.
 *
 * @generated from message apiextensions.fn.proto.v1.RequestMeta
 */
export type RequestMeta = Message<"apiextensions.fn.proto.v1.RequestMeta"> & {
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
export const RequestMetaSchema: GenMessage<RequestMeta> = /*@__PURE__*/
  messageDesc(file_v1_run_function, 5);

/**
 * Requirements that must be satisfied for a Function to run successfully.
 *
 * @generated from message apiextensions.fn.proto.v1.Requirements
 */
export type Requirements = Message<"apiextensions.fn.proto.v1.Requirements"> & {
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
export const RequirementsSchema: GenMessage<Requirements> = /*@__PURE__*/
  messageDesc(file_v1_run_function, 6);

/**
 * ResourceSelector selects a group of resources, either by name or by label.
 *
 * @generated from message apiextensions.fn.proto.v1.ResourceSelector
 */
export type ResourceSelector = Message<"apiextensions.fn.proto.v1.ResourceSelector"> & {
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
export const ResourceSelectorSchema: GenMessage<ResourceSelector> = /*@__PURE__*/
  messageDesc(file_v1_run_function, 7);

/**
 * MatchLabels defines a set of labels to match resources against.
 *
 * @generated from message apiextensions.fn.proto.v1.MatchLabels
 */
export type MatchLabels = Message<"apiextensions.fn.proto.v1.MatchLabels"> & {
  /**
   * @generated from field: map<string, string> labels = 1;
   */
  labels: { [key: string]: string };
};

/**
 * Describes the message apiextensions.fn.proto.v1.MatchLabels.
 * Use `create(MatchLabelsSchema)` to create a new message.
 */
export const MatchLabelsSchema: GenMessage<MatchLabels> = /*@__PURE__*/
  messageDesc(file_v1_run_function, 8);

/**
 * ResponseMeta contains metadata pertaining to a RunFunctionResponse.
 *
 * @generated from message apiextensions.fn.proto.v1.ResponseMeta
 */
export type ResponseMeta = Message<"apiextensions.fn.proto.v1.ResponseMeta"> & {
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
export const ResponseMetaSchema: GenMessage<ResponseMeta> = /*@__PURE__*/
  messageDesc(file_v1_run_function, 9);

/**
 * State of the composite resource (XR) and any composed resources.
 *
 * @generated from message apiextensions.fn.proto.v1.State
 */
export type State = Message<"apiextensions.fn.proto.v1.State"> & {
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
export const StateSchema: GenMessage<State> = /*@__PURE__*/
  messageDesc(file_v1_run_function, 10);

/**
 * A Resource represents the state of a composite or composed resource.
 *
 * @generated from message apiextensions.fn.proto.v1.Resource
 */
export type Resource = Message<"apiextensions.fn.proto.v1.Resource"> & {
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
export const ResourceSchema: GenMessage<Resource> = /*@__PURE__*/
  messageDesc(file_v1_run_function, 11);

/**
 * A Result of running a Function.
 *
 * @generated from message apiextensions.fn.proto.v1.Result
 */
export type Result = Message<"apiextensions.fn.proto.v1.Result"> & {
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
export const ResultSchema: GenMessage<Result> = /*@__PURE__*/
  messageDesc(file_v1_run_function, 12);

/**
 * Status condition to be applied to the composite resource. Condition may also
 * optionally be applied to the composite resource's associated claim. For
 * detailed information on proper usage of status conditions, please see
 * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#typical-status-properties.
 *
 * @generated from message apiextensions.fn.proto.v1.Condition
 */
export type Condition = Message<"apiextensions.fn.proto.v1.Condition"> & {
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
export const ConditionSchema: GenMessage<Condition> = /*@__PURE__*/
  messageDesc(file_v1_run_function, 13);

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
export const ReadySchema: GenEnum<Ready> = /*@__PURE__*/
  enumDesc(file_v1_run_function, 0);

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
export const SeveritySchema: GenEnum<Severity> = /*@__PURE__*/
  enumDesc(file_v1_run_function, 1);

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
export const TargetSchema: GenEnum<Target> = /*@__PURE__*/
  enumDesc(file_v1_run_function, 2);

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
export const StatusSchema: GenEnum<Status> = /*@__PURE__*/
  enumDesc(file_v1_run_function, 3);

/**
 * A FunctionRunnerService is a Composition Function.
 *
 * @generated from service apiextensions.fn.proto.v1.FunctionRunnerService
 */
export const FunctionRunnerService: GenService<{
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
}> = /*@__PURE__*/
  serviceDesc(file_v1_run_function, 0);
