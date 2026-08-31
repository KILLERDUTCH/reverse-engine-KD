const express = require('express');
const multer = require('multer');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.static(__dirname));
app.use(express.json());

// تنظیم آپلود فایل
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => cb(null, file.originalname)
});
const upload = multer({ storage });

// اطمینان از وجود پوشه uploads
if (!fs.existsSync('./uploads')) fs.mkdirSync('./uploads');

// اندپوینت آپلود و دی‌کامپایل
app.post('/upload', upload.single('file'), (req, res) => {
    const filePath = path.join('./uploads', req.file.filename);
    
    // اجرای objdump برای دی‌کامپایل
    exec(`objdump -d ${filePath}`, (error, stdout) => {
        if (error) {
            return res.json({ error: '❌ دی‌کامپایل ناموفق. objdump نصب نیست؟' });
        }
        res.json({ asm: stdout.slice(0, 5000) }); // محدود به ۵۰۰۰ کاراکتر
    });
});

// اندپوینت تحلیل با هوش مصنوعی (Ollama)
app.post('/analyze', async (req, res) => {
    const { code } = req.body;
    if (!code) return res.json({ error: 'کدی برای تحلیل نیست' });

    try {
        const response = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'mistral:7b',
                prompt: `کد اسمبلی زیر رو تحلیل کن و بگو چه کاری انجام میده:\n${code.slice(0, 1500)}`,
                stream: false
            })
        });
        const data = await response.json();
        res.json({ result: data.response || 'خطا در دریافت پاسخ' });
    } catch {
        res.json({ error: '⚠️ هوش مصنوعی در دسترس نیست. اول Ollama رو اجرا کن.' });
    }
});

app.listen(PORT, () => {
    console.log(`🔥 KREV Server running on http://localhost:${PORT}`);
});
