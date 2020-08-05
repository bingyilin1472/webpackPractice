// 要用path module轉換相對位址成絕對位址
const path = require('path')
module.exports = {
    // entry應該是設置js的進入點entry point(由這個index.js開始)
    entry: './src/index.js',
    output: {
        // 產生的bundled的結果檔案名稱
        filename: "bundle.js",
        // 放置位置，這邊新增一個dist directory
        // (vue專案也會將build結果放在dist中，表示他是以webpack實踐)
        // 這個path會要求absolute path，用./dist會報錯
        path: path.resolve(__dirname, './dist')
    },
    // 這邊沒設置mode，但這個其實有某些應用是必須設置的(可以再去研究)
    mode: "none"
}
