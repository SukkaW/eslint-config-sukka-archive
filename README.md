# eslint-config-sukka

[![Version](https://img.shields.io/npm/v/eslint-config-sukka.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-sukka)
[![License](https://img.shields.io/npm/l/eslint-config-sukka.svg?style=flat-square)](./LICENSE)

ESLint config for [Sukka](https://skk.moe).

## Installation

```bash
$ npm i -D eslint-config-sukka
```

## Usage

Add following snippets to your ESLint configuration files.

### Node.js Project

```bash
$ npm i -D eslint-plugin-node eslint-plugin-import@npm:eslint-plugin-i@latest
```

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

```bash
$ npm i -D typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import@npm:eslint-plugin-i@latest eslint-import-resolver-typescript
```

```json
{
  "extends": "sukka/typescript"
}
```

### React Project

```bash
$ npm i -D eslint-plugin-react-hooks eslint-plugin-react eslint-plugin-jsx-a11y
```

```json
{
  "extends": "sukka/react"
}
```

## Maintainer

**eslint-config-sukka** © [Sukka](https://github.com/SukkaW), Released under the [MIT](./LICENSE) License.

> [Personal Website](https://skk.moe) · [Blog](https://blog.skk.moe) · GitHub [@SukkaW](https://github.com/SukkaW) · Telegram Channel [@SukkaChannel](https://t.me/SukkaChannel) · Twitter [@isukkaw](https://twitter.com/isukkaw) · Keybase [@sukka](https://keybase.io/sukka)
