import {Card} from 'react-bootstrap'
import Styled from 'styled-components'

let Elem = Styled(Card)`
&:hover {
    background: #f0f0f0f0;
  }
`

export default function ({data, onClick}){
    return <Elem style={{marginBottom:10, padding:10}} onClick={onClick}>
    <div style={{display:'flex', gap:10}}>
        <img src={data.image} style={{maxWidth:20, maxHeight:30}}/>
        <div style={{fontSize:12}}>{data.name}</div>
        {/* {JSON.stringify(data)} */}
        </div>
    </Elem>

}