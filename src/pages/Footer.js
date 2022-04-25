import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
            <div style={{
                marginTop:"150px",
                width:"90%",
                height:'60px'
            }} className='container'>
                {/*<Container>*/}

                    <Row style={{height:'60px'}}>
                        <Col sm></Col>
                        <Col sm>جميع الحقوق محفوظة</Col>
                        <Col sm></Col>
                    </Row>
                {/*</Container>*/}
            </div>
        );
    }
}

export default Footer;