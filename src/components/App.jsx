import Logo from "./logo"
import Form from "./form"
import PackingList from "./packing-list-"
import Stats from "./stats"


function App() {

  return (
    <>
      <div className="grid grid-rows-[auto_auto_1fr_auto] ">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
      </div>
    </>
  )
}

export default App
