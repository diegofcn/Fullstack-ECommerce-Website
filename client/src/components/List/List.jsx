import React from 'react'
import Card from '../Card/Card'
import './List.scss'

const List = () => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve",
            isNew: true,
            oldPrice: 19,
            price: 12

        },
        {
            id: 2, 
            img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Coat",
            isNew: true,
            oldPrice: 19,
            price: 12
            
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Jeans",
            isNew: false,
            oldPrice: 20,
            price: 13
            
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Shirt",
            isNew: false,
            oldPrice: 9,
            price: 5
            
        }
    ]

  return (
    <div className='list'>{data?.map(item =>(
        <Card item={item} key={item.key} />
    ))}</div>
  )
}

export default List