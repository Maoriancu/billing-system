import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button } from '@material-ui/core'
import { getTransactions, deleteTransaction } from '../../Service/api';
import { Link } from 'react-router-dom';
import useStyles from './AllTransactions.css';

const AllTransactions = () => {
    const [transactions, setTransactions] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getTransactionsData();
    }, []);

    const deleteTransactionsData = async (id) => {
        await deleteTransaction(id);
        getTransactionsData();
    }

    const getTransactionsData = async () => {
        let response = await getTransactions();
        setTransactions(response.data);
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>Country</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>Street</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Total Price</TableCell>
                    <TableCell>Currency</TableCell>
                    <TableCell>Credit Card Type</TableCell>
                    <TableCell>Credit Card Number</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {transactions.map((transaction) => (
                    <TableRow className={classes.row} key={transaction.id}>
                        <TableCell>{transaction.first_name}</TableCell>
                        <TableCell>{transaction.last_name}</TableCell>
                        <TableCell>{transaction.email}</TableCell>
                        <TableCell>{transaction.gender}</TableCell>
                        <TableCell>{transaction.country}</TableCell>
                        <TableCell>{transaction.city}</TableCell>
                        <TableCell>{transaction.street}</TableCell>
                        <TableCell>{transaction.phone}</TableCell>
                        <TableCell>{transaction.total_price}</TableCell>
                        <TableCell>{transaction.currency}</TableCell>
                        <TableCell>{transaction.credit_card_type}</TableCell>
                        <TableCell>{transaction.credit_card_number}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" component={Link} to={`/edit/${transaction._id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" onClick={() => deleteTransactionsData(transaction._id)}>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default AllTransactions;