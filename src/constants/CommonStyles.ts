import { FlexStyle, ShadowPropTypesIOSStatic } from 'react-native';

export const flex: FlexStyle = {
  flex: 1,
};

export const justifyContentCenter: FlexStyle = {
  justifyContent: 'center',
};

export const justifyContentBetween: FlexStyle = {
  justifyContent: 'space-between',
};

export const justifyContentEnd: FlexStyle = {
  justifyContent: 'flex-end',
};

export const justifyContentStart: FlexStyle = {
  justifyContent: 'flex-start',
};

export const alignItemsCenter: FlexStyle = {
  alignItems: 'center',
};

export const alignItemsStart: FlexStyle = {
  alignItems: 'flex-start',
};

export const alignItemsEnd: FlexStyle = {
  alignItems: 'flex-end',
};

export const flexCentered: FlexStyle = {
  ...justifyContentCenter,
  ...alignItemsCenter,
};

export const flexRow: FlexStyle = {
  flexDirection: 'row',
};

export const flexColumn: FlexStyle = {
  flexDirection: 'column',
};

export const flexRowReversed: FlexStyle = {
  flexDirection: 'row-reverse',
};

export const flexColumnReversed: FlexStyle = {
  flexDirection: 'column-reverse',
};

export const shadowSettings: ShadowPropTypesIOSStatic = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.20,
  shadowRadius: 1.41,
};
