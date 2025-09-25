#!/bin/bash
cd ~/grokcon-empire
export PATH=$PATH:/data/data/com.termux/files/usr/lib/node_modules/.bin
npm install -g vercel@48.1.2 --silent
vercel build --yes
vercel deploy --prebuilt --prod --yes > deploy.log
grep "https://" deploy.log | tail -1
