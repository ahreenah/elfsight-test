import {useState, useEffect} from 'react'
import { Form, Card, Button } from 'react-bootstrap';
import variants from '../variants';

console.log(variants)

function VarsList({prop}){
    // console.log('prop:',prop)
    let data = variants[prop]
    // console.log('vs',variants)
    // console.log(data)
    return <>
        <option value="">Any</option>    
        {data.map(i=><option value={i} key={i}>{i}</option>)}
    </>
}

function Label({children}){
    return <div style={{fontSize: 14,
    lineHeight: '16px',
    marginBottom:5,
    textAlign: 'left',
    width: '100%'}}>{children}</div>
}

const fieldStyle = {fontSize:14, padding:4, marginBottom:5}

function Select({children, value, onChange}){
    return <Form.Select style={fieldStyle} value={value} onChange={onChange}>
    {children}
    </Form.Select>
}

function Control({value,onChange}){
    return <Form.Control style={fieldStyle } placegolder='k' value={value} onChange={onChange}/>
}

export default function ({onChange, onLoad}){
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('')
    const[status,setStatus] = useState('')
    const [type,setType] = useState('')
    const [gender, setGender] = useState('')
    useEffect(() => {
        onChange({name, status, species, type, gender})
    }, [name, status,species, type, gender]);
    function clear(){
        setName('');
        setSpecies('');
        setStatus('');
        setType('');
        setGender('')
    }
    return <div style={{
        boxShadow: '0 0 6px 0 grey',
        borderRadius: 6,
        width: 'calc(100% + 13px)',
        padding: 10,
        alignSelf: 'center'
    }}>
        <div>
            Select filters
        </div>
        <Form onSubmit={e=>{
            e.preventDefault(); onLoad()}}>
        {/* {status} - {species} - {type} - {gender} */}
            <Label>name</Label>
            <Control placegolder='k' value={name} onChange={e=>setName(e.target.value)}/>
            
            
            {/* <Form.Control placegolder={'k'} value={status} onChange={e=>setStatus(e.target.value)}/> */}
            <div style={{
                    display: 'grid',
                    gridTemplateColumns: '50% 50%',
                    gridGap: 10,
                    width: 'calc(100% - 10px)'
                }}>
                <div>
                    <Label>status</Label>
                    <Select value={status} onChange={e=>{console.log(e); setStatus(e.target.value)}}>
                        <VarsList prop="status"/>
                    </Select>
                    <Label>species</Label>
                    <Select value={species} onChange={e=>{console.log(e.target.value); setSpecies(e.target.value)}}>
                        <VarsList prop="species"/>
                    </Select>
                </div>
                <div>
                    <Label>type</Label>
                    <Select aria-label="Default select example" value={type} onChange={e=>{console.log(e); setType(e.target.value)}}>
                        <VarsList prop="type"/>
                    </Select>
                    <Label>gender</Label>
                    <Select aria-label="Default select example" value={gender} onChange={e=>{console.log(e); setGender(e.target.value)}}>
                        <option value="">Any</option>
                        <option value="Male">Male</option>    
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="Unknown">Unknown</option>
                    </Select>
                </div>
            </div>
        </Form>
        
        <Button variant='primary' onClick={onLoad}> Load</Button>
        
        <Button variant='danger' onClick={clear} style={{marginLeft:5}}>Clear</Button>
    </div>
}