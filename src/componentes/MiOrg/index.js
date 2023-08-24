import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {

    
console.log(props)
   // const [Mostrar, actualizarMostrar] = useState(true)
   // const manejarclick = () =>{
    //    console.log("Mostrar/Ocultar elemento", !Mostrar)
     //   actualizarMostrar(!Mostrar)
   // }

    return <section className="orgsection">
        <h3 className="title">Mi organización  </h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}  />

    </section>
}

export default MiOrg