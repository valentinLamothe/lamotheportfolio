import './native.css';
import { Typewriter} from 'react-simple-typewriter'
import { proyectsMobile } from '../../dataMobile';

const Native = () => {
    return (
        <div className='n-container'>
            <h1 className='n-title'>
                <Typewriter
                    loop={false}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                        words={['MOBILE PROJECTS']}
                    />
            </h1>
            <div>
                {proyectsMobile.map(item => (
                    <div className='n-info-container'>
                    <video autoPlay loop muted id="video" className='n-video'>
                        <source src={item.video} type="video/webm" />
                    </video>
                    <div className='n-p-contain'>
                    <p className='n-name'>{item.name}</p>
                    <p>{item.description}</p>
                    <div style={{display: 'flex', justifyContent: 'center', gap: '5%', marginTop: '8%'}}>
                    <a target='_blank' href={item.urlHeroku}>
                        <span>See project</span>
                    <div class="wave"></div>
                    </a>
                    <a target='_blank' href={item.github}>
                        <span>Github</span>
                    <div class="wave"></div>
                    </a>
                </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )    
}

export default Native