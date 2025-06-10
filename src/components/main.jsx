import img from "../assets/ayub.png"
import './main.css'

 
export default function Main(){
    return(
        <main>
            <div className="main-img">
                <img src={img} alt="hero-img" />
            </div>
            <div className="main-title">
                <h2>HI <span>I'M</span></h2>
                <h1>Ayub Beker</h1>
                <p>Front-end Web Developer <br />& Web Designer </p>
                
            </div>
        </main>
    )
}