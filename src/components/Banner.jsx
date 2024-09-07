
import image from '../assets/images/banner1.jpg'
const Banner = () => {
    return (
        <div>
            <img src={image} alt="" className='w-full md:h-96' />
        </div>
    );
};

export default Banner;