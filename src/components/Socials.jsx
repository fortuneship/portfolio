import {SocialData} from '../data/social'

const Socials = () => {
    const data = SocialData;
    return (
        <div className="social-contact my-2">
      {data.map((item) => {
        return (
          <a href={item.link}>
            <div className="social-icon-div">
              <img src={item.icon} className="social-icon" />
            </div>
          </a>
        );
      })}
    </div>
    )
}

export default Socials
