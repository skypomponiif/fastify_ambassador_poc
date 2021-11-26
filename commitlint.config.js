module.exports = {
    extends: ['@commitlint/config-conventional'],
    ignores: [(message) => /^Bumps \[.+]\(.+\) from .+ to .+\.$/m.test(message)],
    rules: {
      'type-enum': [
        2,
        'always',
        ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert', 'merge', 'wip'],
      ],
      'scope-case': [
        2,
        'always',
        ['lower-case', 'upper-case', 'sentence-case', 'start-case', 'pascal-case', 'upper-case'],
      ],
    },
  };