# eslint-config-sukka

[![Version](https://img.shields.io/npm/v/eslint-config-sukka.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-sukka)
[![License](https://img.shields.io/npm/l/eslint-config-sukka.svg?style=flat-square)](./LICENSE)

ESLint config for [Sukka](https://skk.moe).

## Installation

```bash
$ npm i -D eslint-config-sukka
```

If you are using eslint-config-hexo for TypeScript project, install following packages as well:

```bash
$ npm i -D typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## Usage

Add following snippets to your ESLint configuration files.

### Node.js project

```json
{
  "extends": "sukka/node"
}
```

### Legacy Browsers

```json
{
  "extends": "sukka/legacy"
}
```

### TypeScript Project

```json
{
  "extends": "sukka/typescript"
}
```

## Maintainer

**eslint-config-sukka** © [Sukka](https://github.com/SukkaW), Released under the [MIT](./LICENSE) License.

> [Personal Website](https://skk.moe) · [Blog](https://blog.skk.moe) · GitHub [@SukkaW](https://github.com/SukkaW) · Telegram Channel [@SukkaChannel](https://t.me/SukkaChannel) · Twitter [@isukkaw](https://twitter.com/isukkaw) · Keybase [@sukka](https://keybase.io/sukka)
