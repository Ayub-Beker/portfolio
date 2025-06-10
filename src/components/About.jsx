import './about.css'
import about from '../assets/about.jpg'

export default function About(){
    return(
        <div className='about-container'>  
        <div className="about-img">
            <img src={about} alt="about-img" />
        </div>
        <div className="about-title">
            <h2>About Me </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate est reprehenderit molestiae nulla velit ipsa qui laboriosam voluptatibus, voluptates officia, iusto doloribus alias ipsum, magnam eaque adipisci perferendis vero 
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit minus obcaecati iste nobis distinctio sit. Magni suscipit vitae commodi earum, pariatur natus nemo ducimus aspernatur consequatur ad neque ut, harum inventore deserunt quo saepe? Culpa repudiandae velit placeat. Et, quod. natus.</p>
        </div>
        
        </div>
    )
}