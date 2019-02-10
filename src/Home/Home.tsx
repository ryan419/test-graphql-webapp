import * as React from 'react';

import { getUserByName, getUsers, IUser } from '../user';
import './Home.scss';

interface IHomeState {
  users: string[];
  userDetail?: IUser;
}

export class Home extends React.Component<{}, IHomeState> {
  constructor(props: {}) {
    super(props);
    this.state = { users: [] };
  }

  public render() {
    if (this.state.users.length === 0) {
      return <div>Loading users...</div>
    }
    return <div>
      {this.state.users.map(user => <p
        className="user__item"
        key={user}
        onClick={this.loadUserDetail(user)}
      >
        {user}
      </p>)}
      {this.renderUserDetail()}
    </div>;
  }

  public componentWillMount = async (): Promise<void> => {
    const users = await getUsers();
    this.setState({ users });
  }

  private renderUserDetail() {
    if (!this.state.userDetail) {
      return;
    }
    const { username, password, dateCreated } = this.state.userDetail;
    return <ul>
      <li>username: {username}</li>
      <li>password: {password}</li>
      <li>date created: {dateCreated}</li>
    </ul>;
  }

  private loadUserDetail = (username: string) => async ():Promise<void> => {
    const userDetail = await getUserByName(username);
    this.setState({ userDetail });
  }

}
