import React from 'react'
import ReactDOM from 'react-dom'
import { AppProvider } from './context/contextQuiz'
import { UseProvider } from './context/UserContext'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.render(
	<React.StrictMode>
		<UseProvider>
			<AppProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</AppProvider>
		</UseProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
