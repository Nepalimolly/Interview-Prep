function freqCounter(string) {
  const frequencies = {};

  for (let char of string) {
    frequencies[char] = frequencies[char] + 1 || 1;
  }
  return frequencies;
}

function constructNote(message, letters) {
  const messageCounter = freqCounter(message);
  const lettersCounter = freqCounter(letters);

  for (let key in messageCounter) {
    if (messageCounter[key] !== lettersCounter[key]) {
      return false;
    }
    if (messageFreq[key] > lettersFreq[key]) {
      return false;
    }
    return true;
  }
}

// /**
//  * Build two frequency counters. If any of the message characters are not
//  *  found in the 'letters' characters, or if there are not enough of them,
//  *  return false. Otherwise return true.
//  */
// function constructNote(message, letters) {
//     const lettersFreq = {};
//     const messageFreq = {};

//     // build frequency counter of letters
//     for (let char of letters) {
//       lettersFreq[char] = ++lettersFreq[char] || 1;
//     }

//     // build frequency counter of message
//     for (let char of message) {
//       messageFreq[char] = ++messageFreq[char] || 1;
//     }

//     // final comparison of message frequency with letters frequency
//     for (let char in messageFreq) {
//       if (!lettersFreq[char]) {
//         return false;
//       }
//       if (messageFreq[char] > lettersFreq[char]) {
//         return false;
//       }
//     }

//     return true;
//   }
