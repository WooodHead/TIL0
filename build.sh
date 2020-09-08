#!/bin/bash
echo -------------------------------------------------------
echo 🧱 Start build

echo -------------------------------------------------------
echo 📝 Get TIL contents from notion
python3 main.py

echo -------------------------------------------------------
echo 💄 Apply prettier
npx prettier --write docs/**/*.md
npx prettier --write docs/*.md

echo ✅ Successfully formatted
