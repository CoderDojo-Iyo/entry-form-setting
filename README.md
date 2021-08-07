# entry-form-setting
CoderDojo伊予参加フォームのスクリプト管理
## 定員の変更

```
function getLimit() {
  return 10; //ここに人数の上限値を設定
}
```

定員を変更する場合はGoogleフォームのスクリプトエディタで上の部分を編集してください。

その際に、満席で受付停止になっている場合はフォームの設定で受付可能に切り替えてください。

## リビジョン管理
`Google Apps Script GitHub Assistant`
というChrome Extensionを使ってGoogle Apps Scriptのリビジョン管理をしています。

## Trigger 1
- Deployment: Head
- Event: From form - On form submit
- Function: setLimit

## Trigger 2
- Deployment: Head
- Event: From form - On open
- Function: setDescription
