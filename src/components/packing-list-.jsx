import Item from "./item";

export const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];


export function PackingList(){
    return(
        <ul className=" bg-[#5a3e2b] text-[#ffebb3] text-[1.4rem] py-4 flex flex-col justify-between items-center gap-4">
            {initialItems.map((item) => (
                <Item item={item} />
            ))}
        </ul>

    )
}