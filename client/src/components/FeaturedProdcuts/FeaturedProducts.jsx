import React from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'
import useFetch from '../../hooks/useFetch'

const FeaturedProducts = ({type}) => {

    const {data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

  return (
    <div className='featuredProducts'>
        
        <div className="top">
            <h1>{type} products</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Fugiat, quaerat, possimus incidunt at maiores magnam illo facilis porro, 
                ex commodi vero voluptatem ipsam! Commodi laborum fugit consectetur unde nisi aut!
            </p>
        </div>
        <div className="bottom">
            {error ? "Something went wrong!" : loading ? "loading" : data?.map(item => (
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts