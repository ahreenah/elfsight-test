import logo from './logo.svg';
import './App.css';
// import { PrimaryButton, Card } from '@fluentui/react-northstar@0.59.0';
import { Button, Container,Card, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { characters } from './api';
import Character from './components/Character';
import Filters from './components/Filters';
import CharacterPopup from './components/characterpopup';
// import  './index.css'

function App() {
  let [list,setList] = useState([])
  let [filters,setFilters] = useState({})
  let [selectedChar, setSelectedChar] = useState(0);
  let [loading, setLoading] = useState(false);
  
  async function load(){
    setList([])
      setLoading(true);
      let res = await characters(filters)
      setLoading(false);
      if(!res.error)
        setList(res.results)
      else
        setList([])
  }
  function deselect(){
    setSelectedChar(0)
  }
  return (
    <div className="App">
      <div style={{position:'relative',width:300,margin:10,}}>
        {selectedChar!=0 && <CharacterPopup index={selectedChar} lst={list} onHide={deselect}/>}
        <Card style={{maxHeight:600, overflowY:'scroll', padding:10}} className="scroll">

        <Container style={{paddingRight:0, paddingLeft:25,display:'flex', flexDirection:'column'}}>
          <Filters onChange={setFilters} onLoad={load}/>
          <div style={{display:'flex', marginBottom:10}}>
          </div>
          {loading && <Spinner animation="border"/>}
          {list.map(i=><Character data={i} onClick={()=>setSelectedChar(i.id)} />)}
        </Container>
        </Card>
      </div>
    </div>
  );
}

export default App;
