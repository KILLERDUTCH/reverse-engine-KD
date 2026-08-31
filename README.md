# reverse-engine-KD
# 🔥 reverse engine - ابزار مهندسی معکوس Killerdutch

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-brightgreen" alt="version">
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="license">
  <img src="https://img.shields.io/badge/node.js-18.x-green" alt="node">
  <img src="https://img.shields.io/badge/status-active-success" alt="status">
  <img src="https://img.shields.io/badge/made%20with-%E2%9D%A4%EF%B8%8F-red" alt="made with love">
</p>

<p align="center">
  <b>KREV</b> (Killer Reverse Engineering) یک ابزار قدرتمند و سبک برای <b>مهندسی معکوس</b> فایل‌های باینری و تحلیل خودکار آنها با <b>هوش مصنوعی</b> است.
</p>

<p align="center">
  این ابزار توسط <b>Killerdutch</b> توسعه داده شده است.
</p>

---

## ✨ قابلیت‌ها

- 🔍 **دی‌کامپایل خودکار** فایل‌های باینری (ELF, PE, Mach-O)
- 🧠 **تحلیل هوشمند** با مدل Mistral 7B (از طریق Ollama)
- 🌐 **رابط کاربری تحت وب** - نیازی به ترمینال نداره!
- ⚡ **سرعت بالا** با سرور Node.js
- 🎨 **رابط کاربری زیبا و مدرن** با تم دارک
- 📁 **فقط ۲ فایل** - فوق‌العاده ساده و سبک

---

## 🖼️ پیش‌نمایش

<p align="center">
  <img src="https://via.placeholder.com/800x400/1a1a1a/00ff88?text=KREV+Interface" alt="preview" width="80%">
</p>

> ✨ رابط کاربری زیبا با تم دارک و طراحی مدرن

---

## 🚀 نصب و اجرا

### پیش‌نیازها

- [Node.js](https://nodejs.org/) (نسخه 18 یا بالاتر)
- [Ollama](https://ollama.com/) (برای هوش مصنوعی - اختیاری)
- [objdump](https://sourceware.org/binutils/) (برای دی‌کامپایل)

### مراحل نصب

```bash
# ۱- کلون کردن پروژه
git clone https://github.com/KILLERDUTCH/krev.git
cd krev

# ۲- نصب وابستگی‌ها
npm install

# ۳- نصب Ollama و دانلود مدل (اختیاری - برای هوش مصنوعی)
curl -fsSL https://ollama.com/install.sh | sh
ollama pull mistral:7b

# ۴- اجرای سرور
node server.js
