// function longestCommonPrefix(strs: string[]): string {
// 	if (strs.length === 1) return strs[0];
// 	const fisrtString = strs[0].split("");

// 	let prefix = "";

// 	for (let index = 0; index < fisrtString.length; index++) {
// 		const char = fisrtString[index];

// 		let strsHasWord = 0;
// 		for (let index = 0; index < strs.length; index++) {
// 			const str = strs[index];
// 			str.includes(prefix + char) && (strsHasWord = strsHasWord + 1);
// 			if (index === strs.length - 1) {
// 				if (strsHasWord === strs.length) {
// 					prefix = prefix + char;
// 				}
// 			}
// 		}
// 	}
// 	return prefix;
// }
function longestCommonPrefix(v: string[]): string {
	let ans = "";
	v = v.sort();
	let first = v[0];
	let last = v[v.length - 1];

	for (let i = 0; i < Math.min(first.length, last.length); i++) {
		if (first[i] !== last[i]) {
			return ans;
		}
		ans += first[i];
	}
	return ans;
}
