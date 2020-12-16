import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// // 은진's 컴포넌트
import LoginEunjinlee from './Pages/eunjinlee/Login/Login';
import MainEunjinlee from './Pages/eunjinlee/Main/Main';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/login-eunjinlee' component={LoginEunjinlee} />
          <Route exact path='/main-eunjinlee' component={MainEunjinlee} />

          {/*<Route exact path="/login-soyoun" component={LoginSoyoun} />
          <Route exact path="/main-soyoun" component={MainSoyoun} />

          <Route exact path="/login-cecilia" component={LoginCecilia} />
          <Route exact path="/main-cecilia" component={MainCecilia} />

          <Route exact path="/login-byulyi" component={LoginByulyi} />
          <Route exact path="/main-byulyi" component={MainByulyi} />
          
          <Route exact path="/login-chaebin" component={LoginChaebin} />
          <Route exact path="/main-chaebin" component={MainChaebin} />*/}

        </Switch>
      </Router>
    )
  }
}

export default Routes
