# 分離器械臨床溝通演練

根據「20260118斷針_劇本_講義V1」整理的臨床溝通指引 Web App。


## 存取密碼設定

此工具使用前端密碼門檻作為基本存取控制。真正的密碼 hash 不放進 Git，請建立 `config.local.js`：

```javascript
window.BROKEN_FILE_TRAINING_CONFIG = {
  passwordHash: "你的 SHA-256 密碼雜湊"
};
```

可用 PowerShell 產生 SHA-256 hash：

```powershell
$password = Read-Host "Password"
$bytes = [Text.Encoding]::UTF8.GetBytes($password)
$hash = [Security.Cryptography.SHA256]::Create().ComputeHash($bytes)
[BitConverter]::ToString($hash).Replace("-", "").ToLower()
```

`config.local.js` 已被 `.gitignore` 排除。若要部署到正式網站，應由部署環境提供這個設定檔；前端密碼門檻不能取代伺服器端授權。

## 使用方式

直接以瀏覽器開啟 `index.html` 即可，不需安裝套件或啟動伺服器。

## 目前功能

- 五種臨床溝通情境的逐步處理流程
- 詳細醫病對話與病人追問
- 每一步的行動清單、建議重點與禁忌說法
- 病人常見問題快速回覆
- 病歷紀錄模板
- 全文搜尋、單句複製及離場檢核

## 教學定位

本工具用於課堂教學與臨床溝通參考，不取代個案診斷、法律意見、醫療機構政策或現行專業規範。
