import React from 'react'
import ReactDOM from 'react-dom'
import { AppProvider } from './context/contextQuiz'

import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.render(
	<React.StrictMode>
		<AppProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AppProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
