# OVERTYPE (working title)

A typing-survival game. You are surrounded, words close in from every side, you type to destroy them, you level up, you survive an escalating swarm. Heavily inspired by Glyphica: Typing Survival, with one big spin of its own.

## The spin: Flow and Overdrive
Typing fast and clean fills a Flow meter (the ring around your core). Fill it and you drop into Overdrive: the swarm slows to a crawl, score doubles, and the screen lights up. Sustained speed is the power source, so the better you type, the stronger you get. That is the whole point.

## How it plays
- Start typing and you lock onto a matching word. Targeting is flexible: the lock follows your prefix, so typing "cou" slides off "cow" onto "couch". No clicking.
- No two enemies on screen ever share a word, so your prefix is never ambiguous.
- Finish the word to destroy that enemy. Finish it fast for a FAST bonus (extra score and Flow).
- A wrong key is a typo: it breaks your combo and bleeds Flow (bank free typos with the Spellcheck upgrade).
- Enemies that reach the center cost you a life. Out of lives, the run ends.
- Every level, pick one of three upgrades.

## Controls
- Letter keys: type.
- On level up, type the short word shown on a card to choose that upgrade.
- Any letter: start, or run it back after a loss.

## Tech
Single self-contained `index.html`, vanilla HTML5 Canvas, no build, no dependencies. Open the file directly or serve the folder.

## Status
First playable: core typing loop, Flow/Overdrive, combo and WPM, escalating waves, level-up upgrades, title and game-over. Built 2026-06-18.
