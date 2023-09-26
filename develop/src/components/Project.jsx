import { useState } from 'react';

export default function Project(props) {
    const [display, setDisplay] = useState({display: 'none'});
    const [opacity, setOpacity] = useState("opacity-100");
    return(
        <div className="mb-4 w-50">
            <a className="position-relative" href={props.projectLink}
            onMouseEnter={() => {
                setDisplay({display: "block"});
                setOpacity("opacity-50");
            }}
            onMouseLeave={() => {
                setDisplay({display: "none"});
                setOpacity("opacity-100");
            }}>
                <img className={opacity} src={props.image}></img>
                <section id="projectBtn" className="position-absolute" style={display}>
                    <h3>{props.projectName}</h3>
                    <p>{props.projectLanguage}</p>
                </section>
            </a>
        </div>
    );
}