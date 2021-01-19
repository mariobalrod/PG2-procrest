import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Landing from '../Views/Landing';
import About from '../Views/About';
import Apartments from '../Views/Apartments';
import Cities from '../Views/Cities';
import Categories from '../Views/About';

import Profile from '../Views/Profile';

import useConnect from './connect';
import { useLoading, ThreeDots } from '@agney/react-loading';
import Loader from '../../components/Loader';
import Topbar from '../Shared/Topbar';   
import Login from '../Shared/Modals/Login';   
import Register from '../Shared/Modals/Register';   
import Footer from '../../components/Footer';

const Root = () => {
  const { isLoading, me } = useConnect();
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <ThreeDots width="100" style={{ color: 'white' }} />,
  });

  if (isLoading) return <Loader indicator={indicatorEl} containerProps={containerProps} />;
  

  return (
    <>
      <Topbar user={me} />
      <Register />
      <Login />

      <Switch>
        <Route component={Landing} exact path="/" />
        <Route component={Cities} exact path="/cities" />
        <Route component={About} exact path="/about" />
        <Route component={Categories} exact path="/categories" />
        <Route component={Apartments} exact path="/apartments" />
        <Route component={Profile} exact path="/profile" />

        <Redirect to="/" />
      </Switch> 
      
      <Footer/>
    </>
  );
}

export default Root
