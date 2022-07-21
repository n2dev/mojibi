import { useEffect, useState, useContext } from 'react'
import { GameContext } from '../game'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { doesSentenceContainLetter } from '../../utils/doesSentenceContainLetter'

interface CellProps {
	letter: string
	index: number
}

interface CellContext {
	currentWord: string
	currentGrid: number[]
	setCurrentGrid: React.Dispatch<React.SetStateAction<number[]>>
	savedGrid: number[]
}

const Cell = ({ letter, index }: CellProps) => {
	const [cellColor, setCellColor] = useState<string>('gray')

	const { currentWord, currentGrid, setCurrentGrid, savedGrid } = useContext(
		GameContext
	) as CellContext
	
	// Changes the color of cells
	useEffect(() => {
		const tmpGrid = currentGrid.concat()
		if (savedGrid[index] === 0) {
			if (doesSentenceContainLetter(currentWord, letter)) {
				tmpGrid[index] = 1
				setCellColor('#AC3E3E')
			} else {
				tmpGrid[index] = 0
				setCellColor('#3A3A3C')
			}
			setCurrentGrid(tmpGrid)
		} else if (savedGrid[index] === 1) {
			setCellColor('#B59F3B')
		} else if (savedGrid[index] === 2) {
			setCellColor('#538D4E')
		}
	}, [currentWord, savedGrid])

	return (
		<Grid item flexBasis='18%'>
			<Box
				sx={{
					border: 1,
					color: 'white',
					borderColor: cellColor,
					backgroundColor: cellColor,
					fontSize: '1.75rem',
					aspectRatio: '1',
				}}
				alignItems='center'
				justifyContent='center'
				display='flex'
			>
				{letter}
			</Box>
		</Grid>
	)
}

export default Cell
