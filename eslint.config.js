import antfu from '@antfu/eslint-config'

export default antfu({
  // 自定义 ESLint 规则配置
  rules: {
    // 禁止使用分号
    'semi': ['error', 'never'],
    // 限制最大连续空行数为1，文件末尾不允许有空行
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
    // 强制使用单引号
    'quotes': ['error', 'single'],
    // 关闭禁止使用 require 导入的规则
    'ts/no-require-imports': 'off',
    // 关闭未使用变量的警告
    'unused-imports/no-unused-vars': 'off'
  },
  // 配置 ESLint 需要忽略的文件和目录
  ignores: [
    // 忽略 node_modules 目录
    'node_modules',
    // 忽略构建输出目录
    'dist',
    'build',
    '.docusaurus',
    // 忽略所有 JavaScript 和 TypeScript 文件
    '**/*.{js,ts,jsx,tsx}',
    // 但是不忽略 src 目录下的 JavaScript 和 TypeScript 文件
    '!src/**/*.{js,ts,jsx,tsx}',
    // 不忽略以下配置文件
    '!docusaurus.config.ts',
    '!sidebars.ts',
    '!tailwind.config.ts'
  ]
})