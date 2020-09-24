import React, {Component} from 'react';
import {Button, Label, Col, Row} from 'reactstrap';
import Header from './HeaderComponent';
class Contact extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            contactRadios: '',
            contactType: '',
            feedback: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) =>
    {this.setState({[event.target.name]: event.target.value});}

    handleSubmit(event)
    {  
         if(this.state.contactRadios === "Yes" && this.state.contactType === "")
            alert("Select a Contact Type.")
        else
        {
            
            alert("Info Submitted: \nFirst Name: " + this.state.firstName + "\n" +
                                "Last Name: " + this.state.lastName + "\n" +
                                "Phone Number: " + this.state.phoneNum + "\n" +
                                "Email: " + this.state.email + "\n" +
                                "Contact?: " + this.state.contactRadios +  "\n" +
                                "Contact Type: " + this.state.contactType + "\n" +
                                "Feedback: " + this.state.feedback) 
            
            window.location.reload();
        }
        this.setState({firstName: ''})
        event.preventDefault();        
    }

    render()
    {
        return(
        <React.Fragment>
            <Header/>
            <div className="container page">
                <Row className="row row-content">
                    <Col className="col-12">
                        <h1>Send us your Feedback</h1>
                    </Col>
                </Row>
                <Row style={{padding: 25}}>
                    <Col className="col-md-10">
                        <form onSubmit={this.handleSubmit}>
                            <Row className="form-group">
                                <Label htmlFor="firstName" md={2} className="col-form-Label"><h3>First Name</h3></Label>
                                <Col md={10}>
                                    <h3><input 
                                            onChange={this.handleChange}
                                            type="text" className="form-control" 
                                            id="firstName" name="firstName" 
                                            placeholder="First Name" />
                                    </h3>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastName" md={2} className="col-form-Label"><h3>Last Name</h3></Label>
                                <Col md={10}>
                                    <h3><input onChange={this.handleChange} type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name" /></h3>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="areaCode" md={2} className="col-form-Label"><h3>Contact Tel.</h3></Label>
                                <Col>
                                    <h3><input onChange={this.handleChange} type="tel" className="form-control" name="phoneNum" placeholder="Phone Number" /></h3>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2} className="col-form-Label"><h3>Email</h3></Label>
                                <Col md={10}>
                                    <h3><input onChange={this.handleChange} type="email" className="form-control" id="email" name="email" placeholder="Email" /></h3>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col xs={5} className="offset-md-2">
                                    <h3>May we contact you?
                                        <div className="form-check form-check-inline">
                                            <input type="radio" onChange={this.handleChange} className="form-check-input" id="contactYes" name="contactRadios" value="Yes" />
                                            <Label htmlFor="contactYes" className="form-check-Label">Yes</Label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input type="radio" onChange={this.handleChange} className="form-check-input" id="contactNo" name="contactRadios" value="No" />
                                            <Label htmlFor="contactNo" className="form-check-Label">No</Label>
                                        </div>
                                    </h3>
                                </Col>
                                <Col>
                                <h3>
                                    <select onChange={this.handleChange} className="form-control" name="contactType">
                                        <option>...Select</option>
                                        <option>By Phone</option>
                                        <option>By Email</option>
                                    </select>
                                </h3>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="feedback" md={2} className="col-form-Label"><h3>Feedback</h3></Label>
                                    <Col md={10}>
                                        <h3><textarea onChange={this.handleChange} className="form-control" id="feedback" name="feedback" rows="8"></textarea></h3>
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
        </React.Fragment>
        )
    }
}

export default Contact;