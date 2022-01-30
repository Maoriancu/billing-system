import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
}));