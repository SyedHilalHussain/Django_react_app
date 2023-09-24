import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads';


export class Form extends Component {
  state ={
    name:'',
    email:'',
    message:''
  }

  static propTypes={
    addLead :PropTypes.func.isRequired
  };
  onChange = e => this.setState({[e.target.name]: e.target.value});
  onSubmit =e=> {
    e.preventDefault();
    const{name,email,message} =this.state;
    const lead ={name,email,message};
    this.props.addLead(lead); 
  }
  render() {
    
    const { name, email, message } = this.state;
    return (
    <div className="row justify-content-around">
      <div className=' col-md-6 card card-body mt-4 mb-4 '>
      <h2>ADD LEAD</h2>
      <form onSubmit={this.onSubmit}>
          <div className="mb-3">
        <label  className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name='name' onChange={this.onChange} value={name} />
        
      </div>
      <div className="mb-3">
        <label  className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name='email' onChange={this.onChange} value={email}/>
        
      </div>
      <div className="mb-3">
        <label  className="form-label">Message</label>
        <input type="text" className="form-control" id="message"  name='message' onChange={this.onChange} value={message}/>
      </div>
     
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
    </div>
    )
  }
}

export default connect(null,{addLead})(Form)
