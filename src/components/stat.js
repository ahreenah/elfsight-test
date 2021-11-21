export default function({name, value}){
    return <>
    <div style={{borderBottom:'1px solid #f0f0f070'}}>{name}</div>
    <div style={{borderBottom:'1px solid #f0f0f070'}}>{value||'-'}</div>
    </>
}