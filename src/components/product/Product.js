import './product.css';
import Video from '../../img/video.webm';

const Product = ({video, link, description, name, urlHeroku, github}) => {
    return (
        <div className='p'>
            <div style={{width: '100%', margin: '20px', display: 'flex'}}>
                <a href={link} target='_blank' rel='noreferrer' style={{width: '50%'}}>
                <video autoPlay loop muted id="video" className='p-img'>
                        <source src={video} type="video/webm" />
                </video>
                </a>
                <div>
                <h2 className='p-title'>{name}</h2>
                <p className='p-desc'>{description}</p>
                <div style={{display: 'flex', justifyContent: 'center', gap: '5%', marginTop: '8%'}}>
                <a target='_blank' href={urlHeroku}>
                    <span>See project</span>
                <div class="wave"></div>
                </a>
                <a target='_blank' href={github}>
                    <span>Github</span>
                <div class="wave"></div>
                </a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Product;