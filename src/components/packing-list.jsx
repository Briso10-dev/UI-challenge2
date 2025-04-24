import Item from "./item";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "Charger", quantity: 1, packed: false },
];


export default function PackingList(){
    return(
        <div  className="bg-[#5a3e2b] text-[#ffebb3] text-[2rem] flex flex-col justify-between items-center">
            <ul className="flex justify-between p-100">
                {initialItems.map((item) => (
                    <Item item={item} key={item.id}/>
                ))}
            </ul>
        </div>       
    )
}