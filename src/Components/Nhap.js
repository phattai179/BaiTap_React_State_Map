import React, { Component } from 'react'
import './nhap.css';

export default class Nhap extends Component {

    arr = [
        { id: 1, price: 30, name: 'GUCCI G8850U', url: './glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 2, price: 50, name: 'GUCCI G8759H', url: './glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 4, price: 30, name: 'DIOR D6005U', url: './glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 5, price: 30, name: 'PRADA P8750', url: './glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 6, price: 30, name: 'PRADA P9700', url: './glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 7, price: 30, name: 'FENDI F8750', url: './glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 8, price: 30, name: 'FENDI F8500', url: './glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 9, price: 30, name: 'FENDI F4300', url: './glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    ];

    state = {
        url: './glassesImage/v2.png',
        display: 'none',

        name: 'GUCCI G8850U',
        price: '30$',
        desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.',
    };

    changePD = (id, name, price) => {
        this.setState({
            url: `./glassesImage/v${id}.png`,
            display: 'block',

            name: `${name}`,
            price: `${price}$`
        })
    }

    // Render Option Product

    renderProduct = () => {
        let arrJPX = this.arr.map((product, index) => {
            return <img onClick={() => {
                this.changePD(product.id, product.name, product.price)
            }} alt='123.jpg' width="180" height="45" src={product.url} key={index} className='productRender'>

            </img>
        })
        return arrJPX
    }


    render() {
        return (
            <div className="main">
                <h3 className="titleMain" >TRY GLASSES APP ONLINE</h3>
                <div className="modelMain">
                    <img src="./glassesImage/model.jpg" width="300px" height="390" alt='123.jpg'></img>

                    <img className="productModel" src={this.state.url} alt='123.jpg' width="180" height="45" style={{ display: this.state.display }}></img>

                    <div className="information" style = {{display: this.state.display}}>
                        <h4>{this.state.name}</h4>
                        <button className = 'btn btn-success'>{this.state.price}</button>
                        <p>{this.state.desc}</p>
                    </div>
                </div>

                <div className='optionProduct container'>
                    {this.renderProduct()}
                </div>


            </div>
        )
    }
}
