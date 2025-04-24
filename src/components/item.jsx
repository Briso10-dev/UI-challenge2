export default function Item({item}){
    return (
        <div className="flex gap-4 ">
            <span style={item.packed ? {textDecoration: "line-through" } : {}}>
                {item.quantity} 
                {item.description}
            </span>
            <button>❌</button>
        </div>
    ) 
}