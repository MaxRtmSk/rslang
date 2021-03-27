import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from './component/Header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from './component/Main/Main'
import Footer from './component/Footer/Footer'
import Words from './component/Words/Words'
import Games from './component/Games/Games'
import Statistics from './component/Statistics/Statistics';
import AudioCall from './component/Games/AudioCall/AudioCall'
import AuthorGame from './component/Games/AuthorGame/AuthorGame'
import SavannahContainer from './component/Games/Savanna/SavannahContainer'
import Sprint from './component/Games/Sprint/Sprint'

function App() {
  return (
  	<div className="app">
		  <BrowserRouter>
				<CssBaseline>
					<Header />
					<Route path='/' component={Main} exact />
					<Route path='/words' component={Words} />
					<Route path='/games' component={Games} exact/>
					<Route path='/games/savannah' component={SavannahContainer} />
					<Route path='/games/audioCall' component={AudioCall} />
					<Route path='/games/Sprint' component={Sprint} />
					<Route path='/games/authorGame' component={AuthorGame} />
					<Route path='/statistics' component={Statistics} />
					<Footer /> 
				</CssBaseline>
		  </BrowserRouter>		  
  	</div>

  )
}

export default App;
