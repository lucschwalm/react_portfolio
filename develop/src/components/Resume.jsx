export default function Resume() {
    return(
        <div className="ms-3 mt-2 pb-5">
            <h1 className="mb-3">Resume</h1>
            <p>Download my resume: <a href="/resume">Placeholder</a></p>
            <h3>Front-end proficiencies: </h3>
            <ul>
                <li>React</li>
                <li>Handlebars</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
            <h3>Back-end proficiencies: </h3>
            <ul className="pb-5">
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Express.js</li>
            </ul>
        </div>
    )
}