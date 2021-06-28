import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../resorces/colors';
import {NavigatorParamList} from '../../resorces/NavigatorParamList';
import UserDetailsPresenter, {
  UserDetailsScreenInterface,
} from './userDetailsPresenter';
import BackArrow from '../../resorces/images/backArrowWhite.svg';
import CardPresenter from '../card/CardPresenter';
import {StudentCard} from '../card/CardView';
import strings from '../../resorces/strings';
import {textStyles} from '../../resorces/textStyles';
import {TelephoneInfo} from '../../components/TelephoneInfo';
import {ToggleButton} from '../../components/ToggleButton';
import Modal from 'react-native-modal';
import {Input} from '../../components/Input';
import {RadioButtons} from '../../components/RadioButtons';
import {FilledButton} from '../../components/FilledButton';
import SwipeIcon from '../../resorces/images/swipeIcon.svg';
import {addLessons} from '../../resorces/lessonsNumber';

interface Props {
  presenter: UserDetailsPresenter;
  navigation: StackNavigationProp<NavigatorParamList, 'userDetails'>;
  route: RouteProp<NavigatorParamList, 'userDetails'>;
}

interface State {
  date: any;
  visible: boolean;
  lessons: number;
  inputLessons: string;
}

interface Telephone {
  name: string;
  number: string;
  isMain: boolean;
}

export default class UserDetailsScreen
  extends React.Component<Props, State>
  implements UserDetailsScreenInterface {
  private readonly presenter: UserDetailsPresenter;
  constructor(props: Props) {
    super(props);
    this.presenter = this.props.presenter;
    this.presenter.view = this;
    this.state = {
      date: null,
      visible: false,
      lessons: 0,
      inputLessons: '',
    };
  }

  componentDidMount() {
    this.presenter.setDate(this.props.route.params.user.date);
  }

  setDate = (date: any) => {
    this.setState({date: date});
  };

  toggleModal = () => {
    this.setState({visible: !this.state.visible});
  };

  private createCard = (): React.ReactNode => {
    let presenter = new CardPresenter(this.presenter.getDependencies());
    const user = this.props.route.params?.user;
    return <StudentCard user={user} presenter={presenter} />;
  };

  onChangeHandle = (value: number) => {
    this.setState({lessons: value});
    this.setState({inputLessons: ''});
  };

  changeLessons = (value: string) => {
    this.setState({inputLessons: value});
    let parseValue = parseInt(value);
    this.setState({lessons: parseValue});
  };

  renderTelephone({item}: {item: Telephone}) {
    return (
      <>
        <TelephoneInfo
          name={item.name}
          telephone={item.number}
          isMain={item.isMain}
          removable={true}
          telephoneTypeLocationRight={true}
        />
        <View style={styles.separator} />
      </>
    );
  }

  render() {
    const user = this.props.route.params?.user;
    return (
      <ScrollView style={styles.holeContent}>
        <View style={styles.navBar}>
          <TouchableOpacity>
            <BackArrow width={24} height={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.cardBackground} />
        <View style={styles.content}>
          <View style={styles.card}>{this.createCard()}</View>
          <View style={styles.contentPart}>
            <Text style={[textStyles.bodyBold, styles.topic]}>
              {strings.userDetails.information}
            </Text>
            <Text style={textStyles.body}>{user.note}</Text>
          </View>
          <View style={styles.contentPart}>
            <Text style={[textStyles.bodyBold, styles.topic]}>
              {strings.userDetails.birthday}
            </Text>
            <Text style={textStyles.body}>{this.state.date}</Text>
          </View>
          <View style={styles.contentPart}>
            <Text style={[textStyles.bodyBold, styles.topic]}>
              {strings.userDetails.telephones}
            </Text>
            <FlatList
              data={user.telephones}
              renderItem={(item) => this.renderTelephone(item)}
              keyExtractor={(item, index) => `item-${index}`}
            />
          </View>
          <View style={[styles.row, styles.contentPart]}>
            <Text style={[textStyles.bodyBold, styles.topic]}>
              {strings.userDetails.history}
            </Text>
            <TouchableOpacity style={styles.allSubscriptions}>
              <Text
                style={[textStyles.footNote, styles.allSubscriptionsTextColor]}>
                {strings.userDetails.all}
              </Text>
            </TouchableOpacity>
          </View>
          <ToggleButton
            style={styles.addSubscription}
            onPress={this.toggleModal}
            buttonText={strings.addLearner.addNumber}
            textStyle={textStyles.bodyBold}
          />
          <Modal isVisible={this.state.visible} style={styles.modalWindow}>
            <View style={styles.modal}>
              <View style={styles.swipe}>
                <TouchableOpacity onPress={this.toggleModal}>
                  <SwipeIcon height={4} width={32} />
                </TouchableOpacity>
              </View>
              <View style={styles.container}>
                <Text style={[styles.formHeading, textStyles.title3]}>
                  {strings.userDetails.addSubscription}
                </Text>
              </View>
              <ScrollView
                style={styles.row}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <RadioButtons
                  value={this.state.lessons}
                  setNewValue={this.onChangeHandle}
                  addLessons={addLessons}
                />
              </ScrollView>
              <View style={styles.container}>
                <Input
                  placeholder={strings.addLearner.lessonsNumber}
                  value={this.state.inputLessons}
                  onChangeHandle={(value: string) => this.changeLessons(value)}
                  marginBottom={0}
                  keyboardType={'numeric'}
                  errorType={'no'}
                  hasErrors={() => false}
                />
              </View>
              <View style={styles.container}>
                <FilledButton
                  onPress={this.presenter.addSubscription}
                  buttonText={strings.addLearner.createContact}
                  Style={styles.filledButton}
                  textColor={colors.Base1}
                  textStyle={textStyles.bodyBold}
                />
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  holeContent: {
    flex: 1,
    backgroundColor: colors.Base1,
  },
  navBar: {
    height: 56,
    backgroundColor: colors.Accent,
    padding: 16,
  },
  content: {
    paddingHorizontal: 16,
  },
  cardBackground: {
    position: 'absolute',
    width: '100%',
    backgroundColor: colors.Accent,
    height: 104,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    top: 56,
  },
  card: {
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
  topic: {
    color: colors.Shade4,
    marginBottom: 8,
  },
  contentPart: {
    marginBottom: 32,
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.Base1,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    height: 252,
  },
  separator: {
    width: '100%',
    backgroundColor: colors.Shade2,
    height: 1,
    marginBottom: 16,
  },
  addSubscription: {
    width: '100%',
    height: 48,
  },
  modalWindow: {
    padding: 0,
    margin: 0,
  },
  filledButton: {
    width: '100%',
    marginBottom: 16,
  },
  container: {
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
  },
  formHeading: {
    marginBottom: 16,
  },
  swipe: {
    justifyContent: 'center',
    width: '100%',
    marginTop: 8,
    alignItems: 'center',
  },
  allSubscriptions: {
    position: 'absolute',
    right: 16,
    //height: '100%',
    borderWidth: 0,
  },
  allSubscriptionsTextColor: {
    color: colors.Accent,
    top: -3,
  },
});
