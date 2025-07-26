import { add, format } from "date-fns"

function MyButton() {
  return < button>i'm a button</button>
}
function AboutPage() {
  return (
    <>
      <h1>hello welcome to AboutPage</h1>
      <br />
     
    </>
  )
}
function App() {

  return (
    <>
      Tomorrow's Date: {format(add(new Date(), { days: 1 }), "do MMMM yyyy")}
      Tomorrow's Date: {format(add(new Date(), { days: 1 }), "do MMMM yyyy")}
      <MyButton />
      <AboutPage/>
    </>
  )
}

export default App

