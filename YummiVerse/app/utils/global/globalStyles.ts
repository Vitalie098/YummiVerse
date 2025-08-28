import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  horizontalSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  horizontalCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalSpaceAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  centerAlignedRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  endAlignedFlex: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  endAlignedFlexCenter: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  fullScreen: {
    width: '100%',
    height: '100%',
  },
});

export default globalStyles;

export const fontFamilies = {
  light:  'NestleText-Light',
  normal: 'NestleText-Book',
  medium: 'NestleText-Book',
  bold: 'NestleText-Bold' 
};

export const colors = {
  mainColorT: '#06231C',
  mainColorB: '#FAE345',
  mainColorPlan: '#00A0DF',
  brandColor: '#FF4A4A',
};
