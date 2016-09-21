# Mint UI Contributing Guide

Hi! 首先感谢你使用 Mint UI。

Mint UI 是一套基于 Vue.js 的移动端组件库，它包含丰富的 CSS 和 JS 组件，能够满足日常的移动端开发需要。通过它，可以快速构建出风格统一的页面，提升开发效率。

Mint UI 的成长离不开大家的支持，如果你愿意为 Mint UI 贡献代码或提供建议，请阅读以下内容。

## Issue 规范
- issue 仅用于提交 Bug 或 Feature，其它内容可能会被直接关闭。

- 在提交 issue 之前，请搜索相关内容是否已被提出。

- 请说明 Mint UI 的版本号，并提供操作系统和浏览器信息。推荐使用 [JSFiddle](https://jsfiddle.net/) 生成在线 demo，这能够更直观地重现问题。

## Pull Request 规范
- 请先 fork 一份到自己的项目下，不要直接在仓库下建分支。

- **不要提交** `lib` 里面打包的文件。

- 提交 PR 前请 rebase，确保 commit 记录的整洁。

- 如果是修复 bug，请在 PR 中给出描述信息。

- 合并代码需要两名维护人员参与：一人进行 review 后 approve，另一人再次 review，通过后即可合并。

## 代码规范
遵循饿了么前端的 [ESLint](https://github.com/ElemeFE/eslint-config-elemefe) 即可
