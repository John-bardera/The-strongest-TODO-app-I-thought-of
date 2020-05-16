# The strongest TODO app I thought of.
## 初期設定
- `npm install -g ionic npx`
- `npm ci`

`npm install`は原則使わないように

これで動かんかったら教えてくれ。

## サーバ起動
- `npm run ionic:serve:${environment}`

environmentはdev, stg, prodの3種類。

まぁ、今はサーバとか存在しないのでどれ選んでも一緒。

## 実機ビルド
- `npm run ionic:build:${environment}`
- `npx cap copy`
- `npx cap open ios(またはandroid)`

初回だけ下を実行する必要があるので注意。

### 初回時
- `npx cap add ios(またはandroid)`
- `npx cap sync`
- `npx cap copy`

## その他共有事項
適宜追加して行く。

### gitの使い方
適宜調べて。基本はここにまとめてある。

https://github.com/John-bardera/nitac-cafeterinyan/blob/master/git_how_to_use.md

### branch作成の決まり
issue番号が6番だったら、`git branch issue/6`というようにする
