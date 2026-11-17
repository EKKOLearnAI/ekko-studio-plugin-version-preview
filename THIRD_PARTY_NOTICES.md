# License scope and third-party notices

## Plugin and SDK implementation — MIT

The independent plugin implementation, tests, contracts and project-authored
documentation are licensed under the root [MIT License](LICENSE).
The bundled Studio SDK implementation, types, harness and templates are also MIT,
under [sdk/LICENSE](sdk/LICENSE). This SDK-only grant is authorized by EKKOLearnAI;
it does not change the license of the Studio host/core or downloaded applications.

## Retained third-party guides — Business Source License 1.1

The following four files (two guide texts, each shipped twice) retain their original
Business Source License 1.1 and are excluded from the MIT grants:

- `docs/STUDIO_CTX.md`
- `docs/STUDIO_RETURNS.md`
- `sdk/docs/STUDIO_CTX.md`
- `sdk/docs/STUDIO_RETURNS.md`

They include the contributions of widechaos (十方空烬 · Ember / Renchao Wu) in
[Studio PR #3827](https://github.com/EKKOLearnAI/ekko-studio/pull/3827), source commit
`ed442c0908e9cbde2971bbbe411a6a1a9e7b45f8`. No assignment or MIT relicensing right
is asserted for those contributions. Both complete guide texts are retained under
BSL, including any updates, rather than relabeling third-party text.

Their source is EKKOLearnAI/ekko-studio at baseline
`74ce94b42fe976fd4b0c2d896658d9ee5bde36b7`, with the public plugin-interface updates
bundled with this plugin. [sdk/NOTICE](sdk/NOTICE) and [docs/SDK-NOTICE](docs/SDK-NOTICE)
identify the scope and attribution. The original upstream license, with all its
parameters and statements, is reproduced verbatim in
[sdk/LICENSES/Studio-SDK-LICENSE.txt](sdk/LICENSES/Studio-SDK-LICENSE.txt).
The complete BSL 1.1 terms, including the MariaDB license-text copyright notice,
are in [sdk/LICENSES/BUSL-1.1.txt](sdk/LICENSES/BUSL-1.1.txt).
The same license texts are included beside the copied guides in `docs/LICENSES/`.

BSL permits copying and redistribution subject to retaining its terms and notices.
The upstream non-commercial Additional Use Grant, Change Date 2029-05-10 and
Apache-2.0 Change License remain applicable to these guides. This repository does
not grant blanket MIT or commercial-use rights over the retained BSL material.
Keep the notices and complete license texts with redistributed copies.

## npm dependencies

Dependency code is installed separately through npm and retains the license and
copyright notices distributed with each upstream package. The locked production
dependencies are:

| Package | Version | Declared license |
| --- | --- | --- |
| tar | 7.5.23 | BlueOak-1.0.0 |
| @isaacs/fs-minipass | 4.0.1 | ISC |
| chownr | 3.0.0 | BlueOak-1.0.0 |
| minipass | 7.1.3 | BlueOak-1.0.0 |
| minizlib | 3.1.0 | MIT |
| yallist | 5.0.0 | BlueOak-1.0.0 |

Development dependencies likewise retain their package-specific licenses. No
third-party dependency is relicensed by this repository's MIT grant.

## History and package metadata

Existing commits are preserved without rewriting their licenses or authorship.
The MIT grants above apply to the current distribution; historical snapshots
retain the notices included with them. Package metadata uses `MIT AND BUSL-1.1`
to disclose both licenses present in the distributed code/documentation package;
this is not a claim that the entire tree or the Studio core is MIT.
