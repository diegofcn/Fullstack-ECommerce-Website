import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"

const Cart = () => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve",
            desc: "Long Sleeve bla bla bla ",
            isNew: true,
            oldPrice: 19,
            price: 12

        },
        {
            id: 2, 
            img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Coat",
            desc: "Coat bla bla bla",
            isNew: true,
            oldPrice: 19,
            price: 12
            
        },
    ]
  return (
    <div className='cart'>
        <h1>Products in your Cart</h1>
        {data?.map(item => (
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0, 100)}</p>
                    <div className="price">1 x ${item.price}</div>
                </div>
                <DeleteOutlinedIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>Proceed to checkout</button>
        <span className='reset'>reset Cart</span>
    </div>
  )
}

export default Cart