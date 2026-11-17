# MIT license scope and attribution

## Repository contents

The plugin implementation, SDK code and types, harness, templates, contracts,
tests and all included guides are distributed under the root [MIT License](LICENSE).
The SDK copy also carries [sdk/LICENSE](sdk/LICENSE).
This expressly includes these four files:

- `docs/STUDIO_CTX.md`
- `docs/STUDIO_RETURNS.md`
- `sdk/docs/STUDIO_CTX.md`
- `sdk/docs/STUDIO_RETURNS.md`

Their technical contents have not been removed or rewritten to obtain a different
license. The added SPDX headers identify the license selected for the current
copies by maintainer EKKOLearnAI.

## Source and contributor credit

The SDK and guides originate from [EKKOLearnAI/ekko-studio](https://github.com/EKKOLearnAI/ekko-studio)
at baseline `74ce94b42fe976fd4b0c2d896658d9ee5bde36b7`, with this plugin's public-interface
updates. The guide contributions by widechaos (十方空烬 · Ember / Renchao Wu) are
credited to [Studio PR #3827](https://github.com/EKKOLearnAI/ekko-studio/pull/3827),
source commit `ed442c0908e9cbde2971bbbe411a6a1a9e7b45f8`.

Copyright and attribution are retained. This notice does not claim a copyright
assignment, nor that GitHub's default contribution terms transfer copyright.
See [sdk/NOTICE](sdk/NOTICE) and the matching [docs/SDK-NOTICE](docs/SDK-NOTICE).
The current repository license is MIT; the former documentation exception is
superseded for this distribution. Earlier snapshots remain in Git history with
the notices they contained. No history rewriting was performed.

## External components

This license selection does not apply to the Studio host/core or its complete
upstream repository, applications downloaded for preview, or packages installed
separately through npm. Their original licenses and notices continue to apply.
The locked production dependencies are not vendored into this repository:

| Package | Version | Declared license |
| --- | --- | --- |
| tar | 7.5.23 | BlueOak-1.0.0 |
| @isaacs/fs-minipass | 4.0.1 | ISC |
| chownr | 3.0.0 | BlueOak-1.0.0 |
| minipass | 7.1.3 | BlueOak-1.0.0 |
| minizlib | 3.1.0 | MIT |
| yallist | 5.0.0 | BlueOak-1.0.0 |

Development dependencies retain their package-specific licenses as well. Preserve
their upstream license and copyright notices when distributing those packages.

## 版本预览客户端

客户端界面迁移自 Ekko Studio 的 GithubPreviewSettings.vue，由插件独立维护和打包。随包 Vue、Naive UI 及其客户端依赖的许可与署名见 THIRD_PARTY_CLIENT_NOTICES.txt。

assets/logo.png 是 EKKOLearnAI 提供的 Ekko Studio 品牌 Logo 的缩小副本，用于官方版本预览插件的头像与入口；品牌标识权利归原权利人。
