import React, {useState} from "react";
import './animations/animations.css'

const Header = ({show}) => {


    const clases = show ? 'header header-active': 'header'
    return (
        <header className={clases}>
            <h1>
                Transition CSS in line 
                <span role='img' aria-label='fires'>
                &#128152;
                </span>
            </h1>
        </header>
    )
}

const Transition = () => {
    const [active, setActive] = useState(false)

    const toggle = () => setActive(!active)
    

    return(
        <div>
            <button onClick={toggle}>
                {active ? 'Desactivar' : 'Activar'}
            </button>
            <Header show={active}/>
        </div>
    )
}
export default Transition