import './about.css';
import Habit from '../../img/habit.jpg';

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src={Habit}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className='a-right'>
                <h1 className='a-title'>Let me tell you something about me</h1>
                <p className='a-desc'>I am passionate about Mobile Apps. I work hard and I love to learn.
                                      I am currently a graduate of MindHub and Digital House where I do a lot of group and individual projects.
                                      I am looking for the right opportunity to work in an environment that will help me progress as a developer.</p>
            </div>
        </div>
    )
}

export default About;