![npm (scoped)](https://img.shields.io/npm/v/@nidomiro/node-modulesystem-check)


# Node Modulesystem Check


This package is a simple check for the node modulesystem.
It checks if your code is run in commonjs or esm mode.

## Installation

```bash
npm install @nidomiro/node-modulesystem-check
```

## Usage

### CommonJs

```ts
const { getModuleSystem } = require("@nidomiro/node-modulesystem-check");

getModuleSystem() // === "commonjs";
```


### ESM

```ts
import { getModuleSystem } from "@nidomiro/node-modulesystem-check";

getModuleSystem() // === "esm";
```