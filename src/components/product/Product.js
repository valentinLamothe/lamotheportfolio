import './product.css';
import Video from '../../img/video.webm';

const Product = ({ video, link, description, name, urlHeroku, github }) => {
    return (
        // <div className='p'>
        //     <div style={{width: '100%', display: 'flex'}}>
        //         <video autoPlay loop muted id="video">
        //                 <source src={video} type="video/webm" />
        //         </video>
        //         <div>
        //         <h2 className='p-title'>{name}</h2>
        //         <p className='p-desc'>{description}</p>
        //         <div style={{display: 'flex', justifyContent: 'center', gap: '5%', marginTop: '8%'}}>
        //         <a target='_blank' href={urlHeroku}>
        //             <span>See project</span>
        //         <div class="wave"></div>
        //         </a>
        //         <a target='_blank' href={github}>
        //             <span>Github</span>
        //         <div class="wave"></div>
        //         </a>
        //         </div>
        //         </div>
        //     </div>
        // </div>
        <div className='p-container'>
            <div className='p-box'>
                <video autoPlay loop muted id="video" className='video'>
                    <source src={video} type="video/webm" />
                </video>
                <div className='p-content-box'>
                    <p className='p-name'>{name}</p>
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