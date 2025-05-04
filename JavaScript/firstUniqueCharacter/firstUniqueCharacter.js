function firstUniqueCharacter(s) {
    const charCount = {};

    // Count the occurrences of each character
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the index of the first unique character
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i;
        }
    }

    // If no unique character is found, return -1
    return -1;
}

// Example usage
console.log(firstUniqueCharacter("leetcode")); // Output: 0
console.log(firstUniqueCharacter("loveleetcode")); // Output: 2
console.log(firstUniqueCharacter("aabb")); // Output: -1