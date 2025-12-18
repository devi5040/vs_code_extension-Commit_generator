# 🤖 Git Auto Commit Generator

A smart, free, and customizable **AI-powered commit message generator** for VS Code.  
Just click the **robot icon** and instantly generate meaningful commit messages for your **staged changes** — no typing, no guesswork.

---

## ✨ Why Git Auto Commit Generator?

GitHub Copilot does offer commit message generation — **but it’s limited in the free tier**.

This extension solves that problem by using **Google Gemini AI**, giving you:

- ✅ **Free commit message generation**
- ✅ **Customizable prompts**
- ✅ **Clear, meaningful, and professional commits**
- ✅ **One-click usage from the VS Code UI**

Perfect for developers who want clean commit history without paying for premium tools.

---

## 🚀 Features

### 🤖 One-Click Commit Generation

A **robot icon** appears in your VS Code UI.  
Click it → AI analyzes your **staged changes** → generates a commit message instantly.

---

### 🧠 AI-Powered with Gemini

Uses **Google Gemini** instead of Copilot:

- Free to use
- Fast
- Custom prompt support

---

### 📝 Smart Commit Messages

Automatically generates:

- Clear summaries
- Conventional commit-style messages
- Context-aware descriptions based on code changes

Example:

```bash
feat(auth): add JWT-based authentication middleware
```

---

## 📦 System Requirements

Before installing the extension, make sure your system meets the following requirements:

- Git installed and available in PATH
- Node.js (v18 or later recommended)
- npm installed
- Visual Studio Code
- A valid Google Gemini API key
- A Git repository initialized (git init)

---

## 🛠 Installation Steps (From Git Clone)

Follow these steps to install the extension manually from source.

### 1. Clone the Repository

git clone https://github.com/your-username/git-auto-commit-generator.git
cd git-auto-commit-generator

### 2. Install Dependencies

npm install

### 3. Add Your Gemini API Key

Open the file:
src/extension.ts

Locate the following line:
const apiKey = "Enter your API Key";

Replace it with your actual Google Gemini API key:
const apiKey = "YOUR_GEMINI_API_KEY";

Save the file.

### 4. Compile the Extension

npm run compile

### 5. Generate the VSIX Package

If vsce is not installed globally, install it first:
npm install -g vsce

Generate the VSIX file:
vsce package

This will create a file similar to:
git-auto-commit-generator-1.0.0.vsix

### 6. Install the Extension in VS Code

1. Open Visual Studio Code
2. Press Ctrl + Shift + P
3. Select Extensions: Install from VSIX
4. Choose the generated .vsix file
5. Restart VS Code if prompted

---

## 🧪 How to Use

1. Make code changes
2. Stage your files:
   git add .
3. Click the 🤖 Robot Icon or open Command Palette
4. Run Generate Commit Message
5. Review the generated commit message
6. Commit instantly 🚀

---

## 🐞 Known Issues

- Works only when files are staged
- Large diffs may take slightly longer to process
- Requires active internet connection for Gemini API

---

## 📝 Release Notes

### 1.0.0

- 🎉 Initial release
- 🤖 Robot icon integration
- 🧠 Gemini AI-based commit generation
- ⚙️ Custom prompt and style support

---

## 📚 Following Extension Guidelines

This extension follows VS Code best practices.
https://code.visualstudio.com/api/references/extension-guidelines

---

❤️ Built for developers who care about clean Git history
