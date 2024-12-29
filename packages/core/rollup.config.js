import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require('./package.json');

const commonsPlugins = [
    peerDepsExternal(),
    resolve(),
    commonjs(),
];

export default [{
    // esm build
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    ...commonsPlugins,
    typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist/esm'
    }),
  ],
  external: ['react', 'react-dom'],
},
{
    // CJS build
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      }
    ],
    plugins: [
        ...commonsPlugins,
        typescript({
            tsconfig: './tsconfig.json',
            declaration: false,
        }),
    ],
    external: ['react', 'react-dom'],
  }];
