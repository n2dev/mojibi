export const checkForBingoLines = (grid: number[]): number[] => {
	// horizon and vertical
	for (let i = 0; i < 2; i++) {
		for (let j = 0; j < 5; j++) {
			for (let k = 0; k < 5; k++) {
				if (grid[(k + 5 * j) * (1 - i) + (5 * k + j) * i] < 1) break
			}
			if (
				grid[(0 + 5 * j) * (1 - i) + (5 * 0 + j) * i] > 0 &&
				grid[(1 + 5 * j) * (1 - i) + (5 * 1 + j) * i] > 0 &&
				grid[(2 + 5 * j) * (1 - i) + (5 * 2 + j) * i] > 0 &&
				grid[(3 + 5 * j) * (1 - i) + (5 * 3 + j) * i] > 0 &&
				grid[(4 + 5 * j) * (1 - i) + (5 * 4 + j) * i] > 0
			) {
				grid[(0 + 5 * j) * (1 - i) + (5 * 0 + j) * i] = 2
				grid[(1 + 5 * j) * (1 - i) + (5 * 1 + j) * i] = 2
				grid[(2 + 5 * j) * (1 - i) + (5 * 2 + j) * i] = 2
				grid[(3 + 5 * j) * (1 - i) + (5 * 3 + j) * i] = 2
				grid[(4 + 5 * j) * (1 - i) + (5 * 4 + j) * i] = 2
			}
		}
	}
	// diagonal
	if (grid[0] > 0 && grid[6] > 0 && grid[12] > 0 && grid[18] > 0 && grid[24]) {
		grid[0] = 2
		grid[6] = 2
		grid[12] = 2
		grid[18] = 2
		grid[24] = 2
	}
	if (grid[4] > 0 && grid[8] > 0 && grid[12] > 0 && grid[16] > 0 && grid[20]) {
		grid[4] = 2
		grid[8] = 2
		grid[12] = 2
		grid[16] = 2
		grid[20] = 2
	}
	return grid
}
