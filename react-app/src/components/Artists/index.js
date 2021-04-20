import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as artistActions from '../../store/artists'
import './Artists.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel, CarouselProvider } from 'react-responsive-carousel';

const Artists = () => {
    const artists = useSelector(state => Object.values(state.artists))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(artistActions.getAllArtists())

    }, [dispatch])

    const carousel = (artists) => {
        console.log('//////////',artists)
    }

carousel()
    return (
             <div className = 'artist__info'>
                 <CarouselProvider
                    totalSlides={2}
                    isIntrinsicHeight={true}
                    isIntrinsicWidth={true}
                    isPlaying={true}
                    infinite={true}
                    dragStep={1}
                    step={1}
                    interval={7000}>
                    <ButtonBack className = 'slider__left'>
                        <i className="fas fa-angle-double-left d"></i>
                    </ButtonBack>
                        <Slider className = 'slider'>
                            {artists.map(artist => (
                                    <div className = 'single_artist'>
                                        <Slide className ='slide'>
                                            <a href = {`artists/${artist.id}`} className = 'single__artist'>
                                                <img className='single_img' alt = 'artistimg' src = {artist.img}></img>
                                                <div className ='artistname'><strong>{artist.name}</strong></div>
                                            </a>
                                            </Slide>
                                    </div>
                                ))}
                        </Slider>
                    <ButtonNext className = 'slider__right'>
                        <i className="fas fa-angle-double-right d"></i>
                    </ButtonNext>
                </CarouselProvider>
        </div>
    )
}


export default Artists
