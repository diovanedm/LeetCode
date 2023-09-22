function twoSum(nums: number[], target: number): number[] {
	for (let firstIndex = 0; firstIndex < nums.length; firstIndex++) {
		const value = nums[firstIndex];

		for (let secondIndex = 0; secondIndex < nums.length; secondIndex++) {
			if (secondIndex !== firstIndex) {
				const sum = value + nums[secondIndex];
				if (sum === target) {
					return [firstIndex, secondIndex];
				}
			}
		}
	}
	return [];
}

const result = twoSum([4, 5, 3], 8);
console.log(result);

// lista = [5, 4, 3]
// valorTotal = 8

// 5 + 4 = 9
// 5 + 3 = 8

// 4 + 5 = 9
// 4 + 3 = 7

// 3 + 5 = 8
// 3 + 4 = 7
