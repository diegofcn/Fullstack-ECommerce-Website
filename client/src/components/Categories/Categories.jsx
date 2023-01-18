import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.scss'

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="assets/beanie.webp" alt="" />
                <button>
                    <Link className='link' to="/products/1">Beanies</Link>
                </button>
            </div>
            <div className="row">
            <img src="assets/zipped.webp" alt="" />
                <button>
                    <Link className='link' to="/products/1">Zipped</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src="assets/jute.webp" alt="" />
                <button>
                    <Link className='link' to="/products/1">Mare Viva</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="assets/hoodie.webp" alt="" />
                <button>
                    <Link className='link' to="/products/1">Hoodies</Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="assets/fluff.webp" alt="" />
                <button>
                    <Link className='link' to="/products/1">Square</Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img src="assets/longbag.webp" alt="" />
                <button>
                    <Link className='link' to="/products/1">Dory</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories