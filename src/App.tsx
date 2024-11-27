import { useEffect, useState } from 'react'
import './App.css'

import getTransactions from './api/api'
import { Transaction } from './types/transaction'

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [error, setError] = useState('')
  const [dateStart, setDateStart] = useState('')
  const [dateEnd, setDateEnd] = useState(new Date())

  useEffect(() => {
    getTransactions().then(data => {
      setTransactions(data)
    }).catch(errMessage => {
      setError(errMessage)
    })
  }, [])

  if (error) {
    return 'Error...'
  }

  return (
    <div>
      <input type="date" value={new Date(dateStart)} onChange={e => setDateStart(e.target.value)}/>
      <input type="date" value={new Date(dateEnd)} onChange={e => setDateEnd(e.target.value)}/>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.date}</td>
              <td>{item.description}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
