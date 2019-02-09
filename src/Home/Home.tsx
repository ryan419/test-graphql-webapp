import * as React from 'react';

import { getUsers, IUser } from '../user';
import './Home.scss';

interface IHomeState {
  users: IUser[];
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
      {this.state.users.map(user => <p key={user.username}>{user.username}</p>)}
    </div>;
  }

  public componentWillMount = async (): Promise<void> => {
    const users = await getUsers();
    this.setState({ users });
  }

}
