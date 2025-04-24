

export default function Form(){
    return(
        <form className="bg-[#e5771f] py-[3rem] flex items-center justify-center gap-[1rem] text-[2.4rem] h-[6.8rem]">
            <h3>What do you need for your 😍 trip?</h3>
            <select name="" id="">
                <option value="{1}">1</option>
                <option value="{2}">2</option>
                <option value="{3}">3</option>
            </select>
            <input type="text" placeholder="Item..." />
            <button>Add</button>
        </form>
    )
}