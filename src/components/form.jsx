

export default function Form(){

    function handleSubmit(e){
        e.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit} className="bg-[#e5771f] py-[3rem] flex items-center justify-center gap-[1rem] text-[2.4rem] h-[6.8rem]">
            <h3>What do you need for your 😍 trip?</h3>
            <select name="" id="">
                {Array.from({ length: 20}, (_, i) => i + 1).map
                ((num) => (
                    <option value ={num} key={num}> 
                        {num} 
                    </option> 
                ))}
            </select> 
            <input type="text" placeholder="Item..." />
            <button className="uppercase bg-[#76c7ad]">Add</button>
        </form>
    )
}