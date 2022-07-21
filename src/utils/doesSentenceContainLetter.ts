export const doesSentenceContainLetter = (sentence: string, letter: string): boolean => {
	for (let i = 0; i < sentence.length; i++) {
		if (sentence[i] === letter) {
			return true
		}
	}
	return false
}
