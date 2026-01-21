<script setup>
import { ref } from 'vue'

const totalBalance = ref(5000)
const totalIncome = ref(6000)
const totalSpendings = ref(1000)
</script>

<script>
export default {
  name: 'DashboardView'
}
</script>

<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r border-gray-200 px-6 py-8">
      <h2 class="text-xl font-bold mb-10">Budget Planner</h2>

      <nav class="space-y-4">
        <router-link to="/dashboard" class="flex items-center gap-3 text-indigo-600 font-medium">
          <i class="bi bi-house"></i> Dashboard
        </router-link>

        <a class="flex items-center gap-3 text-gray-600 hover:text-indigo-600">
          <i class="bi bi-arrow-left-right"></i> Transactions
        </a>

        <a class="flex items-center gap-3 text-gray-600 hover:text-indigo-600">
          <i class="bi bi-bar-chart"></i> Reports
        </a>

        <a class="flex items-center gap-3 text-gray-600 hover:text-indigo-600">
          <i class="bi bi-gear"></i> Settings
        </a>
      </nav>

      <div class="absolute bottom-6 left-6 text-sm text-gray-500">
        About us
      </div>
    </aside>

    <!-- Main -->
    <main class="flex-1 p-10">
      <!-- Header -->
      <div class="flex justify-between items-center mb-10">
        <h1 class="text-3xl font-bold">Welcome, Leo!</h1>
        <span class="text-gray-500">date.time</span>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div class="bg-white p-6 rounded-lg border">
          <p class="text-gray-500 mb-2">Total Balance</p>
          <p class="text-2xl font-bold">{{ totalBalance }} RON</p>
        </div>

        <div class="bg-white p-6 rounded-lg border">
          <p class="text-gray-500 mb-2">Income</p>
          <p class="text-2xl font-bold text-green-600">
            + {{ totalIncome }} RON
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg border">
          <p class="text-gray-500 mb-2">Spendings</p>
          <p class="text-2xl font-bold text-red-600">
            - {{ totalSpendings }} RON
          </p>
        </div>
      </div>

      <!-- Recent activity -->
      <div class="bg-white p-6 rounded-lg border">
        <h2 class="text-xl font-semibold mb-6">Most recent activity</h2>

        <ul class="space-y-4 text-gray-700">
          <li>Groceries Spendings - 380 RON</li>
          <li>Monthly Subscriptions - 110 RON</li>
          <li>Gym Membership - 250 RON</li>
          <li>Gas Station - 300 RON</li>
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