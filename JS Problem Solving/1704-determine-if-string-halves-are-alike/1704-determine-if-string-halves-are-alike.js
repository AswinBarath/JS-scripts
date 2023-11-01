/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let len = s.length;
    let vovels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let left = 0;
    let right = 0;
    
    //logic
    for(let i=0; i<len; i++) {
        // console.log(vovels.includes(s.charAt(i)));
        if(vovels.includes(s.charAt(i))) {
            i < len/2 ? left++ : right++;
        }
    }
    // console.log(left, right);
    return left == right ? true : false;
};