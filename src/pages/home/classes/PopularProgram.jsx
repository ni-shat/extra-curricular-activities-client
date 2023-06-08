
import '../../../index.css';
import SwiperCustom from './SwiperCustom';
import SwiperPrograms from './SwiperPrograms';



const PopularProgram = () => {
    return (
        <div className='font-roboto my-9'>
            <div>
                <h3 className='font-monoton opacity-10 text-gray-500'>AREA OF STUDY</h3>
            </div>
            <div>
                <h3 className='text-5xl font-medium uppercase -mt-5'>Our Popular Programs</h3>
                <h3 className='my-3 text-xl'>Cultivating Talents, Connecting Melodies, Inspiring Harmony, Shaping Musical Journeys</h3>
            </div>
            <div>
               {/* <SwiperCustom></SwiperCustom> */}
               <SwiperPrograms></SwiperPrograms>
            </div>
            <div className='mt-40'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam distinctio itaque repudiandae voluptatem, magnam quidem eaque sunt enim beatae commodi quos earum eius adipisci maiores corporis. Error nesciunt tempora earum?
            </div>
        </div>
    );
};

export default PopularProgram;