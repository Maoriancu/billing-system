import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addTransaction } from '../Service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    country: '',
    city: '',
    street: '',
    phone: '',
    total_price: 0,
    currency: '',
    credit_card_type: '',
    credit_card_number: 0,
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

const AddTransaction = () => {
    const [transaction, setTransaction] = useState(initialValue);
    const { customer_id, first_name, last_name, email, phone, gender, country, city, street, total_price, currency, credit_card_type, credit_card_number } = transaction;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        setTransaction({ ...transaction, [e.target.name]: e.target.value })
    }

    const addTransactionDetails = async () => {
        await addTransaction(transaction);
        history.push('./all');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Transaction</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Customer ID</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='customer_id' value={customer_id} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">First Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='first_name' value={first_name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='last_name' value={last_name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Gender</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='gender' value={gender} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Country</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='country' value={country} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">City</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='city' value={city} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Street</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='street' value={street} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Total Price</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='total_price' value={total_price} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Currency</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='currency' value={currency} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Credit Card Type</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='credit_card_type' value={credit_card_type} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Credit Card Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='credit_card_number' value={credit_card_number} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addTransactionDetails()}>Add Transaction</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddTransaction;