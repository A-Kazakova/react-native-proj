import { StyleSheet } from 'react-native';
import {
  flexRow,
  justifyContentStart,
  alignItemsCenter,
  shadowSettings,
} from 'constants/CommonStyles';
import { scale } from 'react-native-size-matters';


export default StyleSheet.create({
  block: {
    ...flexRow,
    ...justifyContentStart,
    ...alignItemsCenter,
    ...shadowSettings,
    height: scale(70),
    backgroundColor: '#fff',
    textAlign: 'center',
    margin: scale(3),
    borderRadius: scale(4),
    
  },
  text: {
    padding: scale(6),
    marginLeft: scale(8),
    fontSize: scale(16),
  },
});
