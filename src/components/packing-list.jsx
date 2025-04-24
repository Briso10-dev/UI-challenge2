import Item from "./item";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "Charger", quantity: 1, packed: false },
];


export default function PackingList(){
    return(
        <div  className="bg-[#5a3e2b] text-[#ffebb3] text-[2rem] py-4 flex flex-col justify-between items-center">
            <ul className="flex flex-col items-center gap-4">
                {initialItems.map((item) => (
                    <Item item={item} />
                ))}
            </ul>
        </div>       
    )
}