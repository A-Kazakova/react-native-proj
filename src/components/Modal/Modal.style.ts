import { StyleSheet } from 'react-native';
import {
  justifyContentCenter,
  justifyContentEnd,
  flexRow,
} from 'constants/CommonStyles';
import { scale } from 'react-native-size-matters';


export default StyleSheet.create({
  modal: {
    ...justifyContentEnd,
    flex: 1,
    width: '100%',
    margin: 0,
  },
  content: {
    ...justifyContentCenter,
    backgroundColor: 'white',
    width: '100%',
    height: scale(200),
    padding: scale(20),
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  row: {
    ...flexRow,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
  },
  text: {
    padding: scale(4),
    fontSize: scale(14),
  }
});
