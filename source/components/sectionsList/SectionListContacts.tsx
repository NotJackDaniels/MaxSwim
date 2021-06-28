import React, {createRef} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  ViewPropTypes,
  TouchableWithoutFeedback,
  SectionList,
  Platform,
} from 'react-native';
var _ = require('lodash');
import {makePy} from './getFirstAlphabet';

interface Props {
  sectionListData: any;
  renderItem: (...props: any) => any;
  renderHeader: (params: any) => any;
  letterTextStyle: any;
  onScroll: (e: any) => void;
}

interface State {
  dataArray: any;
}

export default class SectionListModule extends React.Component<Props, State> {
  static propTypes = {
    sectionListData: PropTypes.array.isRequired, //传入的数据
    sectionHeight: PropTypes.number, //内容的高度
    sectionHeaderHeight: PropTypes.number, //头部索引的高度
    letterViewStyle: ViewPropTypes.style, //右边字母组件样式
    sectionItemViewStyle: ViewPropTypes.style, //item组件样式
    scrollAnimation: PropTypes.bool, //是否启动动画
    showAlphabet: PropTypes.bool, //是否显示右边字母
    otherAlphabet: PropTypes.string, //其他的字符串
  };

  static defaultProps = {
    sectionHeight: 50,
    sectionHeaderHeight: 25,
    scrollAnimation: false,
    showAlphabet: true,
    otherAlphabet: '其他',
  };

  constructor(props: Props) {
    super(props);
    var data = [
      {data: [], key: 'А'},
      {data: [], key: 'Б'},
      {data: [], key: 'В'},
      {data: [], key: 'Г'},
      {data: [], key: 'Д'},
      {data: [], key: 'Е'},
      {data: [], key: 'Ё'},
      {data: [], key: 'Ж'},
      {data: [], key: 'З'},
      {data: [], key: 'И'},
      {data: [], key: 'Й'},
      {data: [], key: 'К'},
      {data: [], key: 'Л'},
      {data: [], key: 'М'},
      {data: [], key: 'Н'},
      {data: [], key: 'О'},
      {data: [], key: 'П'},
      {data: [], key: 'Р'},
      {data: [], key: 'С'},
      {data: [], key: 'Т'},
      {data: [], key: 'У'},
      {data: [], key: 'Ф'},
      {data: [], key: 'Х'},
      {data: [], key: 'Ц'},
      {data: [], key: 'Ч'},
      {data: [], key: 'Щ'},
      {data: [], key: 'Ш'},
      {data: [], key: 'Ь'},
      {data: [], key: 'Ъ'},
      {data: [], key: 'Ы'},
      {data: [], key: 'Э'},
      {data: [], key: 'Ю'},
      {data: [], key: 'Я'},
      {data: [], key: 'A'},
      {data: [], key: 'B'},
      {data: [], key: 'C'},
      {data: [], key: 'D'},
      {data: [], key: 'E'},
      {data: [], key: 'F'},
      {data: [], key: 'G'},
      {data: [], key: 'H'},
      {data: [], key: 'I'},
      {data: [], key: 'J'},
      {data: [], key: 'K'},
      {data: [], key: 'L'},
      {data: [], key: 'M'},
      {data: [], key: 'N'},
      {data: [], key: 'O'},
      {data: [], key: 'P'},
      {data: [], key: 'Q'},
      {data: [], key: 'R'},
      {data: [], key: 'S'},
      {data: [], key: 'T'},
      {data: [], key: 'U'},
      {data: [], key: 'V'},
      {data: [], key: 'W'},
      {data: [], key: 'X'},
      {data: [], key: 'Y'},
      {data: [], key: 'Z'},
    ];
    this.state = {
      dataArray: data,
    };
  }

  filterData() {
    var data = _.cloneDeep(this.state.dataArray);
    this.props.sectionListData.map((item: any) => {
      for (let i = 0; i < data.length; i++) {
        if (i === data.length - 1) {
          data[i].data.push(item);
          break;
        } else if (data[i].key === makePy(item.surname.toUpperCase())) {
          data[i].data.push(item);
          break;
        } else {
          continue;
        }
      }
    });
    let delData = [];
    let letterData = [];
    for (var i in data) {
      if (data[i].data.length !== 0) {
        delData.push(data[i]);
        letterData.push(data[i].key);
      }
    }
    return {
      delData: delData,
      letterData: letterData,
    };
  }

  render() {
    let filterData = this.filterData();
    let delData = filterData.delData;
    let letterData = filterData.letterData;
    console.warn(delData);
    const ref = createRef<SectionList<any>>();
    return (
      <View style={styles.container}>
        <SectionList
          ref={ref}
          keyExtractor={this._keyExtractor}
          sections={delData}
          renderSectionHeader={this._renderSectionHeader}
          renderItem={this._renderItem}
          onScroll={this.props.onScroll}
          scrollEventThrottle={4}
          style={styles.SectionList}
        />
        <View style={[styles.letterView]}>
          {letterData.map((item, index) => {
            return (
              <TouchableWithoutFeedback
                key={'letter_' + index}
                onPress={() => {
                  ref.current?.scrollToLocation({
                    itemIndex: 0,
                    sectionIndex: index,
                  });
                  console.warn(1);
                }}>
                <View style={[styles.letterItemView]}>
                  <Text
                    numberOfLines={0}
                    style={[styles.letterText, this.props.letterTextStyle]}>
                    {item}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      </View>
    );
  }

  _renderSectionHeader = ({section}: {section: any}) => {
    return this.props.renderHeader(section);
  };

  _keyExtractor = (item: any, index: any) => index;

  _renderItem = ({
    item,
    index,
    section,
  }: {
    item: any;
    index: any;
    section: any;
  }) => {
    return this.props.renderItem(item, index, section);
  };
}

const styles = StyleSheet.create({
  SectionList: {
    marginBottom: Platform.OS === 'ios' ? 83 : 56,
  },
  container: {
    flex: 1,
  },
  itemStyle: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: '100%',
  },
  letterView: {
    top: Platform.OS === 'android' ? -100 : -144,
    width: 20,
    position: 'absolute',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
  },
  sectionHeaderView: {
    backgroundColor: '#ffffff',
    height: 25,
    justifyContent: 'center',
  },
  sectionHeaderText: {
    color: '#333333',
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  lineView: {
    width: '100%',
    height: 1,
    backgroundColor: '#e5e5e5',
    position: 'absolute',
    bottom: 0,
  },
  letterItemView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 1,
    paddingHorizontal: 2,
    zIndex: 1,
  },
  artistText: {
    fontSize: 15,
    color: '#333333',
  },
  letterText: {
    fontSize: 15,
    color: '#333333',
  },
});
