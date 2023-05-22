var lengthOfLastWord = function(s) {
    const array = s.trim().split(" ")
    const last = array.length - 1
    const word = array[last]
    return word.length
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))

// for the sake of this program - we do not need anything too complicated.
// We just need to ensure the last word does not have additional white space that may cause error in identifying the correct  'last word'

// alternative to further illustrate this is to purely use trimEnd()
