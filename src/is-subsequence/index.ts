function isSubsequence(s: string, t: string): boolean {
	const listS = s.split("");
	const listT = t.split("");

	const listBool: boolean[] = listS.map((charS, indexS) => {
		return t.includes(charS);
	});

	const hasFalse = listBool.some((char) => char === false);
	if (hasFalse) return false;

	let verifyList: string[] = [];
	listT.forEach((char) => {
		if (s.includes(char)) {
			verifyList.push(char);
		}
	});

	return verifyList.join("") === s;
}

const s = "abc";
const t = "agdc";

const result = isSubsequence(s, t);
console.log(result);
