const { execSync } = require('child_process')

const gitStatus = execSync('git status --porcelain || true')
  .toString()
  .trim()
  .split('\n')

const subjectComplete = gitStatus
  .find((r) => ~r.indexOf('M  packages/components'))
  ?.replace(/\//g, '%%')
  ?.match(/packages%%components%%((\w|-)*)/)?.[1]

/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
    "header-max-length": () => [0, "always", 72]
  },
  prompt: {
    alias: { fd: "docs: fix typos" },
    messages: {
      type: "选择你的提交类型 | Select the type of change that you're committing:",
      scope: "选择一个模块范围(可选) | Denote the SCOPE of this change (optional):",
      customScope: "自定义修改模块名 | Denote the SCOPE of this change:",
      subject: "简短说明 | Write a SHORT, IMPERATIVE tense description of the change:\n",
      body: '详细说明(可选) 使用"|"可换行 | Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking: '非兼容性说明(可选) 使用"|"可换行 | List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      footerPrefixsSelect: "选择关联 Issue 前缀 | Select the ISSUES type of changeList by this change (optional):",
      customFooterPrefixs: "输入自定义 Issue 前缀 | Input ISSUES prefix:",
      footer: "列举关联issue (可选) 例如: #31, #34 | List any ISSUES by this change. E.g.: #31, #34:\n",
      confirmCommit: "是否提交或修改 Commit | Are you sure you want to proceed with the commit above?"
    },
    types: [
      { value: "feat", name: "feat:     ✨  新增功能 | A new feature", emoji: ":sparkles:" },
      { value: "fix", name: "fix:      🐛  修复缺陷 | A bug fix", emoji: ":bug:" },
      { value: "docs", name: "docs:     📝  文档更新 | Documentation only changes", emoji: ":memo:" },
      { value: "style", name: "style:    💄  代码格式 | Changes that do not affect the meaning of the code", emoji: ":lipstick:" },
      { value: "refactor", name: "refactor: ♻️  代码重构 | A code change that neither fixes a bug nor adds a feature", emoji: ":recycle:" },
      { value: "perf", name: "perf:     ⚡️  性能提升 | A code change that improves performance", emoji: ":zap:" },
      { value: "test", name: "test:     ✅  测试相关 | Adding missing tests or correcting existing tests", emoji: ":white_check_mark:" },
      { value: "build", name: "build:    📦️   构建相关 | Changes that affect the build system or external dependencies", emoji: ":package:" },
      { value: "ci", name: "ci:       🎡  持续集成 | Changes to our CI configuration files and scripts", emoji: ":ferris_wheel:" },
      { value: "chore", name: "chore:    🔨  其他修改 | Other changes that don't modify src or test files", emoji: ":hammer:" },
      { value: "revert", name: "revert:   ⏪️  回退代码 | Reverts a previous commit", emoji: ":rewind:" }
    ],
    useEmoji: true,
    emojiAlign: "center",
    themeColorCode: "",
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: "bottom",
    customScopesAlias: "custom",
    emptyScopesAlias: "empty",
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: "|",
    skipQuestions: [],
    issuePrefixs: [{ value: "closed", name: "closed:   ISSUES has been processed" }],
    customIssuePrefixsAlign: "top",
    emptyIssuePrefixsAlias: "skip",
    customIssuePrefixsAlias: "custom",
    allowCustomIssuePrefixs: true,
    allowEmptyIssuePrefixs: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: subjectComplete && `[${subjectComplete}] `,
  }
}