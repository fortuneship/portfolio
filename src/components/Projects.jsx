import Me from '../assets/image/me.jpeg'

const Projects = () => {
    return (
        <section className="about my-2 py-2">
        <div className="container grid py-2">
            <div className="text-center">
                <h5 className="md">E-commerce website</h5>
                <p className="lead my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, incidunt.</p>
                
                <div className='project-tags my-2'>
                <span className='tags'>ReactJs</span>
                <span className='tags'>Redux</span>
                <span className='tags'>Styled components</span>
                <span className='tags'>NodeJs</span>
                <span className='tags'>MongoDb</span>
                <span className='tags'>JWT Auth</span>
                <span className='tags'>Stripe Api</span>
                </div>
                <a href="features.html" className="btn btn-dark">Demo</a>
               
            
            </div>
            {/* <img src="images/cloud.png" alt=""> */}
            <img src={Me} alt="" className='project-img'/>
        </div>
        <div className="container grid py-2">
           
            {/* <img src="images/cloud.png" alt=""> */}
            <img src={Me} alt="" className='project-img'/>
            <div className="text-center">
                <h5 className="md">E-commerce website</h5>
                <p className="lead my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, incidunt.</p>
                
                <div className='project-tags my-2'>
                <span className='tags'>ReactJs</span>
                <span className='tags'>Redux</span>
                <span className='tags'>Styled components</span>
                <span className='tags'>NodeJs</span>
                <span className='tags'>MongoDb</span>
                <span className='tags'>JWT Auth</span>
                <span className='tags'>Stripe Api</span>
                </div>
                <div className='project-btn'>
                <a href="features.html" class="btn btn-dark mx-2">Demo</a>
                <a href="features.html" class="btn btn-dark mx-2">Source code</a>
                </div>
               
               
            
            </div>
        </div>
    </section>
    )
}

export default Projects
