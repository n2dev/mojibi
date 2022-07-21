/** ビンゴの文字 **/
const hiragana =
	'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわんぁぃぅぇぉがぎぐげござじずぜぞだぢづでどっばびぶべぼぱぴぷぺぽゃゅょー'

/**
 * Generates random hiragana letters in array without duplicates (length = 25)
 * @returns random letters in array
 * @example
 *
 *
 */
export const getBingoLetters = (): string[] => {
	const bingoLetters: string[] = []

	const isInArray = (letter: string, array: string[]): boolean => {
		for (let i = 0; i < array.length; i++) {
			if (array[i] === letter) return true
		}
		return false
	}

	const getRandomLetter = (letters: string[]): void => {
		const randomLetter = letters[Math.floor(Math.random() * letters.length)]
		if (isInArray(randomLetter, bingoLetters)) {
			return getRandomLetter(letters)
		}
		bingoLetters.push(randomLetter)
	}

	for (let i = 0; i < 25; i++) {
		getRandomLetter(hiragana.split(''))
	}
	return bingoLetters
}
