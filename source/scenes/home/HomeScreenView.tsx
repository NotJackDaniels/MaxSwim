import React from 'react';
import {FlatList, Text} from 'react-native';
import {ContactView} from '../../components/Contact';
import HomeScreenPresenter, {
  HomeScreenViewInterface,
} from './HomeScreenPresenter';

interface user {
  surname: string;
  name: string;
  lessons: number;
}

interface Props {
  presenter: HomeScreenPresenter;
}

interface State {
  counterText: string;
  users: any | null;
}

export default class HomeScreenView
  extends React.Component<Props, State>
  implements HomeScreenViewInterface {
  private readonly presenter: HomeScreenPresenter;

  constructor(props: Props) {
    super(props);

    this.presenter = this.props.presenter;
    this.presenter.view = this;

    this.state = {
      counterText: '',
      users: null,
    };
  }

  componentDidMount() {
    this.presenter.didMount();
  }

  updateCounterText(text: string) {
    this.setState({counterText: text});
  }

  setUsers(users: any) {
    this.setState({users: users});
    console.warn(users);
  }

  renderItem({item}: {item: user}) {
    return (
      <ContactView
        surname={item.surname}
        name={item.name}
        lessons={item.lessons}
      />
    );
  }

  render() {
    return (
      <>
        {this.state.users ? (
          <FlatList
            data={this.state.users}
            renderItem={(item) => this.renderItem(item)}
            keyExtractor={(item, index) => `item-${index}`}
          />
        ) : (
          <Text>no</Text>
        )}
      </>
    );
  }
}
