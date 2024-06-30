// import React from 'react'
import Card from './Card'
import CRonaldo from "./assets/ronaldo.jpg"
import wc from "./assets/worldcup.jpeg"

function App() {
  let data = [{
    title: "Ronaldo",
    description: "Cristiano Ronaldo dos Santos Aveiro GOIH ComM (Portuguese pronunciation: born 5 February 1985) is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al Nassr and the Portugal national team. Widely regarded as one of the greatest players of all time, Ronaldo has won five Ballon d'Or awards",
    image: CRonaldo
  },
  {
    title: "T20 World Cup",
    description: "The ICC Men's T20 World Cup is the Twenty20 International cricket tournament, organized by the International Cricket Council since 2007. The event has generally been held every two years.",
    image: wc
  },
  {
    title: "Austian Grand Prix",
    description: "Formula 1 fans were furious due to an issue with TV coverage of the Austrian Grand Prix Sprint Race. Max Verstappen finished top of the order at the Red Bull Ring, ahead of the McLaren duo of Oscar Piastri and Lando Norris.",
    image: "https://e0.365dm.com/24/06/2048x1152/skysports-f1-austrian-gp_6589772.jpg?20240624141707"
  }

  ]
  return <>
      <div className="container">

{/* <!-- Page Heading --> */}
<h1 className="my-4">Page Heading
  <small>Secondary Text</small>
</h1>

<div className="row">
    {
      data.map((e, i)=>{
        return <Card data={e} key={i}/>
      })
    }
</div>

</div>
  </>
}

export default App