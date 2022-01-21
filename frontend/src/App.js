import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './config/theme';
import Home from './pages/Home';

function App() {
  return (
    <React.Suspense fallback={"loading..."}>
		<ThemeProvider theme={theme}>
			<Router>
				<Routes>
					<Route path="/" exact element={<Home />} />
				</Routes>
			</Router>
		</ThemeProvider>
	</React.Suspense>
  );
}

export default App;
