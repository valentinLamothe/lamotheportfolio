import './productList.css';
import Product from '../product/Product';
import { products } from '../../data';

const ProductList = () => {
    return (
        <div className='pl'>
            <div className='pl-texts'>
                 <h1 className='pl-title'>Create & inspire. It's Valentin</h1>
                 <p className='pl-desc'>
                 Lorem Ipsum es simplemente el texto de  relleno de las imprentas y archivos de texto.
                 </p>
            </div>
            <div className='pl-list'>
                {products.map(item => (
                 <Product key={item.id} img={item.img} link={item.link} />
                 ))}
            </div>
        </div>
    )
}

export default ProductList;