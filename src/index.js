import React from 'react'
import ReactDOM from 'react-dom'
import { AppProvider } from './context/contextQuiz'
import { CoordinatesProvider } from './Utiles/Coordinates'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.render(
	<React.StrictMode>
		<CoordinatesProvider>
			<AppProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</AppProvider>
		</CoordinatesProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
