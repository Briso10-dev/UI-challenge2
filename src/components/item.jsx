export default function Item({item}){
    return (
        <>
        <span style={item.packed ? {textDecoration: "line-through" } : {}}>
            {item.quantity}
            {item.description}
        </span>
        <button>❌</button>
        </>
    ) 
}