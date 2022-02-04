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
                    words={['WEB PROJECTS']}
                />
                </h1>
            <div>
                {products.map(item => (
                 <Product key={item.id} video={item.video} name={item.name} description={item.description} github={item.github} urlHeroku={item.urlHeroku} />
                 ))}
            </div>
            </div>
        </div>
    )
}

export default ProductList;