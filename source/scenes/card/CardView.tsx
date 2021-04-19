import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CardButton} from '../../components/CardButton';
import colors from '../../resorces/colors';
import {textStyles} from '../../resorces/textStyles';
import TestImage from '../../resorces/images/testImageCard.svg';
import CardPresenter, {CardViewInterface} from './CardPresenter';
import strings from '../../resorces/strings';
import I18n from '../../i18n/pluralizer';

interface Props {
  allLessons: number;
  attendance: number;
  lessonsLeft: number;
  telephone: String;
  presenter: CardPresenter;
}

interface State {
  lessons: string;
  lessonsBg: string;
  allLessons: string;
}

export class StudentCard
  extends React.Component<Props, State>
  implements CardViewInterface {
  private readonly presenter: CardPresenter;
  constructor(props: Props) {
    super(props);
    this.presenter = this.props.presenter;
    this.presenter.view = this;
    this.state = {
      lessons: '',
      lessonsBg: '',
      allLessons: '',
    };
  }

  componentDidMount() {
    this.presenter.didMount(this.props.lessonsLeft, this.props.allLessons);
  }

  setLessonsBg = (bg: string) => {
    console.warn(bg);
    this.setState({lessonsBg: bg});
  };

  setAmountOfLessons = (lessons: string) => {
    this.setState({allLessons: lessons});
  };

  render() {
    return (
      <View style={styles.card}>
        <View style={styles.content}>
          <TestImage height={106} width={106} style={styles.cardImage} />
          <View style={styles.contentFlex}>
            <Text
              style={[textStyles.title3, {flexWrap: 'wrap', flexShrink: 1}]}>
              {strings.cardTest.name}
            </Text>
            <Text
              style={[
                textStyles.footNoteBold,
                styles.lessonsLeftText,
                {color: this.state.lessonsBg},
              ]}>
              {I18n.t('lessons', {count: this.props.lessonsLeft})}
            </Text>
            <View style={styles.itemRow}>
              <View style={styles.statistic}>
                <Text style={[textStyles.footNoteSmall, styles.smallTextColor]}>
                  {strings.card.allLessons}
                </Text>
                <Text style={textStyles.body}>{this.state.allLessons}</Text>
              </View>
              <View>
                <Text style={[textStyles.footNoteSmall, styles.smallTextColor]}>
                  {strings.card.attendance}
                </Text>
                <Text style={textStyles.body}>{this.props.attendance} %</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.itemRow}>
          {this.props.telephone ? (
            <>
              <CardButton
                onPress={() => console.log('clicked!')}
                buttonText={strings.card.call}
                Style={styles.callButton}
                textColor={'white'}
              />
              <CardButton
                onPress={() => console.log('clicked!')}
                buttonText={strings.card.edit}
                Style={styles.editButton}
                textColor={'black'}
              />
            </>
          ) : (
            <CardButton
              onPress={() => console.log('clicked!')}
              buttonText={strings.card.edit}
              Style={styles.editButton}
              textColor={'black'}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentFlex: {
    flex: 1,
  },
  card: {
    width: 328,
    padding: 16,
    backgroundColor: colors.Base1,
    borderRadius: 8,
    elevation: 1,
  },
  content: {
    position: 'relative',
    flexDirection: 'row',
  },
  lessonsLeftText: {
    marginBottom: 8,
  },
  smallTextColor: {
    color: colors.Shade4,
  },
  itemRow: {
    flexDirection: 'row',
  },
  cardImage: {
    marginRight: 16,
  },
  statistic: {
    marginRight: 16,
  },
  callButton: {
    flex: 2,
    marginRight: 16,
    height: 32,
  },
  editButton: {
    flex: 2,
    height: 32,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.Shade2,
  },
});
