//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

class UsersCount extends React.Component {

  constructor(props) {
    super(props);
    this.state = {usersOnline:[]};
  }

  componentDidMount() {
    this.fetch();
    setInterval(function() {
      this.fetch();
    }.bind(this), 5000);
  }

  fetch() {
    fetch("/rest/state/status",
    {credentials: 'include'})
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      this.setState({usersOnline: _.filter(json, (item) => {  return item.userId.indexOf('mypharma.vie') === -1})});
    })
  }

  render() {
    var usersCount = this.state.usersOnline.length;
    return (<div className="usersCountContainer">
    <a href="/portal/intranet/usersonline">
    <div className="usersCount">
    <div className="count">{usersCount}</div>
    <br/>
    <div className="count-label">Online Users</div>
    </div>
    </a>
    </div>);
  }

}

ReactDOM.render(<UsersCount />, document.getElementById('usercountapp'));
