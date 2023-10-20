import PropTypes from 'prop-types';
import Swal from 'sweetalert2';


const WeAreCard = ({ cardData }) => {
    const { description, address, img } = cardData;

    const handleModal = () => {
        Swal.fire(
            'Good job!',
            'map!',
            'success'
        )
    }
    return (
        <div>
            <div className="card lg:w-96 w-80 bg-base-100 shadow-2xl mx-auto border-2">
                <div className="card-body">
                    <div className='flex items-center gap-4'>
                        <h2 className="card-title inline tracking-[0px] md:text-lg lg:text-xl text-base"><span className='underline'>Our Address : <br /></span> {address}</h2>
                        <button onClick={handleModal} className='btn btn-outline btn-warning hidden lg:inline-block'>Go map !</button>
                    </div>
                    <p className='h-[70px] lg:h-[50px] text-sm text-justify overflow-hidden md:overflow-visible'>{description}</p>
                    <button onClick={handleModal} className='btn btn-outline btn-warning block lg:hidden mt-2'>Go map !</button>
                </div>
                <figure ><img src={img} className='h-56 w-full' alt="Shoes" /></figure >
            </div>
        </div>
    );
};

export default WeAreCard;

WeAreCard.propTypes = {
    cardData: PropTypes.any
}