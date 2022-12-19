import { defineConfig, Options } from 'tsup';

export const setupTsupConfig = ({
  entry = ['src/index.ts'],
  external = [],
  noExternal = [],
  platform = 'node',
  target = 'es2022',
  skipNodeModulesBundle = true,
  clean = true,
  minify = false,
  splitting = false,
  keepNames = true,
  dts = true,
  sourcemap = true,
  esbuildPlugins = [],
  outDir = 'build'
}: Options) => {
  return defineConfig({
    entry,
    external,
    noExternal,
    platform,
    target,
    skipNodeModulesBundle,
    clean,
    minify,
    splitting,
    keepNames,
    dts,
    sourcemap,
    esbuildPlugins,
    outDir
  });
}
