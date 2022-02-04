import './productList.css';
import Product from '../product/Product';
import { products } from '../../data';
import { Typewriter} from 'react-simple-typewriter'

const ProductList = () => {
    return (
        <div className='pl'>
            <div className='pl-texts'>
                <h1 className='pl-title'>
                <Typewriter
                   loop={false}
                   cursor
                   cursorStyle='_'
                   typeSpeed={70}
                   deleteSpeed={50}
                   delaySpeed={1000}
                    words={['Create & inspire. Its Valentin']}
                />
                </h1>
                 <p className='pl-desc'>
                 Lorem Ipsum es simplemente el texto de  relleno de las imprentas y archivos de texto.
                 </p>
            </div>
            <div>
                {products.map(item => (
                 <Product key={item.id} video={item.video} name={item.name} description={item.description} github={item.github} urlHeroku={item.urlHeroku} />
                 ))}
            </div>
        </div>
    )
}

export default ProductList;