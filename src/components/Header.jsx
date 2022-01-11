import Logo from '../assets/image/Bt3.png'

const Header = () => {
    return (
        <div className='navbar'>
            <div className='container flex'>
              <div className='logo flex '>
                  <img src={Logo}  alt="Babatunde Tunde" />  
              <h1 className='sm mx-1'>Babatunde Tunde.</h1>
              </div>
                {/* <h1 className='logo sm'>Babatunde Tunde.</h1> */}
                <nav>
                    <ul>
                        <li><a href="index.html">Projects</a></li>
                        <li><a href="features.html">Skills</a></li>
                        <li><a href="docs.html">Resume</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
