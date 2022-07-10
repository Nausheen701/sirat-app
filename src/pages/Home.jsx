import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import CategoryItem from '../components/CategoryItem'
import Categories from '../components/Categories'
import styled from 'styled-components'

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <CategoryItem />
        </div>
    )
}

export default Home
