# eslint-config

## Install

```
npm install -D throskam/eslint-config @rushstack/eslint-patch
```

## Usage

```
// eslintrc.cjs
/* eslint-env node */
// https://www.npmjs.com/package/@rushstack/eslint-patch
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: [
    '@throskam'
  ]
}
```