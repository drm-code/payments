import { Transaction } from '../types/transaction'
import data from './data.json'

const getTransactions = async (): Promise<Transaction[]> => {
    return data
}

export default getTransactions