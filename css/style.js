import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'alignItems': 'center',
    'color': '#747704',
    'display': 'flex',
    'fontFamily': '"Lato", sans-serif',
    'flexDirection': 'column'
  },
  'text-muted': {
    'color': '#bcbbbb'
  },
  'title-logo': {
    'height': [{ 'unit': 'px', 'value': 100 }],
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': 'px', 'value': 100 }]
  },
  'title-super': {
    'fontSize': [{ 'unit': 'px', 'value': 60 }],
    'fontWeight': '100'
  },
  'hr': {
    'backgroundColor': 'dimgrey !important',
    'color': 'dimgrey !important',
    'height': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'fstyle': {
    'textAlign': 'center'
  }
});
