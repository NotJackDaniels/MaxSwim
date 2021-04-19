import colors from '../../resorces/colors';
import Dependencies from '../../services/Dependencies';
import numbro from '../../i18n/numbro';

export interface CardViewInterface {
  setLessonsBg(bg: string): void;
  setAmountOfLessons(allLessons: string): void;
}

export default class CardPresenter {
  view?: CardViewInterface;

  private dependencies: Dependencies;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }

  didMount = (lessonsLeft: number, allLessons: number) => {
    this.setBg(lessonsLeft);
    this.parseStringLessons(allLessons);
  };

  setBg = (lessonsLeft: number) => {
    if (lessonsLeft === 0) {
      this.view?.setLessonsBg(colors.Error);
      return;
    } else if (lessonsLeft < 4) {
      this.view?.setLessonsBg(colors.Warning);
      return;
    }
    this.view?.setLessonsBg(colors.Success);
  };
  parseStringLessons = (allLessons: number) => {
    if (allLessons > 9999) {
      this.view?.setAmountOfLessons(
        numbro(allLessons).format({
          output: 'number',
          mantissa: 0,
          spaceSeparated: true,
          thousandSeparated: true,
          totalLength: 3,
        }),
      );
    } else {
      this.view?.setAmountOfLessons(
        numbro(allLessons).format({
          output: 'number',
          mantissa: 0,
          spaceSeparated: true,
          thousandSeparated: true,
        }),
      );
    }
  };
}
