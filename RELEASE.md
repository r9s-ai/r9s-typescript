# Release

本仓库使用 GitHub Actions 在 `v*` tag 上自动发布到 npm。

## Prerequisites

- npm 包名：`r9s`
- 仓库 Secret：`NPM_TOKEN`（拥有该包的 publish 权限）

## Steps

1. 更新版本（会自动创建 git tag）：
   - `npm version patch|minor|major`
2. 推送代码与 tag：
   - `git push --follow-tags`

发布工作流：`.github/workflows/release.yml`
