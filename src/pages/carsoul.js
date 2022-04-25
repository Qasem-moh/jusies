import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import axios from "axios";

class Carsoul extends Component {
    state={
        data:[]
    }
    componentDidMount() {

        // axios.get("https://jsonplaceholder.typicode.com/posts")
        axios.get("https://newsapi.org/v2/top-headlines?country=ua&apiKey=398a122378434b528b1bb97dd9b712cb")
        // axios.get("https://newsapi.org/v2/top-headlines?sources=google-news-sa&apiKey=033f8eb6abbb4481a8d57b7c2c6c1ee0\n")
            .then(res=>{

                {

                    res.data.articles.map((item,index)=>{
                        this.setState({
                            data:this.state.data.concat(item)
                        })
                    })
                }
                // this.setState({data:res.data.articles})
            })
    }
    render() {
        return (
            <div style={{ display: 'block', width: 1300, padding: 30 ,alignContent:"center",marginLeft:'280px'}}>
                {/*<h4>React-Bootstrap Carousel Component</h4>*/}
                <Carousel>
                    {
                        this.state.data.map((item,index)=>{
                            return(
                                <Carousel.Item key={index}>
                                    <img
                                        className=" w-70 h-60"
                                        src={item.urlToImage}
                                        alt="First slide"
                                    style={{
                                        minHeight:"630px",
                                        minWidth:"1200px"
                                    }}/>
                                    <Carousel.Caption>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })
                    }

                </Carousel>
            </div>
        );
    }
}

export default Carsoul;