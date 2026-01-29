// Interactive Hello using prompt-sync

let prompt;
try {
  prompt = require('prompt-sync')({ sigint: true });
} catch (err) {
  console.error('Missing dependency: prompt-sync');
  console.error('Install it by running: npm install prompt-sync');
  process.exit(1);
}

const name = prompt('What is your name? ');
const mood = prompt('How are you today? ');

const safeName = (name || '').trim();
const safeMood = (mood || '').trim();

console.log(`Hello${safeName ? ', ' + safeName : ''}!`);
if (safeMood) {
  console.log(`Good to know you\'re ${safeMood}.`);
}