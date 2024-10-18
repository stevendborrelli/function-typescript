"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionRunnerService = exports.StatusSchema = exports.Status = exports.TargetSchema = exports.Target = exports.SeveritySchema = exports.Severity = exports.ReadySchema = exports.Ready = exports.ConditionSchema = exports.ResultSchema = exports.ResourceSchema = exports.StateSchema = exports.ResponseMetaSchema = exports.MatchLabelsSchema = exports.ResourceSelectorSchema = exports.RequirementsSchema = exports.RequestMetaSchema = exports.RunFunctionResponseSchema = exports.ResourcesSchema = exports.CredentialDataSchema = exports.CredentialsSchema = exports.RunFunctionRequestSchema = exports.file_v1_run_function = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
/**
 * Describes the file v1/run_function.proto.
 */
exports.file_v1_run_function = (0, codegenv1_1.fileDesc)("ChV2MS9ydW5fZnVuY3Rpb24ucHJvdG8SGWFwaWV4dGVuc2lvbnMuZm4ucHJvdG8udjEijQUKElJ1bkZ1bmN0aW9uUmVxdWVzdBI0CgRtZXRhGAEgASgLMiYuYXBpZXh0ZW5zaW9ucy5mbi5wcm90by52MS5SZXF1ZXN0TWV0YRIyCghvYnNlcnZlZBgCIAEoCzIgLmFwaWV4dGVuc2lvbnMuZm4ucHJvdG8udjEuU3RhdGUSMQoHZGVzaXJlZBgDIAEoCzIgLmFwaWV4dGVuc2lvbnMuZm4ucHJvdG8udjEuU3RhdGUSKwoFaW5wdXQYBCABKAsyFy5nb29nbGUucHJvdG9idWYuU3RydWN0SACIAQESLQoHY29udGV4dBgFIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3RIAYgBARJaCg9leHRyYV9yZXNvdXJjZXMYBiADKAsyQS5hcGlleHRlbnNpb25zLmZuLnByb3RvLnYxLlJ1bkZ1bmN0aW9uUmVxdWVzdC5FeHRyYVJlc291cmNlc0VudHJ5ElMKC2NyZWRlbnRpYWxzGAcgAygLMj4uYXBpZXh0ZW5zaW9ucy5mbi5wcm90by52MS5SdW5GdW5jdGlvblJlcXVlc3QuQ3JlZGVudGlhbHNFbnRyeRpbChNFeHRyYVJlc291cmNlc0VudHJ5EgsKA2tleRgBIAEoCRIzCgV2YWx1ZRgCIAEoCzIkLmFwaWV4dGVuc2lvbnMuZm4ucHJvdG8udjEuUmVzb3VyY2VzOgI4ARpaChBDcmVkZW50aWFsc0VudHJ5EgsKA2tleRgBIAEoCRI1CgV2YWx1ZRgCIAEoCzImLmFwaWV4dGVuc2lvbnMuZm4ucHJvdG8udjEuQ3JlZGVudGlhbHM6AjgBQggKBl9pbnB1dEIKCghfY29udGV4dCJdCgtDcmVkZW50aWFscxJECg9jcmVkZW50aWFsX2RhdGEYASABKAsyKS5hcGlleHRlbnNpb25zLmZuLnByb3RvLnYxLkNyZWRlbnRpYWxEYXRhSABCCAoGc291cmNlIoABCg5DcmVkZW50aWFsRGF0YRJBCgRkYXRhGAEgAygLMjMuYXBpZXh0ZW5zaW9ucy5mbi5wcm90by52MS5DcmVkZW50aWFsRGF0YS5EYXRhRW50cnkaKwoJRGF0YUVudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoDDoCOAEiPwoJUmVzb3VyY2VzEjIKBWl0ZW1zGAEgAygLMiMuYXBpZXh0ZW5zaW9ucy5mbi5wcm90by52MS5SZXNvdXJjZSLnAgoTUnVuRnVuY3Rpb25SZXNwb25zZRI1CgRtZXRhGAEgASgLMicuYXBpZXh0ZW5zaW9ucy5mbi5wcm90by52MS5SZXNwb25zZU1ldGESMQoHZGVzaXJlZBgCIAEoCzIgLmFwaWV4dGVuc2lvbnMuZm4ucHJvdG8udjEuU3RhdGUSMgoHcmVzdWx0cxgDIAMoCzIhLmFwaWV4dGVuc2lvbnMuZm4ucHJvdG8udjEuUmVzdWx0Ei0KB2NvbnRleHQYBCABKAsyFy5nb29nbGUucHJvdG9idWYuU3RydWN0SACIAQESPQoMcmVxdWlyZW1lbnRzGAUgASgLMicuYXBpZXh0ZW5zaW9ucy5mbi5wcm90by52MS5SZXF1aXJlbWVudHMSOAoKY29uZGl0aW9ucxgGIAMoCzIkLmFwaWV4dGVuc2lvbnMuZm4ucHJvdG8udjEuQ29uZGl0aW9uQgoKCF9jb250ZXh0IhoKC1JlcXVlc3RNZXRhEgsKA3RhZxgBIAEoCSLIAQoMUmVxdWlyZW1lbnRzElQKD2V4dHJhX3Jlc291cmNlcxgBIAMoCzI7LmFwaWV4dGVuc2lvbnMuZm4ucHJvdG8udjEuUmVxdWlyZW1lbnRzLkV4dHJhUmVzb3VyY2VzRW50cnkaYgoTRXh0cmFSZXNvdXJjZXNFbnRyeRILCgNrZXkYASABKAkSOgoFdmFsdWUYAiABKAsyKy5hcGlleHRlbnNpb25zLmZuLnByb3RvLnYxLlJlc291cmNlU2VsZWN0b3I6AjgBIpQBChBSZXNvdXJjZVNlbGVjdG9yEhMKC2FwaV92ZXJzaW9uGAEgASgJEgwKBGtpbmQYAiABKAkSFAoKbWF0Y2hfbmFtZRgDIAEoCUgAEj4KDG1hdGNoX2xhYmVscxgEIAEoCzImLmFwaWV4dGVuc2lvbnMuZm4ucHJvdG8udjEuTWF0Y2hMYWJlbHNIAEIHCgVtYXRjaCKAAQoLTWF0Y2hMYWJlbHMSQgoGbGFiZWxzGAEgAygLMjIuYXBpZXh0ZW5zaW9ucy5mbi5wcm90by52MS5NYXRjaExhYmVscy5MYWJlbHNFbnRyeRotCgtMYWJlbHNFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBIlAKDFJlc3BvbnNlTWV0YRILCgN0YWcYASABKAkSKwoDdHRsGAIgASgLMhkuZ29vZ2xlLnByb3RvYnVmLkR1cmF0aW9uSACIAQFCBgoEX3R0bCLaAQoFU3RhdGUSNgoJY29tcG9zaXRlGAEgASgLMiMuYXBpZXh0ZW5zaW9ucy5mbi5wcm90by52MS5SZXNvdXJjZRJCCglyZXNvdXJjZXMYAiADKAsyLy5hcGlleHRlbnNpb25zLmZuLnByb3RvLnYxLlN0YXRlLlJlc291cmNlc0VudHJ5GlUKDlJlc291cmNlc0VudHJ5EgsKA2tleRgBIAEoCRIyCgV2YWx1ZRgCIAEoCzIjLmFwaWV4dGVuc2lvbnMuZm4ucHJvdG8udjEuUmVzb3VyY2U6AjgBIvgBCghSZXNvdXJjZRIpCghyZXNvdXJjZRgBIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3QSVgoSY29ubmVjdGlvbl9kZXRhaWxzGAIgAygLMjouYXBpZXh0ZW5zaW9ucy5mbi5wcm90by52MS5SZXNvdXJjZS5Db25uZWN0aW9uRGV0YWlsc0VudHJ5Ei8KBXJlYWR5GAMgASgOMiAuYXBpZXh0ZW5zaW9ucy5mbi5wcm90by52MS5SZWFkeRo4ChZDb25uZWN0aW9uRGV0YWlsc0VudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoDDoCOAEiswEKBlJlc3VsdBI1CghzZXZlcml0eRgBIAEoDjIjLmFwaWV4dGVuc2lvbnMuZm4ucHJvdG8udjEuU2V2ZXJpdHkSDwoHbWVzc2FnZRgCIAEoCRITCgZyZWFzb24YAyABKAlIAIgBARI2CgZ0YXJnZXQYBCABKA4yIS5hcGlleHRlbnNpb25zLmZuLnByb3RvLnYxLlRhcmdldEgBiAEBQgkKB19yZWFzb25CCQoHX3RhcmdldCLBAQoJQ29uZGl0aW9uEgwKBHR5cGUYASABKAkSMQoGc3RhdHVzGAIgASgOMiEuYXBpZXh0ZW5zaW9ucy5mbi5wcm90by52MS5TdGF0dXMSDgoGcmVhc29uGAMgASgJEhQKB21lc3NhZ2UYBCABKAlIAIgBARI2CgZ0YXJnZXQYBSABKA4yIS5hcGlleHRlbnNpb25zLmZuLnByb3RvLnYxLlRhcmdldEgBiAEBQgoKCF9tZXNzYWdlQgkKB190YXJnZXQqPwoFUmVhZHkSFQoRUkVBRFlfVU5TUEVDSUZJRUQQABIOCgpSRUFEWV9UUlVFEAESDwoLUkVBRFlfRkFMU0UQAipjCghTZXZlcml0eRIYChRTRVZFUklUWV9VTlNQRUNJRklFRBAAEhIKDlNFVkVSSVRZX0ZBVEFMEAESFAoQU0VWRVJJVFlfV0FSTklORxACEhMKD1NFVkVSSVRZX05PUk1BTBADKlYKBlRhcmdldBIWChJUQVJHRVRfVU5TUEVDSUZJRUQQABIUChBUQVJHRVRfQ09NUE9TSVRFEAESHgoaVEFSR0VUX0NPTVBPU0lURV9BTkRfQ0xBSU0QAip/CgZTdGF0dXMSIAocU1RBVFVTX0NPTkRJVElPTl9VTlNQRUNJRklFRBAAEhwKGFNUQVRVU19DT05ESVRJT05fVU5LTk9XThABEhkKFVNUQVRVU19DT05ESVRJT05fVFJVRRACEhoKFlNUQVRVU19DT05ESVRJT05fRkFMU0UQAzKHAQoVRnVuY3Rpb25SdW5uZXJTZXJ2aWNlEm4KC1J1bkZ1bmN0aW9uEi0uYXBpZXh0ZW5zaW9ucy5mbi5wcm90by52MS5SdW5GdW5jdGlvblJlcXVlc3QaLi5hcGlleHRlbnNpb25zLmZuLnByb3RvLnYxLlJ1bkZ1bmN0aW9uUmVzcG9uc2UiAEJBWj9naXRodWIuY29tL2Nyb3NzcGxhbmUvY3Jvc3NwbGFuZS9hcGlzL2FwaWV4dGVuc2lvbnMvZm4vcHJvdG8vdjFiBnByb3RvMw", [wkt_1.file_google_protobuf_struct, wkt_1.file_google_protobuf_duration]);
/**
 * Describes the message apiextensions.fn.proto.v1.RunFunctionRequest.
 * Use `create(RunFunctionRequestSchema)` to create a new message.
 */
exports.RunFunctionRequestSchema = (0, codegenv1_1.messageDesc)(exports.file_v1_run_function, 0);
/**
 * Describes the message apiextensions.fn.proto.v1.Credentials.
 * Use `create(CredentialsSchema)` to create a new message.
 */
exports.CredentialsSchema = (0, codegenv1_1.messageDesc)(exports.file_v1_run_function, 1);
/**
 * Describes the message apiextensions.fn.proto.v1.CredentialData.
 * Use `create(CredentialDataSchema)` to create a new message.
 */
exports.CredentialDataSchema = (0, codegenv1_1.messageDesc)(exports.file_v1_run_function, 2);
/**
 * Describes the message apiextensions.fn.proto.v1.Resources.
 * Use `create(ResourcesSchema)` to create a new message.
 */
exports.ResourcesSchema = (0, codegenv1_1.messageDesc)(exports.file_v1_run_function, 3);
/**
 * Describes the message apiextensions.fn.proto.v1.RunFunctionResponse.
 * Use `create(RunFunctionResponseSchema)` to create a new message.
 */
exports.RunFunctionResponseSchema = (0, codegenv1_1.messageDesc)(exports.file_v1_run_function, 4);
/**
 * Describes the message apiextensions.fn.proto.v1.RequestMeta.
 * Use `create(RequestMetaSchema)` to create a new message.
 */
exports.RequestMetaSchema = (0, codegenv1_1.messageDesc)(exports.file_v1_run_function, 5);
/**
 * Describes the message apiextensions.fn.proto.v1.Requirements.
 * Use `create(RequirementsSchema)` to create a new message.
 */
exports.RequirementsSchema = (0, codegenv1_1.messageDesc)(exports.file_v1_run_function, 6);
/**
 * Describes the message apiextensions.fn.proto.v1.ResourceSelector.
 * Use `create(ResourceSelectorSchema)` to create a new message.
 */
exports.ResourceSelectorSchema = (0, codegenv1_1.messageDesc)(exports.file_v1_run_function, 7);
/**
 * Describes the message apiextensions.fn.proto.v1.MatchLabels.
 * Use `create(MatchLabelsSchema)` to create a new message.
 */
exports.MatchLabelsSchema = (0, codegenv1_1.messageDesc)(exports.file_v1_run_function, 8);
/**
 * Describes the message apiextensions.fn.proto.v1.ResponseMeta.
 * Use `create(ResponseMetaSchema)` to create a new message.
 */
exports.ResponseMetaSchema = (0, codegenv1_1.messageDesc)(exports.file_v1_run_function, 9);
/**
 * Describes the message apiextensions.fn.proto.v1.State.
 * Use `create(StateSchema)` to create a new message.
 */
exports.StateSchema = (0, codegenv1_1.messageDesc)(exports.file_v1_run_function, 10);
/**
 * Describes the message apiextensions.fn.proto.v1.Resource.
 * Use `create(ResourceSchema)` to create a new message.
 */
exports.ResourceSchema = (0, codegenv1_1.messageDesc)(exports.file_v1_run_function, 11);
/**
 * Describes the message apiextensions.fn.proto.v1.Result.
 * Use `create(ResultSchema)` to create a new message.
 */
exports.ResultSchema = (0, codegenv1_1.messageDesc)(exports.file_v1_run_function, 12);
/**
 * Describes the message apiextensions.fn.proto.v1.Condition.
 * Use `create(ConditionSchema)` to create a new message.
 */
exports.ConditionSchema = (0, codegenv1_1.messageDesc)(exports.file_v1_run_function, 13);
/**
 * Ready indicates whether a composed resource should be considered ready.
 *
 * @generated from enum apiextensions.fn.proto.v1.Ready
 */
var Ready;
(function (Ready) {
    /**
     * @generated from enum value: READY_UNSPECIFIED = 0;
     */
    Ready[Ready["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * True means the composed resource has been observed to be ready.
     *
     * @generated from enum value: READY_TRUE = 1;
     */
    Ready[Ready["TRUE"] = 1] = "TRUE";
    /**
     * False means the composed resource has not been observed to be ready.
     *
     * @generated from enum value: READY_FALSE = 2;
     */
    Ready[Ready["FALSE"] = 2] = "FALSE";
})(Ready || (exports.Ready = Ready = {}));
/**
 * Describes the enum apiextensions.fn.proto.v1.Ready.
 */
exports.ReadySchema = (0, codegenv1_1.enumDesc)(exports.file_v1_run_function, 0);
/**
 * Severity of Function results.
 *
 * @generated from enum apiextensions.fn.proto.v1.Severity
 */
var Severity;
(function (Severity) {
    /**
     * @generated from enum value: SEVERITY_UNSPECIFIED = 0;
     */
    Severity[Severity["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * Fatal results are fatal; subsequent Composition Functions may run, but
     * the Composition Function pipeline run will be considered a failure and
     * the first fatal result will be returned as an error.
     *
     * @generated from enum value: SEVERITY_FATAL = 1;
     */
    Severity[Severity["FATAL"] = 1] = "FATAL";
    /**
     * Warning results are non-fatal; the entire Composition will run to
     * completion but warning events and debug logs associated with the
     * composite resource will be emitted.
     *
     * @generated from enum value: SEVERITY_WARNING = 2;
     */
    Severity[Severity["WARNING"] = 2] = "WARNING";
    /**
     * Normal results are emitted as normal events and debug logs associated
     * with the composite resource.
     *
     * @generated from enum value: SEVERITY_NORMAL = 3;
     */
    Severity[Severity["NORMAL"] = 3] = "NORMAL";
})(Severity || (exports.Severity = Severity = {}));
/**
 * Describes the enum apiextensions.fn.proto.v1.Severity.
 */
exports.SeveritySchema = (0, codegenv1_1.enumDesc)(exports.file_v1_run_function, 1);
/**
 * Target of Function results and conditions.
 *
 * @generated from enum apiextensions.fn.proto.v1.Target
 */
var Target;
(function (Target) {
    /**
     * If the target is unspecified, the result targets the composite resource.
     *
     * @generated from enum value: TARGET_UNSPECIFIED = 0;
     */
    Target[Target["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * Target the composite resource. Results that target the composite resource
     * should include detailed, advanced information.
     *
     * @generated from enum value: TARGET_COMPOSITE = 1;
     */
    Target[Target["COMPOSITE"] = 1] = "COMPOSITE";
    /**
     * Target the composite and the claim. Results that target the composite and
     * the claim should include only end-user friendly information.
     *
     * @generated from enum value: TARGET_COMPOSITE_AND_CLAIM = 2;
     */
    Target[Target["COMPOSITE_AND_CLAIM"] = 2] = "COMPOSITE_AND_CLAIM";
})(Target || (exports.Target = Target = {}));
/**
 * Describes the enum apiextensions.fn.proto.v1.Target.
 */
exports.TargetSchema = (0, codegenv1_1.enumDesc)(exports.file_v1_run_function, 2);
/**
 * @generated from enum apiextensions.fn.proto.v1.Status
 */
var Status;
(function (Status) {
    /**
     * @generated from enum value: STATUS_CONDITION_UNSPECIFIED = 0;
     */
    Status[Status["CONDITION_UNSPECIFIED"] = 0] = "CONDITION_UNSPECIFIED";
    /**
     * @generated from enum value: STATUS_CONDITION_UNKNOWN = 1;
     */
    Status[Status["CONDITION_UNKNOWN"] = 1] = "CONDITION_UNKNOWN";
    /**
     * @generated from enum value: STATUS_CONDITION_TRUE = 2;
     */
    Status[Status["CONDITION_TRUE"] = 2] = "CONDITION_TRUE";
    /**
     * @generated from enum value: STATUS_CONDITION_FALSE = 3;
     */
    Status[Status["CONDITION_FALSE"] = 3] = "CONDITION_FALSE";
})(Status || (exports.Status = Status = {}));
/**
 * Describes the enum apiextensions.fn.proto.v1.Status.
 */
exports.StatusSchema = (0, codegenv1_1.enumDesc)(exports.file_v1_run_function, 3);
/**
 * A FunctionRunnerService is a Composition Function.
 *
 * @generated from service apiextensions.fn.proto.v1.FunctionRunnerService
 */
exports.FunctionRunnerService = (0, codegenv1_1.serviceDesc)(exports.file_v1_run_function, 0);
