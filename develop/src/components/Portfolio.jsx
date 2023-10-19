import Project from "./Project";
import moviefinder from '../assets/moviefinder.PNG';
import plantit from '../assets/plantit.PNG';
import parkit from '../assets/parkit.PNG';

export default function Portfolio() {
    return(
        <div>
            <h1 className="mx-3 my-2">Portfolio</h1>
            <div className="d-flex flex-wrap">
                <Project image={moviefinder} projectName={"Moviefinder"} projectLanguage={"JS/HTML"} projectLink={"https://github.com/lucschwalm/moviefinder/tree/main"} />
                <Project image={plantit} projectName={"PlantIt"} projectLanguage={"JS/Handlebars"} projectLink={"https://github.com/RossiniTheRat/plant-it/tree/main"} />
                <Project image={parkit} projectName={"ParkIt"} projectLanguage={"MERN Stack"} projectLink={"https://parkit-project-4482020d00b5.herokuapp.com/"} />
                <Project image={"https://placehold.jp/430x306.png"} projectName={"Placeholder"} projectLanguage={"Coming soon"} projectLink={"/#"} />
                <Project image={"https://placehold.jp/430x306.png"} projectName={"Placeholder"} projectLanguage={"Coming soon"} projectLink={"/#"} />
                <Project image={"https://placehold.jp/430x306.png"} projectName={"Placeholder"} projectLanguage={"Coming soon"} projectLink={"/#"} />
            </div>
        </div>
    );
}