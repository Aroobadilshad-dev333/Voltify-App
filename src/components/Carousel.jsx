import React, { useEffect } from 'react'
import { useData } from '../context/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Category from './Category';

const Carousel = () => {
    const { data, fetchAllProducts } = useData()
    console.log(data);

    useEffect(() => {
        fetchAllProducts()
    }, [])

    const SamplePrevArrow = (props) => {
        const {className, style, onClick} = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}}>
                <AiOutlineArrowLeft
                  className='h-10 w-10 m-[1px]'
                  style={{...style, display: "block", borderRadius:"50px", background:"#f53347" , color:"white" , position:"absolute", padding:"2px", left:"50px"}}
                />
            </div>
        )
    }
    const SampleNextArrow = (props) => {
        const {className, style, onClick} = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`}>
                <AiOutlineArrowRight
                  className='h-10 w-10 m-[1px]'
                  style={{...style, display: "block", borderRadius:"50px", background:"#f53347" , color:"white" , position:"absolute", padding:"2px", right:"50px"}}
                />
            </div>
        )
    }

    var settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed:2000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover:false,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
    };

    return (
        <div>
            <Slider {...settings}>
                {
                    data?.slice(0,7)?.map((item, index) => {
                        return <div key={index} className='bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 -z-10'>
                            <div className='flex flex-col md:flex-row gap-8 md:gap-12 justify-center md:h-[560px] min-h-[420px] my-10 md:my-0 items-center px-4'>
                                <div className='md:space-y-6 space-y-3 max-w-xl text-center md:text-left'>
                                    <h3 className='text-red-400 font-semibold font-sans text-xs md:text-sm tracking-[0.2em] uppercase'>Powering Your World with the Best in Electronics</h3>
                                    <h1 className='md:text-4xl text-2xl font-bold md:w-[520px] text-white leading-tight'>{item.title}</h1>
                                    <p className='md:w-[520px] text-gray-300/90 text-sm md:text-base mt-2 line-clamp-3 md:line-clamp-none'>{item.description}</p>
                                    <button className='inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full cursor-pointer mt-4 text-sm md:text-base'>
                                      Shop Now
                                      <span className='text-lg'>→</span>
                                    </button>
                                </div>
                                <div className='flex justify-center md:justify-end w-full'>
                                    <img src={item.image} alt={item.title} className='rounded-3xl w-56 sm:w-72 md:w-[420px] lg:w-[520px] hover:scale-105 transition-all shadow-[0_25px_60px_rgba(248,113,113,0.55)] bg-slate-900/40 p-4 md:p-6'/>
                                </div>
                            </div>
                        </div>
                    })
                }              
            </Slider>
            <Category/>
        </div>
    )
}

export default Carousel
