import Node from '../assets/logos/node.png'
import Php from '../assets/logos/php.png'
import Html from '../assets/logos/html5.png'
import Css from '../assets/logos/css.png'
import styledComponents from '../assets/logos/styled-components.png'
import Javascript from '../assets/logos/javascript.png'
import Java from '../assets/logos/java.png'
import React from '../assets/logos/react.png'
import Redux from '../assets/logos/redux.png'
import MongoDb from '../assets/logos/mongodb.png'
import Android from '../assets/logos/android.png'
import Magento from '../assets/logos/magento.png'
import Github from '../assets/logos/github.png'


const Skills = () => {
    return (
        <section className="languages">
        <h2 className="md text-center my-2">
            Skills
        </h2>
        <div className="container flex">
        <div className="card">
                <h4>Html5</h4>
                {/* <img src={Node} alt=""> */}
                <img src={Html} alt="" />
            </div>
            <div className="card">
                <h4>CSS3</h4>
                {/* <img src={Node} alt=""> */}
                <img src={Css} alt="" />
            </div>
            <div className="card">
                <h4>Styled Components</h4>
                {/* <img src={Node} alt=""> */}
                <img src={styledComponents} alt="" />
            </div>
            <div className="card">
                <h4>Javascript</h4>
                {/* <img src={Node} alt=""> */}
                <img src={Javascript} alt="" />
            </div>
            <div className="card">
                <h4>Java</h4>
                {/* <img src={Node} alt=""> */}
                <img src={Java} alt="" />
            </div>
            <div className="card">
                <h4>PHP</h4>
                {/* <img src="images/logos/php.png" alt=""> */}
                <img src={Php} alt="" />
              </div>
            <div className="card">
                <h4>React</h4>
                {/* <img src={Node} alt=""> */}
                <img src={React} alt="" />
            </div>
            <div className="card">
                <h4>Redux</h4>
                {/* <img src={Node} alt=""> */}
                <img src={Redux} alt="" />
            </div>
            <div className="card">
                <h4>Node.js</h4>
                {/* <img src={Node} alt=""> */}
                <img src={Node} alt="" />
            </div>
            <div className="card">
                <h4>MongoDb</h4>
                {/* <img src={Node} alt=""> */}
                <img src={MongoDb} alt="" />
            </div>
            <div className="card">
                <h4>Android</h4>
                {/* <img src={Node} alt=""> */}
                <img src={Android} alt="" />
            </div>
            <div className="card">
                <h4>Magento</h4>
                {/* <img src={Node} alt=""> */}
                <img src={Magento} alt="" />
            </div>
            <div className="card">
                <h4>Github</h4>
                {/* <img src={Node} alt=""> */}
                <img src={Github} alt="" />
            </div>              
        </div>
    </section>
    )
}

export default Skills
