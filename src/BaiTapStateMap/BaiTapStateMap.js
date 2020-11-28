import React, { Component } from 'react'
import './BaiTapStateMap.css';


export default class BaiTapStateMap extends Component {

    arrProduct = [
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
        imgSrc: './glassesImage/v1.png',
        display: 'none',

        name: 'GUCCI G8850U',
        price: '30$',
        desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.',
    }

    changeProduct = (id, name, price) => {
        this.setState({
            imgSrc: `./glassesImage/v${id}.png`,
            display: 'block',

            name: `${name}`,
            price: `${price}$`,

        })
    }

    changeInfor = () => {

    }



    renderProduct = () => {
        return this.arrProduct.map((product, index) => {
            return <div className="col-4" key={index}>
                <img onClick={() => {
                    this.changeProduct(product.id, product.name, product.price)
                    // document.querySelector('#showProduct').style.display = 'block';
                }} src={product.url} className="w-50 my-2" height="45" width="100" alt="123.jpg" style={{ cursor: 'pointer' }}></img>
            </div>
        })
    }



    // Main
    render() {

        const background = {
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '700px',
            // backgroundImage: 'url(./glassesImage/background.jpg)',
        }

        const model = {
            position: 'relative',

        }

        const productOnModel = {
            position: 'absolute',
            top: '110px',
            textAlign: 'center',
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: '0.8',
            display: this.state.display,

        }

        const inforOnModel = {
            position: 'absolute',
            bottom: '0px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '285px',
            height: '34%',
            backgroundColor: 'orange',
            opacity: 0.7,
            display: this.state.display,
            transition: 'all 0.5s'

        }

        const title = {
            padding: '15px',
            textAlign: 'center',
            backgroundColor: 'black',
            opacity: '0.6',
            color: 'white',
            margin: '0',
            fontSize: '25px',

        }

        const listProduct = {
            backgroundColor: 'white',
            textAlign: 'center',
            with: '75%',
            padding: '30px',
            marginTop: '10px'

        }

        // Render display
        return (
            <div className="background pd-0 mg-0" style={background}>
                <h3 style={title}>TRY GLASSES APP ONLINE</h3>
                <div className="text-center" style={model}>
                    <img className="text-center mt-3" src='./glassesImage/model.jpg' alt="123.jpg" height="370" width='285'></img>

                    <div style={productOnModel} id="showProduct">
                        <img src={this.state.imgSrc} height="45" width="170" alt='123.jpg' />
                    </div>

                    <div className = "inforOnModel" style = {inforOnModel} >
                        <h5 className = "">{this.state.name}</h5>
                        <button className="btn btn-danger">{this.state.price}</button>
                        <p>{this.state.desc}</p>
                    </div>

                </div>

                <div className="container" style={listProduct}>
                    <div className="row">
                        {this.renderProduct()}
                    </div>
                </div>

            </div>
        )
    }
}
