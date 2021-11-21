export default function(props){
    return <div style={{
        display:'grid',padding:10,
        gridTemplateColumns:'auto auto',
    }}>
    {props.children}
    </div>
}