export default function Item({item}){
    return (
        <span>
            {item.quantity}
            {item.description}
        </span>
    ) 
}