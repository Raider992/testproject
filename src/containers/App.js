import React, { Component } from 'react';
import { connect } from "react-redux";

import { User } from '../components/user';
import { Page } from '../components/page';
import { getPhotos } from "../actions/pageActions";
import { handleLogin } from '../actions/userActions'

import './App.css';


class App extends Component {
  render() {
    const {user, page, getPhotosAction, handleLoginAction } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <Page
          photos={page.photos}
          year={page.year}
          isFetching={page.isFetching}
          getPhotos={getPhotosAction}
        />
        <User
          name={user.name}
          isFetching={user.isFetching}
          error={user.error}
          handleLogin={handleLoginAction}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    user: store.user,
    page: store.page
  }
};

const mapDispatchToProps = dispatch => ({
  getPhotosAction: year => dispatch(getPhotos(year)),
  handleLoginAction: () => dispatch(handleLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
