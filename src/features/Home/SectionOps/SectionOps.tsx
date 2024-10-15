import { Button } from '@nextui-org/react'
import img1 from './img/ropa.webp'

import './SectionOps.css'

export const SectionOps = () => {
  return (
    <>
    <h3
    className='hh3'
      style={{
        textAlign: "center",
        fontSize: "34px",
        marginTop:"50px",
        
      }}
    >CATEGORIAS</h3>
      <div className="ops-container">
          <div className="hola">
            <div>
              <img src={img1} alt="" />
            </div>
            <div style={{marginBottom:"50px", textAlign:"center"}}>
              <h3>VERANO</h3>
              <Button>VER MÁS</Button>
            </div>
          </div>
          <div className="hola">
            <div>
              <img src={img1} alt="" />
            </div>
            <div style={{textAlign:"center"}}>
              <h3>OTOÑO</h3>
              <Button>VER MÁS</Button>
            </div>
          </div>
          <div className="hola">
            <div>
              <img src={img1} alt="" />
            </div>
            <div style={{marginBottom:"50px", textAlign:"center"}}>
              <h3>INVIERNO</h3>
              <Button>VER MÁS</Button>
            </div>
          </div>
      </div>
    </>
  )
}
