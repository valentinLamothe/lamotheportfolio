import "./intro.css";
import Me from '../../img/fotoLinkedin.png';

const Intro = () => {
  return (
      <div className="i">
          <div className='i-left'>
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My name is</h2>
            <h1 className="i-name">Valentin Lamothe</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web and Mobile Developer</div>
                <div className="i-title-item">Nose que poner</div>
                <div className="i-title-item">Gym Athlete</div>
                <div className="i-title-item">Nose que poner</div>
                <div className="i-title-item">Nose que poner</div>
              </div>
            </div>
            <p className="i-desc">
            My name is Valentín Lamothe, Web and Mobile Full Stack Developer MERN.
            <br></br>
            I am a persevering, hardworking person and always yearning to acquire knowledge and experiences that help me improve myself.
            </p>
          </div>
          <div class='scrolldown' >
          <div class="chevrons">
            <div class='chevrondown'></div>
            <div class='chevrondown'></div>
          </div>
        </div>
          </div>
          <div className='i-right'>
            <div className="i-bg"></div>
            <img src={Me} alt="" className="i-img" />
          </div>
      </div>
  )
};

export default Intro;
