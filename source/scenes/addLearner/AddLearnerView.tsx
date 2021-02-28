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

interface Props {
  presenter: AddLearnerScreenPresenter;
}

interface State {
  toggleCheckBox: boolean;
  surname: string;
  name: string;
  date: string;
  note: string;
  patronymic: string;
  contactName: string;
  number: string;
  lessons: string;
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
      date: '',
      note: '',
      patronymic: '',
      contactName: '',
      number: '',
      lessons: '',
    };
  }

  selectValue = () => {};

  setToggleCheckBox = (newValue: boolean) => {
    this.setState({toggleCheckBox: newValue});
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
          />
          <Input
            placeholder={strings.addLearner.name}
            value={this.state.name}
          />
          <Input
            placeholder={strings.addLearner.patronymic}
            value={this.state.patronymic}
          />
          <Input
            placeholder={strings.addLearner.date}
            value={this.state.date}
          />
          <Input
            placeholder={strings.addLearner.note}
            enableMultiline={true}
            numberOfLines={2}
            value={this.state.note}
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
          />
          <Input
            placeholder={strings.addLearner.number}
            value={this.state.number}
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
          <RadioButtons style={styles.lessonsButton} />
        </ScrollView>
        <View style={styles.container}>
          <Input
            placeholder={strings.addLearner.lessonsNumber}
            value={this.state.lessons}
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
});
