import React, { Component } from 'react';
import styled from 'styled-components';

// Component Style
const FormBlock = styled.div`
  border: 5px solid #199fff;
  padding: 10px;
`;

const ButtonForm = styled.button`
  font-size: 16px;
  color: #fff;
  background-color: #5dcb7f;

  &:hover {
    opacity: 0.8;
  }
`;

class Form extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    formMessage: "We'll call you",
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      name: '',
      email: '',
      phone: '',
      formMessage: "ROGER THAT! We'll call you asap.."
    });
  }

  render() {
    return (
      <FormBlock class="col-xs-12 col-md-4">
        <h4>{this.state.formMessage}</h4>
        <p>To book or learn more, leave your details below and we will call you shortlyyy</p>
        <form onSubmit={e => this.onSubmit(e)} class="inline-validate" >
          <div class="form-group">
            <label for="">Full name</label>
            <input
              required="required"
              placeholder='eg: Alberto Ferioli'
              value={this.state.name}
              onChange={e => this.setState({name: e.target.value})}
              class="form-control"
              type="text"/>
          </div>
          <div class="form-group">
            <label for="partner_lead_email">Email address</label>
            <input
              required="required"
              placeholder='eg: example@example.com'
              value={this.state.email}
              onChange={e => this.setState({email: e.target.value})}
              class="form-control"
              type="email"/>
          </div>
          <div class="form-group">
            <label for="partner_lead_phone">Phone number</label>
            <input
              required="required"
              placeholder="eg: 000 1234 5678"
              value={this.state.phone}
              onChange={e => this.setState({phone: e.target.value})}
              class="form-control"
              type="number"/>
          </div>
          <div class="form-group">
            <label for="partner_lead_email">Where was your license issued?</label>
            <select required="required" class="form-control" aria-required="true">
              <option value="">Please select...</option>
              <option value="London">London</option>
              <option value="Brighton">Brighton</option>
              <option value="Manchester">Manchester</option>
              <option value="Berlin">Berlin</option>
            </select>
          </div>
          <ButtonForm class="btn btn-lg btn-block">Request a call back</ButtonForm>
        </form>
      </FormBlock>
    );
  }
}

export default Form;
