import { useState, createContext } from 'react'

import Container from '@mui/material/Container'

import { defaultGrid } from '../../constants/defaultGrid'

export const GameContext = createContext({})

const Game = () => {
	const [currentGuesses, setCurrentGuesses] = useState<string>('')
	const [guesses, setGuesses] = useState<string[]>([])
	const [currentGrid, setCurrentGrid] = useState<number[]>(defaultGrid)
	const [savedGrid, setSavedGrid] = useState<number[]>(defaultGrid.concat())

	return (
		<Container maxWidth='sm'>
			<GameContext.Provider
				value={{
					currentGuesses,
					setCurrentGuesses,
					guesses,
					setGuesses,
					currentGrid,
					setCurrentGrid,
					savedGrid,
					setSavedGrid,
				}}
			>
				{/* <Info />
				<Bingo />
				<Keyboard /> */}
			</GameContext.Provider>
		</Container>
	)
}
export default Game
