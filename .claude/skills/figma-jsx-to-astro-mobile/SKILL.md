---
name: figma-jsx-to-astro-mobile
description: Figma MCPから取得済みのJSXファイルをAstroコンポーネントに変換する際のガイド。モバイル版のデザインが対象。ユーザーからこのスキルを使うように明示的に指示された場合に使用する。
---

# Figma JSX → Astro 変換ガイド(モバイル版)

Figma MCPから取得済みのJSX(React+Tailwind)ファイルをAstroコンポーネントに変換する際のガイド。

## 手順

1. 対象のJSXファイルのパスを把握する
   - 例: docs/figma/mobile/01-Header.jsx
2. 変換するAstroファイルの保存先を把握する
   - 例: src/components/
3. 変換するAstroファイルの名前はJSXファイルと同じにする
   - 例: src/components/01-Header.astro
4. 以下の実装ルールに従ってAstroファイルを実装する

## 実装ルール

### スクリーンショット

> [!important]  
> Figma MCPの`get_screenshot`の使用を全面的に禁止する。

### テキスト

デザインに含まれるテキストを改変せずにそのまま実装する。

### 画像

JSXファイルに記述されたURLの画像は使用しない。

代わりにプレースホルダーを使用する。

- `https://placehold.co/`のサービスを利用する
- デザインで指定された要素の横幅と高さに合わせてサイズを指定
- 背景色: `#c4defd`、前景色: `#ffffff`で固定
- テキストは入力しない（テキストが空だとサイズが表示される）

> [!important]  
> プレースホルダーを表示するだけで充分  
> 憶測でアイコンや図形などを再現しないこと  
> スクリーンショットも参考にしない(禁止なので不可能なはず)

### Webフォント

Google Fontsは`<head>`タグ内にリンクを追加する。`global.css`にimportしない。

### HTMLタグ

文書構造から適切なタグを推定して使用:

- `<main>`, `<header>`, `<footer>`, `<section>`
- `<nav>`, `<ul>`, `<li>`
- `<button>`, `<a>`

### テキストリンク

リンクと思われるテキストには`<a>`タグを適用。ホバー色が推定できる場合は`hover:color`と`transition-colors`を適用。

### ボタン

`<button>`タグを適用し、`cursor-pointer`を適用。

### 繰り返し要素

繰り返し要素は配列にまとめて`map`で適用。

### メタデータ属性

`data-name`, `data-node-id`は削除する。

## 最大横幅

モバイル版の最大幅は`max-w-120`（480px）、`mx-auto`で水平中央配置。

### ルート要素に背景がない要素の場合

ルート要素に`max-w-120 mx-auto`を追加。

```astro
<section class="[JSXからのスタイル] mx-auto max-w-120">
  <!-- コンテンツ -->
</section>
```

### 背景のある要素の場合

ルート要素の直下にdiv要素を追加。
そのdiv要素に`max-w-120 mx-auto`を追加。
そのdiv要素にルート要素が持っていた背景色以外のスタイルを移動。
ルート要素は背景色のみ設定。

```astro
<section class="bg-[#043873]">
  <div class="[ルート要素から背景色以外のスタイルを移動] mx-auto flex">
    <!-- コンテンツ -->
  </div>
</section>
```
