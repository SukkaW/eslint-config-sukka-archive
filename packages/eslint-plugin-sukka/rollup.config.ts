import { swc, defineRollupSwcOption } from 'rollup-plugin-swc3';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import dts = require('rollup-plugin-dts');

import { defineConfig } from 'rollup';

export default defineConfig([{
  input: 'src/index.ts',
  output: [{
    format: 'commonjs',
    file: 'dist/index.cjs',
    sourcemap: false
  }],
  plugins: [
    nodeResolve(),
    swc(defineRollupSwcOption({
      jsc: {
        target: 'es2020'
      },
      tsconfig: './tsconfig.json'
    }))
  ]
}, {
  input: 'src/index.ts',
  output: [{ file: 'dist/index.d.ts', format: 'es' }],
  plugins: [dts.default({})]
}]);
