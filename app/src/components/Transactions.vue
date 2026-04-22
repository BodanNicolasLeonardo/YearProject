<script setup>
import { ref, computed, watch } from 'vue'
import { useTransactionStore } from '../stores/transaction.js'

defineOptions({
  name: 'TransactionsList'
})

// Use the transaction store
const transactionStore = useTransactionStore()

// Local reactive state for filtering
const filterType = ref('all') // 'all', 'income', 'expense'

// Editing state
const editingId = ref(null)
const editDescription = ref('')

// Computed properties
const filteredTransactions = computed(() => {
  if (filterType.value === 'all') {
    return transactionStore.transactions
  }
  return transactionStore.transactions.filter(t => t.type === filterType.value)
})

const summaryStats = computed(() => ({
  totalIncome: transactionStore.totalIncome,
  totalExpenses: transactionStore.totalExpenses,
  balance: transactionStore.balance,
  count: transactionStore.transactionCount
}))

// Watchers
watch(() => transactionStore.balance, (newBalance, oldBalance) => {
  if (newBalance !== oldBalance) {
    console.log(`Balance changed from ${oldBalance} to ${newBalance}`)
    // Could show a notification or update UI
  }
})

watch(() => transactionStore.transactions.length, (newCount) => {
  console.log(`Transaction count changed to ${newCount}`)
})

// Actions
const addNewTransaction = () => {
  // Example of adding a transaction
  transactionStore.addTransaction({
    description: 'New Transaction',
    amount: 100,
    type: 'income'
  })
}

const deleteTransaction = (id) => {
  transactionStore.removeTransaction(id)
}

const editTransaction = (id) => {
  const transaction = transactionStore.transactions.find(t => t.id === id)
  if (transaction) {
    editingId.value = id
    editDescription.value = transaction.description
  }
}

const saveTransaction = () => {
  if (editingId.value !== null && editDescription.value.trim()) {
    transactionStore.updateTransaction(editingId.value, { description: editDescription.value.trim() })
    editingId.value = null
    editDescription.value = ''
  }
}

const cancelEdit = () => {
  editingId.value = null
  editDescription.value = ''
}
</script>

<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r border-gray-200 px-6 py-8">
       <h2 class="text-2xl font-bold mb-12 text-indigo-800 flex items-center">
        <i class="bi bi-wallet2 mr-3 text-indigo-600"></i>
        Budget Planner
      </h2>

      <nav class="space-y-4">
        <router-link to="/dashboard" class="flex items-center gap-3 text-gray-600 hover:text-indigo-600">
          <i class="bi bi-house"></i> Dashboard
        </router-link>

        <router-link to="/transactions" class="flex items-center gap-3 text-indigo-600 font-medium">
          <i class="bi bi-arrow-left-right"></i> Transactions
        </router-link>

        <router-link to="/reports" class="flex items-center gap-3 text-gray-600 hover:text-indigo-600">
          <i class="bi bi-bar-chart"></i> Reports
        </router-link>

        <router-link to="/settings" class="flex items-center gap-3 text-gray-600 hover:text-indigo-600">
          <i class="bi bi-gear"></i> Settings
        </router-link>
      </nav>

      <div class="absolute bottom-6 left-6 text-sm text-gray-500">
        About us
      </div>
    </aside>

    <!-- Main -->
    <main class="flex-1 p-10">
      <!-- Header -->
      <div class="flex justify-between items-center mb-10">
        <h1 class="text-3xl font-bold">Transactions</h1>
      </div>

      <!-- Summary Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div class="bg-white p-6 rounded-lg border">
          <h3 class="text-sm font-medium text-gray-500">Total Income</h3>
          <p class="text-2xl font-bold text-green-600">+{{ summaryStats.totalIncome }} RON</p>
        </div>
        <div class="bg-white p-6 rounded-lg border">
          <h3 class="text-sm font-medium text-gray-500">Total Expenses</h3>
          <p class="text-2xl font-bold text-red-600">-{{ summaryStats.totalExpenses }} RON</p>
        </div>
        <div class="bg-white p-6 rounded-lg border">
          <h3 class="text-sm font-medium text-gray-500">Balance</h3>
          <p class="text-2xl font-bold" :class="summaryStats.balance >= 0 ? 'text-green-600' : 'text-red-600'">
            {{ summaryStats.balance >= 0 ? '+' : '' }}{{ summaryStats.balance }} RON
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg border">
          <h3 class="text-sm font-medium text-gray-500">Total Transactions</h3>
          <p class="text-2xl font-bold text-gray-900">{{ summaryStats.count }}</p>
        </div>
      </div>

      <!-- Filter and Add Button -->
      <div class="flex justify-between items-center mb-6">
        <div class="flex gap-2">
          <button 
            @click="filterType = 'all'" 
            :class="filterType === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'"
            class="px-4 py-2 rounded-lg hover:bg-opacity-80"
          >
            All
          </button>
          <button 
            @click="filterType = 'income'" 
            :class="filterType === 'income' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'"
            class="px-4 py-2 rounded-lg hover:bg-opacity-80"
          >
            Income
          </button>
          <button 
            @click="filterType = 'expense'" 
            :class="filterType === 'expense' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'"
            class="px-4 py-2 rounded-lg hover:bg-opacity-80"
          >
            Expenses
          </button>
        </div>
        <button @click="addNewTransaction" class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          <i class="bi bi-plus-circle mr-2"></i>
          Add Transaction
        </button>
      </div>

      <!-- Transactions List -->
      <div class="bg-white border rounded-lg overflow-hidden">
        <table class="w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="transaction in filteredTransactions" :key="transaction.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <div v-if="editingId === transaction.id" class="flex items-center gap-2">
                  <input 
                    v-model="editDescription" 
                    @keyup.enter="saveTransaction" 
                    @keyup.escape="cancelEdit"
                    class="flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    type="text"
                  />
                  <button @click="saveTransaction" class="text-green-600 hover:text-green-800">
                    <i class="bi bi-check-circle"></i>
                  </button>
                  <button @click="cancelEdit" class="text-gray-600 hover:text-gray-800">
                    <i class="bi bi-x-circle"></i>
                  </button>
                </div>
                <span v-else>{{ transaction.description }}</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span :class="transaction.amount > 0 ? 'text-green-600' : 'text-red-600'">
                  {{ transaction.amount > 0 ? '+' : '' }}{{ transaction.amount }} RON
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                      :class="transaction.type === 'income' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
                  {{ transaction.type }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ transaction.date }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button 
                  @click="editTransaction(transaction.id)" 
                  :disabled="editingId !== null"
                  :class="editingId !== null ? 'text-gray-400 cursor-not-allowed' : 'text-indigo-600 hover:text-indigo-900'"
                  class="mr-3"
                >
                  Edit
                </button>
                <button 
                  @click="deleteTransaction(transaction.id)" 
                  :disabled="editingId !== null"
                  :class="editingId !== null ? 'text-gray-400 cursor-not-allowed' : 'text-red-600 hover:text-red-900'"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Custom scrollbar for main content */
main::-webkit-scrollbar {
  width: 6px;
}

main::-webkit-scrollbar-track {
  background: #f1f1f1;
}

main::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

main::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>