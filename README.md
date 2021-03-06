# Learning Card

Simple online learning cards for C# exam preparation. Can be used with any other theme. All questions are located in array `QUESTIONS` in `question.js` file.

## Usage

### Online

Working version can be found on https://burk.in/learn/

Swipe left/right for next/previous question and click or tap on card to flip it and see correct answer.

On the main page select topic and start learning.

#### Details

You can start learning without setup screen.

To specify exact topic of learning, use `t` in URL query and specify your topic. `t` stands for `topics`. For example `https://burk.in/learn/learn.html?t=threading`.

Also it is possible to indicate several comma-separated topics. For example
`https://burk.in/learn/learn.html?t=debug,security`.

To exclude specific topics from collection, use `e` in URL query and specify one or several comma-separated topics. `e` stands for `exclude` For example `https://burk.in/learn/learn.html?e=other,serialization`.

At this moment following topics are available:
1. serialization
2. threading
3. assemblies
4. security
5. debug
4. other

### Your own version

Just clone this project, replace questions with your own and it is ready to use.

## Contents

This project is written with HTML, CSS and JavaScript.

## Contributions

All contributions are limited but possible. If you have want to contribute, please, follow the same code style and make a Pull Request.