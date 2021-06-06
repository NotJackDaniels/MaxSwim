import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import CallIcon from '../resorces/images/callIcon.svg';
import colors from '../resorces/colors';
import {textStyles} from '../resorces/textStyles';
import I18n from '../i18n/pluralizer';

interface Props {
  surname: string;
  name: string;
  lessons: number;
  image?: string | null;
}

interface State {
  userImage: string;
}

export class ContactView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userImage: '',
    };
  }
  render() {
    return (
      <>
        <View style={styles.container}>
          <Image source={{uri: this.state.userImage}} style={styles.image} />
          <View style={styles.content}>
            <Text style={textStyles.body}>
              {this.props.surname} {this.props.name}
            </Text>
            <Text style={[textStyles.footNote, styles.smallText]}>
              {I18n.t('lessons', {count: this.props.lessons})}
            </Text>
            <View style={styles.separator} />
          </View>
          <CallIcon width={17} height={17} style={styles.callIcon} />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    position: 'relative',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  separator: {
    position: 'absolute',
    width: '100%',
    backgroundColor: colors.Shade2,
    height: 1,
    bottom: 0,
  },
  container: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    backgroundColor: 'rgba(219, 229, 228, 1)',
    marginHorizontal: 16,
  },
  smallText: {
    color: colors.Shade4,
  },
  callIcon: {
    position: 'absolute',
    right: 0,
    marginRight: 16,
  },
});
