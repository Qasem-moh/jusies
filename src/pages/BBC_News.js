import React, {Component} from 'react';
import axios   from "axios";
import {Card, Col, Container, Row} from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
class BbcNews extends Component {
    state={
        data:[]
    }
    componentDidMount() {

        // axios.get("https://jsonplaceholder.typicode.com/posts")
        // axios.get("https://newsapi.org/v2/top-headlines?country=ua&apiKey=398a122378434b528b1bb97dd9b712cb")
            axios.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=033f8eb6abbb4481a8d57b7c2c6c1ee0")
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
            <Container style={{width:'80%', marginTop:'25px',justifyContent:'center'}}>
                <Row>
                    {this.state.data.map((item,index)=>{
                        return(
                            <Col md={5} style={{margin:'5px 5px'}}>
                                <Card style={{ width: '30rem' }}>
                                    <Card.Img variant="top" src={item.urlToImage} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                        <Button variant="warning"><a href={item.url}>قراءة المزيد</a> </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        );
    }
}
export default BbcNews;