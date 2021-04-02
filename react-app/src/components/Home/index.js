import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSongs } from '../../store/songs'
import Song from '../Song'
import Artists from '../Artists'
import './Home.css'

const Home = () => {

    const dispatch = useDispatch()

    return (
        <div className = 'container'>
            <div className = 'container__left'>
                <Artists />
            </div>
            <div className = 'container__right'>
                <div className = 'content__header'> Name, Artist,
                    <div>
                        <Song />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
