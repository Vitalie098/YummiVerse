import {StyleSheet} from 'react-native';
import globalStyles, {colors} from '../../../utils/global/globalStyles';

const styles = StyleSheet.create({
  contentWrapper: {
    paddingHorizontal: 16,
    backgroundColor: colors.mainColorB,
  },
  topHeaderWrapper: {
    marginBottom: 37,
    ...globalStyles.horizontalSpaceBetween,
  },
  searchWrapper: {
    height: 40,
    width: 273,
    borderWidth: 1,
    paddingLeft: 51,
    borderRadius: 20,
    paddingRight: 14,
    borderColor: '#b0a84d4d',
    ...globalStyles.centeredContent,
  },
  imagePosition: {
    left: 0,
    bottom: 0,
    position: 'absolute',
  },
  input: {
    width: 208,
  },
  profileImageWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'black',
  },
  badgeWrapper: {
    top: 3,
    right: 0,
    borderWidth: 2,
    borderRadius: 100,
    position: 'absolute',
    borderColor: colors.mainColorB,
  },
  badge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C83532',
  },
  bottomHeaderWraper: {
    marginBottom: 20,
    ...globalStyles.centerAlignedRow,
  },
  menuLabelWrapper: {
    paddingHorizontal: 22,
  },
  menuLabel: {
    fontSize: 16,
    color: colors.mainColorT,
  },
  animatedObject: {
    bottom: -29,
    position: 'absolute',
  },
});

export default styles;
