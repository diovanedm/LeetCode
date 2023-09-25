const romanValues: { [key: string]: number } = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
};

function romanToInt(s: string): number {
	let value = 0;

	for (let index = 0; index < s.length; index++) {
		const element: string = s[index];
		const valueRoman = romanValues[element];
		if (valueRoman === 5 || valueRoman === 10) {
			if (s[index - 1] == "I") {
				value -= 2;
			}
		}

		if (valueRoman === 50 || valueRoman === 100) {
			if (s[index - 1] == "X") {
				value -= 20;
			}
		}

		if (valueRoman === 500 || valueRoman === 1000) {
			if (s[index - 1] == "C") {
				value -= 200;
			}
		}

		value = value + valueRoman;
	}
	return value;
}

romanToInt("CD");
