<script setup>
import { useBudgetStore } from '../stores/budget'

const store = useBudgetStore()
</script>

<script>
export default {
  name: 'DashboardView'
}
</script>

<template>
  <div class="flex min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    <!-- Sidebar -->
    <aside class="w-72 bg-white shadow-xl border-r-2 border-indigo-100 px-8 py-10">
      <h2 class="text-2xl font-bold mb-12 text-indigo-800 flex items-center">
        <i class="bi bi-wallet2 mr-3 text-indigo-600"></i>
        Budget Planner
      </h2>

      <nav class="space-y-2">
        <router-link to="/dashboard" class="flex items-center gap-4 px-4 py-3 text-indigo-600 font-semibold bg-indigo-50 border-2 border-indigo-200 rounded-lg shadow-sm hover:bg-indigo-100 hover:shadow-md transition-all duration-200">
          <i class="bi bi-house text-lg"></i> Dashboard
        </router-link>

        <router-link to="/transactions" class="flex items-center gap-4 px-4 py-3 text-gray-600 hover:text-indigo-600 border-2 border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 hover:shadow-md hover:border-indigo-200 transition-all duration-200">
          <i class="bi bi-arrow-left-right text-lg"></i> Transactions
        </router-link>

        <router-link to="/reports" class="flex items-center gap-4 px-4 py-3 text-gray-600 hover:text-indigo-600 border-2 border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 hover:shadow-md hover:border-indigo-200 transition-all duration-200">
          <i class="bi bi-bar-chart text-lg"></i> Reports
        </router-link>

        <router-link to="/settings" class="flex items-center gap-4 px-4 py-3 text-gray-600 hover:text-indigo-600 border-2 border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 hover:shadow-md hover:border-indigo-200 transition-all duration-200">
          <i class="bi bi-gear text-lg"></i> Settings
        </router-link>

        <router-link to="/notes" class="flex items-center gap-4 px-4 py-3 text-gray-600 hover:text-indigo-600 border-2 border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 hover:shadow-md hover:border-indigo-200 transition-all duration-200">
          <i class="bi bi-sticky text-lg"></i> Notes
        </router-link>

        <router-link to="/" class="flex items-center gap-4 px-4 py-3 text-red-600 hover:text-red-700 border-2 border-red-200 rounded-lg shadow-sm hover:bg-red-50 hover:shadow-md hover:border-red-300 transition-all duration-200 mt-8">
          <i class="bi bi-box-arrow-right text-lg"></i> Sign Out
        </router-link>
      </nav>

      <div class="absolute bottom-8 left-8 text-sm text-gray-500 font-medium">
        <i class="bi bi-info-circle mr-2"></i>
        About us
      </div>
    </aside>

    <!-- Main -->
    <main class="flex-1 p-12 ml-8">
      <!-- Header -->
      <div class="flex justify-between items-center mb-12">
        <div>
          <h1 class="text-4xl font-bold text-gray-800 mb-2">Welcome back!</h1>
          <p class="text-gray-600 text-lg">Here's your financial overview</p>
        </div>
        <div class="flex items-center space-x-4">
          
        </div>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div class="bg-white p-8 rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-200 min-w-64">
          <div class="flex items-center justify-between mb-4">
            <p class="text-gray-500 font-medium">Total Balance</p>
            <i class="bi bi-cash-stack text-2xl text-blue-500"></i>
          </div>
          <input v-model.number="store.balance" type="number" class="text-2xl font-bold w-full border-none outline-none bg-transparent text-gray-800" placeholder="Enter balance">
          <p class="text-sm text-gray-400 mt-2">RON</p>
        </div>

        <div class="bg-white p-8 rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-200 min-w-64">
          <div class="flex items-center justify-between mb-4">
            <p class="text-gray-500 font-medium">Income</p>
            <i class="bi bi-graph-up-arrow text-2xl text-green-500"></i>
          </div>
          <input v-model.number="store.income" type="number" class="text-2xl font-bold w-full border-none outline-none bg-transparent text-green-600" placeholder="Enter income">
          <p class="text-sm text-gray-400 mt-2">RON</p>
        </div>

        <div class="bg-white p-8 rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-200 min-w-64">
          <div class="flex items-center justify-between mb-4">
            <p class="text-gray-500 font-medium">Spendings</p>
            <i class="bi bi-graph-down-arrow text-2xl text-red-500"></i>
          </div>
          <input v-model.number="store.spendings" type="number" class="text-2xl font-bold w-full border-none outline-none bg-transparent text-red-600" placeholder="Enter spendings" readonly>
          <p class="text-sm text-gray-400 mt-2">RON</p>
        </div>
      </div>

      <!-- Recent activity -->
      <div class="bg-white p-8 rounded-2xl border-2 border-gray-100 shadow-lg">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-2xl font-bold text-gray-800">Recent Activity</h2>
          <i class="bi bi-clock-history text-2xl text-gray-400"></i>
        </div>

        <ul class="space-y-6">
          <li class="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <i class="bi bi-cart text-red-600 text-xl"></i>
              </div>
              <span class="font-semibold text-gray-800">Groceries Spendings</span>
            </div>
            <div class="flex items-center space-x-3">
              <input v-model.number="store.activities.groceries" type="number" class="w-24 text-right border-2 border-gray-300 rounded-lg px-3 py-2 font-semibold text-red-600 focus:border-red-400 focus:outline-none" placeholder="0">
              <span class="font-medium text-gray-600">RON</span>
            </div>
          </li>
          <li class="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <i class="bi bi-credit-card text-blue-600 text-xl"></i>
              </div>
              <span class="font-semibold text-gray-800">Monthly Subscriptions</span>
            </div>
            <div class="flex items-center space-x-3">
              <input v-model.number="store.activities.subscriptions" type="number" class="w-24 text-right border-2 border-gray-300 rounded-lg px-3 py-2 font-semibold text-red-600 focus:border-red-400 focus:outline-none" placeholder="0">
              <span class="font-medium text-gray-600">RON</span>
            </div>
          </li>
          <li class="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <i class="bi bi-bicycle text-purple-600 text-xl"></i>
              </div>
              <span class="font-semibold text-gray-800">Gym Membership</span>
            </div>
            <div class="flex items-center space-x-3">
              <input v-model.number="store.activities.gym" type="number" class="w-24 text-right border-2 border-gray-300 rounded-lg px-3 py-2 font-semibold text-red-600 focus:border-red-400 focus:outline-none" placeholder="0">
              <span class="font-medium text-gray-600">RON</span>
            </div>
          </li>
          <li class="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <i class="bi bi-fuel-pump text-orange-600 text-xl"></i>
              </div>
              <span class="font-semibold text-gray-800">Gas Station</span>
            </div>
            <div class="flex items-center space-x-3">
              <input v-model.number="store.activities.gas" type="number" class="w-24 text-right border-2 border-gray-300 rounded-lg px-3 py-2 font-semibold text-red-600 focus:border-red-400 focus:outline-none" placeholder="0">
              <span class="font-medium text-gray-600">RON</span>
            </div>
          </li>
        </ul>
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