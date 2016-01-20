function pigLatin(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowels.length; i++) {
    if (word[0] === vowels[i]) {
      return pigVowel(word);
    }
  }
  return pigConsanant(word);
}

function pigConsanant(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < 4; i++) {
    if (word[i] === "q") {
      var qFirst = word.slice(0, (i + 2));
      var qLast = word.slice((i + 2), word.length);
      return qLast + qFirst + 'ay';
    }
    for (var j = 0; j < vowels.length; j++) {
      if (word[i] === vowels[j]) {
        var first = word.slice(0, i);
        var last = word.slice(i, word.length);
        return last + first + 'ay';
      }
    }
  }
}

function pigVowel(word) {
  return word + 'ay';
}
