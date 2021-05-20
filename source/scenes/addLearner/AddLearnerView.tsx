import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import AddLearnerScreenPresenter, {
  AddLearnerScreenViewInterface,
} from './AddLearnerPresenter';
import strings from '../../resorces/strings';
import {Input} from '../../components/Input';
import {ToggleButton} from '../../components/ToggleButton';
import colors from '../../resorces/colors';
import {FilledButton} from '../../components/FilledButton';
import {TelephoneInfo} from '../../components/TelephoneInfo';
import {textStyles} from '../../resorces/textStyles';
import CheckBox from '../../components/CustomCheckBox';
import {RadioButtons} from '../../components/RadioButtons';
import CameraIcon from '../../resorces/images/camera.svg';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

interface Props {
  presenter: AddLearnerScreenPresenter;
}

interface Telephone {
  name: string;
  number: string;
  isMain: boolean;
}

interface user {
  surname: string;
  name: string;
  date: number;
  note: string;
  patronymic: string;
  lessons: number;
  telephones: Array<Telephone>;
}

interface State {
  toggleCheckBox: boolean;
  number: string;
  inputLessons: string;
  isVisible: boolean;
  showDate: String;
  dateColor: string;
  contactName: string;
  surname: string;
  name: string;
  date: number;
  note: string;
  patronymic: string;
  lessons: number;
  telephones: Array<Telephone>;
  user: user | null;
  telephone: Telephone | null;
  image: any;
}

export default class AddLearnerScreenView
  extends React.Component<Props, State, Telephone>
  implements AddLearnerScreenViewInterface {
  private readonly presenter: AddLearnerScreenPresenter;

  constructor(props: Props) {
    super(props);
    this.presenter = this.props.presenter;
    this.presenter.view = this;
    this.state = {
      toggleCheckBox: false,
      surname: '',
      name: '',
      date: 0,
      note: '',
      patronymic: '',
      telephones: [],
      lessons: -1,
      isVisible: false,
      showDate: strings.addLearner.date,
      inputLessons: '',
      dateColor: colors.Shade2,
      contactName: '',
      number: '',
      user: null,
      telephone: null,
      image: null,
    };
  }

  setToggleCheckBox = (newValue: boolean) => {
    this.setState({toggleCheckBox: newValue});
  };
  hidePicker = () => {
    this.setState({
      isVisible: false,
    });
  };

  showPicker = () => {
    this.setState({
      isVisible: true,
    });
  };
  handlePicker = (datetime: Date) => {
    this.setState({
      dateColor: 'black',
      isVisible: false,
      showDate: moment(datetime).format('DD MMMM YYYY'),
      date: moment(datetime, 'DD.MM.YYYY').unix(),
    });
  };

  addTelephone = async () => {
    await this.setState({
      telephone: {
        name: this.state.contactName,
        number: this.state.number,
        isMain: this.state.toggleCheckBox,
      },
    });
    if (this.state.telephone) {
      this.setState({
        telephones: this.state.telephones.concat([this.state.telephone]),
      });
    }
    console.warn(this.state.telephone);
  };

  removeTelephone = (telephone: any) => {
    let altTelephones = this.state.telephones.filter(function (e: any) {
      return e.id !== telephone.id;
    });
    this.setState({telephones: altTelephones});
  };

  addUser = () => {
    this.setState({
      user: {
        name: this.state.name,
        surname: this.state.surname,
        date: this.state.date,
        note: this.state.note,
        patronymic: this.state.patronymic,
        lessons: this.state.lessons,
        telephones: this.state.telephones,
      },
    });
    console.warn(this.state.user);
    if (this.state.user) {
      this.presenter.AddUser(this.state.user);
    }
    if (this.state.image) {
      this.presenter.addImage(this.state.image);
    }
  };

  setImage = (image: any) => {
    this.setState({image: image});
  };

  onChangeHandle = (value: number) => {
    this.setState({lessons: value});
    this.setState({inputLessons: ''});
  };

  changeLessons = (value: string) => {
    this.setState({inputLessons: value});
    let parseValue = parseInt(value);
    if (isNaN(parseValue)) {
      console.warn('please, enter a number!');
      return 0;
    } else {
      this.setState({lessons: parseValue});
    }
  };
  hasErrors = (errorType: string) => {
    if (errorType === 'numbers') {
      return !(
        parseInt(this.state.inputLessons) || this.state.inputLessons === ''
      );
    }
    return false;
  };

  renderItem({item}: {item: Telephone}) {
    return (
      <>
        <TelephoneInfo
          name={item.name}
          telephone={item.number}
          isMain={item.isMain}
          onPress={() => this.removeTelephone(item)}
        />
        <View style={styles.separator} />
      </>
    );
  }

  render() {
    return (
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={{uri: this.state.image}} style={styles.image} />
          <TouchableOpacity
            style={styles.imageOverlap}
            onPress={this.presenter.imageGalleryLaunch}>
            <View style={styles.imageBg}>
              <CameraIcon height={24} width={24} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={[styles.formHeading, textStyles.title2]}>
            {strings.addLearner.information}
          </Text>
          <Input
            placeholder={strings.addLearner.surname}
            value={this.state.surname}
            onChangeHandle={(value: string) => this.setState({surname: value})}
            errorType={'no'}
            hasErrors={this.hasErrors}
          />
          <Input
            placeholder={strings.addLearner.name}
            value={this.state.name}
            onChangeHandle={(value: string) => {
              this.setState({name: value});
              console.warn(this.state.name);
            }}
            errorType={'no'}
            hasErrors={this.hasErrors}
          />
          <Input
            placeholder={strings.addLearner.patronymic}
            value={this.state.patronymic}
            onChangeHandle={(value: string) =>
              this.setState({patronymic: value})
            }
            errorType={'no'}
            hasErrors={this.hasErrors}
          />
          <TouchableOpacity style={styles.picker} onPress={this.showPicker}>
            <Text
              style={[
                textStyles.body,
                {color: this.state.dateColor},
                styles.dateText,
              ]}>
              {this.state.showDate}
            </Text>
          </TouchableOpacity>
          <DateTimePicker
            isVisible={this.state.isVisible}
            mode="date"
            onConfirm={this.handlePicker}
            onCancel={this.hidePicker}
            style={{}}
          />
          <Input
            placeholder={strings.addLearner.note}
            enableMultiline={true}
            numberOfLines={2}
            value={this.state.note}
            onChangeHandle={(value: string) => this.setState({note: value})}
            errorType={'no'}
            hasErrors={this.hasErrors}
          />
        </View>
        <View style={styles.container}>
          <Text style={[styles.formHeading, textStyles.title2]}>
            {strings.addLearner.telephones}
          </Text>
          {this.state.telephones ? (
            <View>
              <FlatList
                data={this.state.telephones}
                renderItem={(item) => this.renderItem(item)}
                keyExtractor={(item, index) => `item-${index}`}
              />
            </View>
          ) : null}
        </View>
        <View style={styles.container}>
          <Input
            placeholder={strings.addLearner.contactName}
            value={this.state.contactName}
            onChangeHandle={(value: string) =>
              this.setState({contactName: value})
            }
            errorType={'no'}
            hasErrors={this.hasErrors}
          />
          <Input
            placeholder={strings.addLearner.number}
            value={this.state.number}
            onChangeHandle={(value: string) => this.setState({number: value})}
            errorType={'no'}
            hasErrors={this.hasErrors}
            keyboardType={'numeric'}
          />
        </View>
        <View style={styles.rowElements}>
          <CheckBox
            label={strings.addLearner.main}
            value={this.state.toggleCheckBox}
            onChange={(newValue) => this.setToggleCheckBox(newValue)}
          />
          <ToggleButton
            style={styles.toggleButton}
            onPress={() => this.presenter.AddPhone()}
            buttonText={strings.addLearner.addNumber}
          />
        </View>
        <View style={styles.container}>
          <Text style={[styles.formHeading, textStyles.title2]}>
            {strings.addLearner.subscription}
          </Text>
        </View>
        <ScrollView
          style={styles.row}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <RadioButtons
            value={this.state.lessons}
            setNewValue={this.onChangeHandle}
          />
        </ScrollView>
        <View style={styles.container}>
          <Input
            placeholder={strings.addLearner.lessonsNumber}
            value={this.state.inputLessons}
            onChangeHandle={(value: string) => this.changeLessons(value)}
            marginBottom={0}
            errorType={'numbers'}
            hasErrors={this.hasErrors}
          />
        </View>
        <View style={styles.container}>
          <FilledButton
            onPress={this.addUser}
            buttonText={strings.addLearner.createContact}
            Style={styles.filledButton}
            textColor={colors.Base1}
            textStyle={textStyles.bodyBold}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    marginLeft: 16,
    width: '100%',
    backgroundColor: colors.Shade2,
    height: 1,
    marginBottom: 16,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    paddingHorizontal: 16,
  },
  imageContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 128,
    height: 128,
    marginVertical: 32,
  },
  image: {
    width: 128,
    height: 128,
    borderRadius: 128 / 2,
    backgroundColor: 'rgba(219, 229, 228, 1)',
  },
  imageOverlap: {
    position: 'absolute',
    width: 48,
    height: 48,
    top: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 48 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
  imageBg: {
    backgroundColor: colors.Accent,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  formHeading: {
    marginBottom: 16,
  },
  input: {
    marginVertical: 8,
  },
  rowElements: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    marginHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },

  toggleButton: {
    position: 'absolute',
    right: 0,
  },
  checkBox: {
    marginRight: 10,
    height: 25,
    width: 25,
    borderWidth: 1,
    borderColor: colors.Accent,
  },
  picker: {
    borderRadius: 8,
    borderColor: colors.Shade2,
    borderWidth: 1,
    padding: 14,
    marginTop: 8,
    marginBottom: 16,
  },
  dateText: {
    marginHorizontal: 2,
  },
  filledButton: {
    width: '100%',
  },
});
