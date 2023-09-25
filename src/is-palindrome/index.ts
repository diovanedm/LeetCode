function isPalindrome(x: number): boolean {
	const reverseNumber = x.toString().split("").reverse().join("");
	return x.toString() === reverseNumber;
}

console.log(isPalindrome(-121));
console.log(isPalindrome(121));
console.log(isPalindrome(122));
