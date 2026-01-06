<h1>📘 JavaScript Homework 10 — Asynchronous JavaScript & Promises</h1>

<p>
This repository contains a complete implementation of <b>Homework 10</b>, focused on
asynchronous JavaScript, timers, Promises, and working with third-party libraries in a
modern Vite-based project.
</p>

<hr />

<h2>🚀 Overview</h2>

<p>
JavaScript course is now two-thirds complete — great job! 💪  
In Module 10, the focus shifts to understanding how JavaScript handles time, asynchronous
operations, and Promise-based workflows.
</p>

<p>This homework reinforces your understanding of:</p>

<ul>
  <li>The difference between synchronous and asynchronous code</li>
  <li>Using timers (<code>setTimeout</code>, <code>setInterval</code>)</li>
  <li>What Promises are and how they work</li>
  <li>Promise states and lifecycle</li>
  <li>Handling fulfilled and rejected Promises</li>
  <li>Working with external libraries via NPM</li>
</ul>

<p>
It’s time to put theory into practice by building a countdown timer and a Promise generator
with notifications.
</p>

<hr />

<h2>📂 Project Structure</h2>

<pre>
goit-js-hw-10/
├─ src/
│  ├─ js/
│  │  ├─ 01-timer.js
│  │  └─ 02-snackbar.js
│  ├─ pages/
│  │  ├─ 01-timer.html
│  │  └─ 02-snackbar.html
│  └─ styles.css
├─ public/
├─ dist/
├─ index.html
├─ package.json
├─ vite.config.js
└─ README.md
</pre>

<p>
The project is built using <b>Vite</b> with ES Modules and follows a clean, modular structure.
</p>

<hr />

<h2>🧩 Task 1 — Countdown Timer</h2>

<p>
Implemented in <code>01-timer.html</code> and <code>01-timer.js</code>.
</p>

<p>
The goal of this task is to create a countdown timer that counts down to a user-selected
future date.
</p>

<h3>Key Features</h3>

<ul>
  <li>Date and time selection using <b>flatpickr</b></li>
  <li>Validation to prevent selecting past dates</li>
  <li>Start button disabled until a valid future date is selected</li>
  <li>Countdown updates every second</li>
  <li>Timer stops automatically when time reaches zero</li>
</ul>

<h3>Libraries Used</h3>

<pre>
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
</pre>

<h3>Timer Logic</h3>

<ul>
  <li>User selects a date using flatpickr</li>
  <li>If the date is in the past, a notification is shown</li>
  <li>If the date is valid, the Start button becomes active</li>
  <li>On Start, the remaining time is calculated every second</li>
  <li>Time is displayed in <code>DD:HH:MM:SS</code> format</li>
  <li>Values are formatted with leading zeros</li>
</ul>

<h3>Mentor Checklist — Task 1</h3>

<ul>
  <li>flatpickr library is correctly connected</li>
  <li>iziToast is used instead of <code>alert()</code></li>
  <li>Start button is disabled on page load</li>
  <li>Past dates are rejected with a notification</li>
  <li>Future dates enable the Start button</li>
  <li>Timer updates every second</li>
  <li>Timer stops at <code>00:00:00:00</code></li>
  <li>Time values are properly formatted</li>
</ul>

<hr />

<h2>🧩 Task 2 — Promise Generator</h2>

<p>
Implemented in <code>02-snackbar.html</code> and <code>02-snackbar.js</code>.
</p>

<p>
This task focuses on creating Promises dynamically based on user input and handling their
resolution or rejection with notifications.
</p>

<h3>Form Functionality</h3>

<ul>
  <li>User enters a delay value in milliseconds</li>
  <li>User selects Promise state: <b>fulfilled</b> or <b>rejected</b></li>
  <li>On submit, a Promise is created</li>
  <li>The Promise resolves or rejects after the specified delay</li>
</ul>

<h3>Promise Handling</h3>

<ul>
  <li>If fulfilled: success notification is shown</li>
  <li>If rejected: error notification is shown</li>
  <li>Notification text includes the delay value</li>
</ul>

<h3>Notification Messages</h3>

<pre>
✅ Fulfilled promise in ${delay}ms
❌ Rejected promise in ${delay}ms
</pre>

<h3>Libraries Used</h3>

<pre>
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
</pre>

<h3>Mentor Checklist — Task 2</h3>

<ul>
  <li>iziToast library is correctly connected</li>
  <li>Promise is created on form submission</li>
  <li>Delay value is taken from user input</li>
  <li>Promise state depends on selected radio button</li>
  <li>Notification appears after the specified delay</li>
  <li>Message content matches the task requirements</li>
</ul>

<hr />

<h2>📌 Final Notes</h2>

<p>
This homework demonstrates a solid understanding of asynchronous JavaScript concepts,
including timers, Promises, and real-world async workflows.
</p>

<p>
The project follows modern best practices using:
</p>

<ul>
  <li>ES Modules</li>
  <li>Vite bundler</li>
  <li>NPM package management</li>
  <li>Third-party libraries</li>
  <li>Clean and readable code structure</li>
</ul>

<hr />

<h2>🔗 Links</h2>

<ul>
  <li>
    <b>GitHub Repository:</b>
    <a href="https://github.com/kutluhangil/goit-js-hw-10" target="_blank">
      https://github.com/kutluhangil/goit-js-hw-10
    </a>
  </li>
  <li>
    <b>Live Demo (GitHub Pages):</b>
    <a href="https://kutluhangil.github.io/goit-js-hw-10/" target="_blank">
      https://kutluhangil.github.io/goit-js-hw-10/
    </a>
  </li>
</ul>
