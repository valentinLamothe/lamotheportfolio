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
                <h1 className='a-title'>About me</h1>
                <p className='a-sub'>
                    Lorem Ipsum es simplemente el texto de  relleno de las imprentas y archivos de texto.
                </p>
                <p className='a-desc'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
                {/* <div className='a-award'>
                    <img src={Award} alt='' className='a-award-img' />
                    <div className='a-award-texts'>
                        <h4 className='a-award-title'>International Design Awards 2021</h4>
                    <p className='a-award-desc'>
                        Lorem Ipsum es simplemente el texto de relleno de las   imprentas y archivos de  texto.
                    </p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default About;