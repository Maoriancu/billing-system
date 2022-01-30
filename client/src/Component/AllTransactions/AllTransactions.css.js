import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    table: {
        width: '100%',
        margin: '50px 0 0 0'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#317947',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
}));