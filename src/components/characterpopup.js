import {Modal, Button, CloseButton} from 'react-bootstrap'
import Stat from './stat'
import StatsGrid from './statsGrid'

export default function ({index, onHide, lst}){
    let char = lst.filter(i=>i.id==index)[0]
    let showList = ['name','status', 'species','origin','gender','location','type']
    return     <div style={{
            position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex:1,
    background:' #90909090',
    }}><Modal.Dialog style={{
            width:'calc(100% - 20px)'
    }}>

        <Modal.Body style={{
    background:`url("${char.image}")`, padding:0}}>
            {/* <p>
                {JSON.stringify(char)}
            </p> */}
            <div style={{background:'rgb(58 58 58 /55%)', width:'100%', color:'white', paddingBottom:20}}>
                <div style={{textAlign:'left', padding:15, fontSize:18}}>{char.name}
    <CloseButton style={{float:'right'}} onClick={onHide} variant={'white'}/></div>
                <StatsGrid>
                {showList.map(i=><Stat name={i} value={char[i].name?char[i].name:char[i]}/>)}
                </StatsGrid>
            </div>
        </Modal.Body>
    
    </Modal.Dialog>
    </div>
}