import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import header from './Components/header.js';
import paintingListItem from './Components/paintingListItem.js';
import paintingList from './Components/paintingList.js';
import editPaintingForm from './Components/editPaintingForm.js';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );


    //later you will learn how to fetch this data from an API 
    const data = [
       {id: "016060", title: "Girl Arranging Her Hair", artist: "Mary Cassatt",  year: 1886},      
       {id: "019160", title: "Farmhouse in Provence", artist: "Vincent Van Gogh", year: 1888},  
       {id: "016070", title: "The Boating Party", artist: "Mary Cassatt",  year: 1893},
       {id: "017040", title: "Woman with a Parasol", artist: "Claude Monet",  year: 1875},
       {id: "017080", title: "The Bridge at Argenteuil", artist: "Claude Monet", year: 1874}
    ];
 
    const [paintings,setPaintings] = useState(data)
    //this array = destructured array
    //painting = variable thats holds state
    //setPaintings = callback method - sets the state
    const[currentPainting,setCurrentPainting] = useState(data[0]);
 
    const handleChange = (updatedPainting) => {
       setCurrentPainting(updatedPainting);
    };
    
    const handleUpdatePainting = (modifiedPainting) => {
       //shallow copy of paintings
       //copy the list
       const updatedList = [...paintings];
       //find the painting index
       const index = updatedList.findIndex(p => p.id == modifiedPainting.id);
       //replace the painting
       updatedList[index] = modifiedPainting;
       //update state
       setPaintings(updatedList);
       setCurrentPainting(modifiedPainting);  
    }
 
    const handleReset = () => {
       const restoredList = [...data];
       setPaintings(restoredList);
    }
 
    return (
       <article className="app">
          <Header undo={handleReset}/>
          <div className="box">
             <PaintingList paintings={paintings} change={handleChange}/>
             <EditPaintingForm componentCurrentPainting={currentPainting} update={handleUpdatePainting}/>
          </div>
       </article>
    );
       
 }

export default App;
