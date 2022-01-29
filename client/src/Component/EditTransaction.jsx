import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getTransactions, editTransaction } from '../Service/api';

const initialValue = {
    first_name: '',
    last_name: '',
    email: '',
    phone: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const EditTransaction = () => {
    const [transaction, setTransaction] = useState(initialValue);
    const { first_name, lastName, email, phone } = transaction;
    const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    const editTransactionDetails = async () => {
        transaction["_id"] = id;
        await editTransaction(transaction);
        history.push('/all');
    }

    const onValueChange = (e) => {
        setTransaction({ ...transaction, [e.target.name]: e.target.value })
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">First Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='first_name' value={first_name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='last_name' value={lastName} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editTransactionDetails()}>Edit Transaction</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditTransaction;