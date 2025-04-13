import Header from "./components/Header"
import Main from "./components/Main"
import Data from "./data"
export default function App() {
  const elements = Data.map((element) => {
    return(
      <Main 
        key={element.id}
        data = {element}
      />
    )
  })

  return(
    <>
      <Header/>
      <main>
        {elements}
      </main>
    </>
  )

}