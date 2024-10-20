# function-typescript

This is an experimental [Crossplane Composition Function](https://docs.crossplane.io/latest/concepts/compositions/)
to assist in developing a Typescript SDK.

## Overview

The following files are used in this project:

- `main.ts`: CLI options
- `connect.ts`: connect-es register routes
- `function.ts`: main function logic. Update this for your function.
- `resource.ts`: resource libraries (will move to SDK)
- `runtime.ts`: runtime libraries (will move to SDK)

## Building

```shell
npm run build
```

## Running Locally

This function can be run locally to aid in debugging.

```shell
npm run debug
```

## Regenerating the Protobuf Typescript files

You should rarely need to regenerate the files, but the process is:

```shell
npm run clean-proto
npm run gen-proto
```

Generated files are in `proto/generated/v1`

## Dependencies

### protobuf-es

[protobuf-es](https://github.com/bufbuild/protobuf-es) is used to generate
`.ts` files from our protocol definitions.

We are using the 2.x versions of protobuf-es, which includes breaking changes.

### connect-es

This project uses the 2.0 betas of [connect-es](https://connectrpc.com/docs/introduction), see <https://github.com/connectrpc/connect-es/releases/tag/v2.0.0-alpha.1> for an overview. To install this beta version:

```shell
npm remove @connectrpc/protoc-gen-connect-es @connectrpc/connect
npm install @connectrpc/protoc-gen-connect-es@2.0.0-rc.1 @connectrpc/connect@2.0.0-rc.1 @connectrpc/connect-node@2.0.0-rc.1 @connectrpc/connect-fastly@2.0.0-rc.1 @bufbuild/protobuf@latest @bufbuild/protoc-gen-es@latest --save-dev
```
