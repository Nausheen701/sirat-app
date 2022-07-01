import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import CategoryItem from '../components/CategoryItem'

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <CategoryItem />
        </div>
    )
}

export default Home
