<script setup>
defineOptions({
  name: 'ReportsView'
})
import { ref } from 'vue'

const monthlyData = ref([
  { month: 'Jan', income: 4000, expenses: 3200 },
  { month: 'Feb', income: 4500, expenses: 3800 },
  { month: 'Mar', income: 4200, expenses: 3500 },
  { month: 'Apr', income: 4800, expenses: 4100 },
  { month: 'May', income: 5000, expenses: 4300 },
  { month: 'Jun', income: 5200, expenses: 4500 },
])
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

        <router-link to="/transactions" class="flex items-center gap-3 text-gray-600 hover:text-indigo-600">
          <i class="bi bi-arrow-left-right"></i> Transactions
        </router-link>

        <router-link to="/reports" class="flex items-center gap-3 text-indigo-600 font-medium">
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
    

      <!-- Summary Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div class="bg-white p-6 rounded-lg border">
          <p class="text-gray-500 mb-2">Total Income (6 months)</p>
          <p class="text-2xl font-bold text-green-600">27,700 RON</p>
        </div>

        <div class="bg-white p-6 rounded-lg border">
          <p class="text-gray-500 mb-2">Total Expenses (6 months)</p>
          <p class="text-2xl font-bold text-red-600">23,400 RON</p>
        </div>

        <div class="bg-white p-6 rounded-lg border">
          <p class="text-gray-500 mb-2">Net Savings</p>
          <p class="text-2xl font-bold text-blue-600">4,300 RON</p>
        </div>
      </div>

      <!-- Monthly Chart (Simplified) -->
      <div class="bg-white p-6 rounded-lg border mb-6">
        <h2 class="text-xl font-semibold mb-4">Monthly Overview</h2>
        <div class="space-y-4">
          <div v-for="data in monthlyData" :key="data.month" class="flex items-center justify-between">
            <span class="font-medium">{{ data.month }}</span>
            <div class="flex items-center space-x-4">
              <div class="flex items-center">
                <div class="w-4 h-4 bg-green-500 rounded mr-2"></div>
                <span class="text-sm text-green-600">{{ data.income }} RON</span>
              </div>
              <div class="flex items-center">
                <div class="w-4 h-4 bg-red-500 rounded mr-2"></div>
                <span class="text-sm text-red-600">{{ data.expenses }} RON</span>
              </div>
            </div>
          </div>
        </div>
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