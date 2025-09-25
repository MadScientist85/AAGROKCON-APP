#!/bin/bash
cd ~/grokcon-empire
git add . -A
git commit -m "GROKCON Standalone: Next.js 15.5.4, shadcn, xAI analytics dashboard" --no-verify || true
git remote set-url origin https://github.com/MadScientist85/grokcon-empire.git || git remote add origin https://github.com/MadScientist85/grokcon-empire.git
git push -f origin main -q
git log --oneline -1 > /dev/null
