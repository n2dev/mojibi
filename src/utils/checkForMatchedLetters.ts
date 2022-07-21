export const checkForMatchedLetters = (
	word: string,
	grid: number[],
	bingoLetters: string[]
): number[] => {
	for (let i = 0; i < word.length; i++) {
		bingoLetters.forEach((letter, index) => {
			if (word[i] === letter) {
				console.log('match')
				grid[index] = 1
			}
		})
	}
	return grid
}
