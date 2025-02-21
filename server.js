const express = require("express");
const app = express();
const PORT = 8000;

// src ディレクトリを静的ファイルとして提供
app.use(express.static("src"));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
