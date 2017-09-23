import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';
import { EmailSignInForm } from 'redux-auth/bootstrap-theme';
import { createBrowserHistory } from 'history';

class SignIn extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Sign In First</PageHeader>
        <p>Unauthenticated users can't access the account page.</p>
        <EmailSignInForm next={() => createBrowserHistory.push('/account')} />
      </div>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(SignIn);
