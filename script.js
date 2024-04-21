// function highlightWords() {
//   const elements = document.querySelectorAll('p, span');

//   for (const element of elements) {
//     const text = element.textContent;
//     let highlightedText = '';
//     let inWord = false;

//     for (let i = 0; i < text.length; i++) {
//       const char = text[i];
//       const isLetter = char.match(/[a-zA-Z]/);

//       if (isLetter) {
//         if (!inWord) {
//           highlightedText +=
//             `<span style="color: #` +
//             Math.floor(Math.random() * 16777215).toString(16) +
//             ';">';
//         }
//         inWord = true;
//       }

//       highlightedText += char;
//     }
//     element.innerHTML = highlightedText;
//   }
// }

// window.addEventListener('DOMContentLoaded', highlightWords);
