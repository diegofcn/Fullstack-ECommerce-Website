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
            Tudo começou como qualquer grupo de Skaters. Andar de skate juntos pelas ruas de Lisboa desde 2006, filmar videos de skate, ir a campeonatos e ir em Tour na nossa carrinha era tudo o que fazíamos juntos e começamos assim a ser conhecidos em Portugal.
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