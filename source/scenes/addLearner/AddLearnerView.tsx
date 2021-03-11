import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AddLearnerScreenPresenter, {
  AddLearnerScreenViewInterface,
} from './AddLearnerPresenter';
import strings from '../../resorces/strings';
import {SafeAreaView} from 'react-native-safe-area-context';
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

interface State {
  toggleCheckBox: boolean;
  surname: string;
  name: string;
  date: number;
  note: string;
  patronymic: string;
  contactName: string;
  number: string;
  lessons: number;
  inputLessons: string;
  isVisible: boolean;
  showDate: String;
}

export default class AddLearnerScreenView
  extends React.Component<Props, State>
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
      contactName: '',
      number: '',
      lessons: -1,
      isVisible: false,
      showDate: strings.addLearner.date,
      inputLessons: '',
    };
  }

  selectValue = () => {};

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
      isVisible: false,
      showDate: moment(datetime).format('DD MMMM YYYY'),
      date: moment(datetime, 'DD.MM.YYYY').unix(),
    });
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

  render() {
    return (
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={{}} style={styles.image} />
          <TouchableOpacity style={styles.imageOverlap} onPress={() => {}}>
            <CameraIcon height={24} width={24} />
          </TouchableOpacity>
        </View>
        <SafeAreaView style={styles.container}>
          <Text style={[styles.formHeading, textStyles.title2]}>
            {strings.addLearner.information}
          </Text>
          <Input
            placeholder={strings.addLearner.surname}
            value={this.state.surname}
            onChangeHandle={(value: string) => this.setState({surname: value})}
          />
          <Input
            placeholder={strings.addLearner.name}
            value={this.state.name}
            onChangeHandle={(value: string) => this.setState({name: value})}
          />
          <Input
            placeholder={strings.addLearner.patronymic}
            value={this.state.patronymic}
            onChangeHandle={(value: string) =>
              this.setState({patronymic: value})
            }
          />
          <TouchableOpacity style={styles.picker} onPress={this.showPicker}>
            <Text
              style={[
                textStyles.body,
                {color: colors.Shade2},
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
          />
        </SafeAreaView>
        <View style={styles.container}>
          <Text style={[styles.formHeading, textStyles.title2]}>
            {strings.addLearner.telephones}
          </Text>
          <TelephoneInfo
            name={strings.addLearner.telephoneExampleName}
            telephone={strings.addLearner.telephoneExampleNumber}
            isMain={true}
          />
        </View>
        <View style={styles.separator} />
        <View style={styles.container}>
          <Input
            placeholder={strings.addLearner.contactName}
            value={this.state.contactName}
            onChangeHandle={(value: string) =>
              this.setState({contactName: value})
            }
          />
          <Input
            placeholder={strings.addLearner.number}
            value={this.state.number}
            onChangeHandle={(value: string) => this.setState({number: value})}
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
            onPress={this.selectValue}
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
            style={styles.lessonsButton}
            value={this.state.lessons}
            setNewValue={this.onChangeHandle}
          />
        </ScrollView>
        <View style={styles.container}>
          <Input
            placeholder={strings.addLearner.lessonsNumber}
            value={this.state.inputLessons}
            onChangeHandle={(value: string) => this.changeLessons(value)}
          />
        </View>
        <View style={styles.container}>
          <FilledButton
            onPress={() => console.log('clicked!')}
            buttonText={strings.addLearner.createContact}
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
    width: 40,
    height: 40,
    top: 0,
    right: 0,
    backgroundColor: colors.Accent,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
  imageSize: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
    marginBottom: 16,
    marginLeft: 16,
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
  lessonsButton: {
    marginRight: 8,
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
});
