import {StyleSheet} from 'react-native';
import globalStyles, {colors, fontFamilies} from '../../../../../utils/global/globalStyles';
import { screenHeight } from '../../../../../utils/global/globalValues';

const styles = StyleSheet.create({
  container: {
    zIndex: 999,
    width: '100%',
    marginBottom: 40,
    paddingHorizontal: 17,
  },
  headerWrapper: {
    zIndex: 999,
    paddingTop: 16,
    paddingHorizontal: 16,
    ...globalStyles.horizontalSpaceBetween,
  },
  title: {
    fontSize: 24,
    color: colors.mainColorT,
    fontFamily: fontFamilies.bold,
    zIndex: -999
  },
  swipeCardsWrapper: {
    height: (37 * screenHeight) / 100,
  },
  containerCard: {
    height: (40 * screenHeight) / 100,
    borderRadius: 38,
  },
  brandContainer: {
    height: 28,
    width: 43.2,
    borderRadius: 20,
    backgroundColor: colors.mainColorB,
  },
  text: {
    fontSize: 35,
    color: '#fff',
    lineHeight: 42,
    textAlign: 'center',
    fontFamily: fontFamilies.bold,
  },
  renderCardContainer: {
    flex: 1,
  },
  renderCardImage: {
    borderRadius: 32,
    position: 'absolute',
    ...globalStyles.fullScreen,
  },
  recipeDetailsWrapper: {
    flex: 1,
    paddingBottom: 20,
  },
  arrow: {
    alignSelf: 'center',
  },
});

export default styles;