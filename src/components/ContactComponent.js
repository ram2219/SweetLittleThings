import React, {Component} from 'react';
import {Button, Label, Col, Row} from 'reactstrap';
class Contact extends Component
{
    render()
    {
        return(
            <div className="container">
                <Row className="row row-content">
                    <Col className="col-12">
                        <h2>Send us your Feedback</h2>
                    </Col>
                </Row>
                <Row style={{padding: 25}}>
                    <Col className="col-md-10">
                        <form>
                            <Row className="form-group">
                                <Label for="firstName" md={2} className="col-form-Label"><h3>First Name</h3></Label>
                                <Col md={10}>
                                    <h3><input type="text" className="form-control" id="firstName" name="firstName" placeholder="First Name" /></h3>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label for="lastName" md={2} className="col-form-Label"><h3>Last Name</h3></Label>
                                <Col md={10}>
                                    <h3><input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name" /></h3>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label for="areaCode" md={2} className="col-form-Label"><h3>Contact Tel.</h3></Label>
                                <Col xs={5} md={3}>
                                    <h3><input type="tel" className="form-control" id="areaCode" name="areaCode" placeholder="Area code" /></h3>
                                </Col>
                                <Col xs={7}>
                                    <h3><input type="tel" className="form-control" name="telNum" placeholder="Tel. number" /></h3>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label for="email" md={2} className="col-form-Label"><h3>Email</h3></Label>
                                <Col md={10}>
                                    <h3><input type="email" className="form-control" id="email" name="email" placeholder="Email" /></h3>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col className="offset-md-2">
                                    <h3>May we contact you?
                                        <div className="form-check form-check-inline">
                                            <input type="radio" className="form-check-input" id="contactYes" name="contactRadios" value="yes" />
                                            <Label for="contactYes" className="form-check-Label">Yes</Label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input type="radio" className="form-check-input" id="contactNo" name="contactRadios" value="no" />
                                            <Label for="contactNo" className="form-check-Label">No</Label>
                                        </div>
                                    </h3>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label for="feedback" md={2} className="col-form-Label"><h3>Feedback</h3></Label>
                                    <Col md={10}>
                                        <h3><textarea className="form-control" id="feedback" name="feedback" rows="8"></textarea></h3>
                                    </Col>                            
                            </Row>
                            <Row className="form-group">
                                <Col md={10} className="offset-md-2">
                                    <Button id="submitFB" type="submit"><h3>Send Feedback</h3></Button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Contact;