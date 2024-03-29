import React, { Component , Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import messages from '../../reducers/messages';

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        messages: PropTypes.object.isRequired,

    }
    componentDidUpdate(prevProps){
        const { error,alert,message } = this.props;

        if (error !== prevProps.error){
           if(error.msg.name){alert.error(`Name: ${error.msg.name.join()}`);}
           if(error.msg.email){alert.error(`Email: ${error.msg.email.join()}`);}
           if(error.msg.message){alert.error(`Message: ${error.msg.message.join()}`);

        }
        if(message !== prevProps.message){if(message.deleteLead){
            alert.success(message.deleteLead);
        }}

        }
       
      
    }
  render() {
    return <Fragment />;
  }
}
const mapStateToProps = state => ({
    error:state.errors,
    messages:state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
