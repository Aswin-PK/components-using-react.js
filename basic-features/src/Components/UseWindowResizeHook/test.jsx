import UseWindowResize from "."
import './styles.css'

export default function UseWindowResizeHook() {

    const {width, height} = UseWindowResize();

    return <div className="windowresize-hook-container">
        <div className="heading">
            <span>Use Window Resize Hook</span>
        </div>
        <p>Width : {width}</p>
        <p>Height: {height}</p>
    </div>
}