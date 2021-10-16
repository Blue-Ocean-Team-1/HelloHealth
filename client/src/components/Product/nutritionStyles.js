import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  nutritionBottom: {
    padding: '10px',
    borderBottom: '1px solid #e2e2e2 !important',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'rgb(226, 226, 226)',
  },
  nutritionRight: {
    padding: '10px',
    borderRight: '1px solid #e2e2e2',
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: 'rgb(226, 226, 226)',
  },
  nutritionButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

// {
// border-right: 1px solid #e2e2e2;
//   border-right-width: 1px;
//     border-right-style: solid;
//     border-right-color: rgb(226, 226, 226);
// border-bottom: 1px solid #e2e2e2;
// }
