import React from 'react';
import { withRouter } from "react-router-dom";
import Directory from '../../components/directory/directory';
import './homepage.scss';

const HomePage = ({ history }) => {
  return <div className='homepage'>
    <Directory />
  </div>;
}
export default withRouter(HomePage);

