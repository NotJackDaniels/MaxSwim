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
import CheckBox from '@react-native-community/checkbox';
import {ToggleButton} from '../../components/ToggleButton';
import colors from '../../resorces/colors';
import {FilledButton} from '../../components/FilledButton';
import {TelephoneInfo} from '../../components/TelephoneInfo';
import {textStyles} from '../../resorces/textStyles';

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

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{}} style={styles.image} />
          <TouchableOpacity style={styles.imageOverlap} onPress={() => {}}>
            <Image
              source={require('../../resorces/images/addPhoto.jpg')}
              style={styles.imageSize}
            />
          </TouchableOpacity>
        </View>
        <SafeAreaView>
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
            numberOfLines={5}
            value={this.state.note}
          />
        </SafeAreaView>
        <View>
          <Text style={styles.formHeading}>
            {strings.addLearner.telephones}
          </Text>
          <TelephoneInfo
            name={'Остапова Анна'}
            telephone={'+7888888888'}
            isMain={true}
          />
          <Input placeholder={'Имя контакта'} value={this.state.contactName} />
          <Input placeholder={'Номер'} value={this.state.number} />
        </View>
        <View style={styles.rowElements}>
          <CheckBox
            style={styles.checkBox}
            disabled={false}
            value={this.state.toggleCheckBox}
            boxType={'square'}
            onTintColor={colors.Accent}
            onCheckColor={colors.Accent}
          />
          <Text style={{textAlign: 'center'}}>Основной</Text>
          <ToggleButton
            style={styles.toggleButton}
            onPress={this.selectValue}
            buttonText={'Добавить еще'}
          />
        </View>
        <View>
          <Text style={styles.formHeading}>
            {strings.addLearner.subscription}
          </Text>
          <ScrollView style={styles.row} horizontal={true}>
            <ToggleButton
              style={styles.lessonsButton}
              onPress={this.selectValue}
              buttonText={'4 занятия'}
            />
            <ToggleButton
              style={styles.lessonsButton}
              onPress={this.selectValue}
              buttonText={'8 занятий'}
            />
            <ToggleButton
              style={styles.lessonsButton}
              onPress={this.selectValue}
              buttonText={'12 занятий'}
            />
            <ToggleButton
              style={styles.lessonsButton}
              onPress={this.selectValue}
              buttonText={'Нет'}
            />
          </ScrollView>
          <Input placeholder={'Другое количество'} value={this.state.lessons} />
        </View>
        <FilledButton
          onPress={() => console.warn('clicked!')}
          buttonText={'Создать'}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'white',
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
    backgroundColor: 'transparent',
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
    marginVertical: 24,
  },
  row: {
    marginTop: 24,
    flexDirection: 'row',
    marginVertical: 24,
  },

  toggleButton: {
    position: 'absolute',
    right: 0,
  },
  checkBox: {
    marginRight: 10,
    height: 25,
    width: 25,
    borderWidth: 0.1,
  },
  lessonsButton: {
    marginRight: 8,
  },
});
