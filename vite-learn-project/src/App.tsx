import { add, format } from "date-fns"

function App() {

  return (
    <>
      Tomorrow's Date: {format(add( new Date(),{days:1}),"do MMMM YYYY")}

    </>
  )
}

export default App
