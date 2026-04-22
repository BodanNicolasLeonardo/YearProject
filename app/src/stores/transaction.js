import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTransactionStore = defineStore('transaction', () => {
  // State
  const transactions = ref([
    { id: 1, description: 'Salary Deposit', amount: 3000, type: 'income', date: '2026-01-20' },
    { id: 2, description: 'Grocery Shopping', amount: -150, type: 'expense', date: '2026-01-19' },
    { id: 3, description: 'Gas Station', amount: -50, type: 'expense', date: '2026-01-18' },
    { id: 4, description: 'Freelance Payment', amount: 500, type: 'income', date: '2026-01-17' },
  ])

  // Getters (computed properties)
  const totalIncome = computed(() => {
    return transactions.value
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0)
  })

  const totalExpenses = computed(() => {
    return transactions.value
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + Math.abs(t.amount), 0)
  })

  const balance = computed(() => {
    return totalIncome.value - totalExpenses.value
  })

  const transactionCount = computed(() => transactions.value.length)

  // Actions
  const addTransaction = (transaction) => {
    const newId = Math.max(...transactions.value.map(t => t.id), 0) + 1
    transactions.value.push({
      id: newId,
      ...transaction,
      date: transaction.date || new Date().toISOString().split('T')[0]
    })
  }

  const removeTransaction = (id) => {
    const index = transactions.value.findIndex(t => t.id === id)
    if (index > -1) {
      transactions.value.splice(index, 1)
    }
  }

  const updateTransaction = (id, updates) => {
    const transaction = transactions.value.find(t => t.id === id)
    if (transaction) {
      Object.assign(transaction, updates)
    }
  }

  const clearTransactions = () => {
    transactions.value = []
  }

  // Async action example
  const fetchTransactions = async () => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        // In a real app, this would fetch from an API
        resolve(transactions.value)
      }, 1000)
    })
  }

  return {
    // State
    transactions,
    // Getters
    totalIncome,
    totalExpenses,
    balance,
    transactionCount,
    // Actions
    addTransaction,
    removeTransaction,
    updateTransaction,
    clearTransactions,
    fetchTransactions
  }
})
