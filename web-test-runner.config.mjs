import { fileURLToPath } from 'node:url'
import process from 'node:process'
import { fromRollup } from '@web/dev-server-rollup'
import rollupReplace from '@rollup/plugin-replace'
import rollupPostcss from 'rollup-plugin-postcss'
import { esbuildPlugin } from '@web/dev-server-esbuild'

const tsConfigFileURL = fileURLToPath(new URL('./tsconfig.json', import.meta.url))

const replace = fromRollup(rollupReplace)
const postcss = fromRollup(rollupPostcss)

const filteredLogs = ['Lit is in dev mode']

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  nodeResolve: true,
  puppeteer: true,
  debug: false,
  files: [
    'components/**/__tests__/*.test.js',
    'components/**/__tests__/*.test.ts',
  ],
  coverage: true,
  coverageConfig: {
    include: ['components/**/*.tsx'],
  },
  filterBrowserLogs(log) {
    for (const arg of log.args) {
      if (
        typeof arg === 'string'
        && filteredLogs.some(l => arg.includes(l))
      ) {
        return false
      }
    }
    return true
  },
  mimeTypes: {
    'components/**/*.less': 'js',
    'components/**/*.css': 'js',
  },
  plugins: [
    postcss(
      {
        include: [
          'components/**/*.less',
          'components/**/*.css',
        ],
        modules: false,
      },
    ),
    esbuildPlugin({
      ts: true,
      tsconfig: tsConfigFileURL,
      tsx: true,
      json: true,
      define: {
        'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`,
      },
    }),
    replace({
      'preventAssignment': true,
      'process.env.NODE_ENV': '"development"',
    }),
  ],
})
