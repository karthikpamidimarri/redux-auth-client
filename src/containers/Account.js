import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';
import { SignOutButton } from 'redux-auth/bootstrap-theme';
import { createBrowserHistory } from 'history';

class Account extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Account page</PageHeader>
        <p>This page should only visible to authenticated users.</p>
        <SignOutButton next={() => createBrowserHistory.push('/')} />
      </div>
    );
  }
}

export default connect(({ auth }) => ({ auth }))(Account);
