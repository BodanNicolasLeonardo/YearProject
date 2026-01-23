<script setup>
defineOptions({
  name: 'BudgetNotes'
})

import { ref, onMounted } from 'vue'

const notes = ref('')

onMounted(() => {
  const savedNotes = localStorage.getItem('budgetNotes')
  if (savedNotes) {
    notes.value = savedNotes
  }
})

const saveNotes = () => {
  localStorage.setItem('budgetNotes', notes.value)
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
        <router-link to="/dashboard" class="flex items-center gap-4 px-4 py-3 text-gray-600 hover:text-indigo-600 border-2 border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 hover:shadow-md hover:border-indigo-200 transition-all duration-200">
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

        <router-link to="/notes" class="flex items-center gap-4 px-4 py-3 text-indigo-600 font-semibold bg-indigo-50 border-2 border-indigo-200 rounded-lg shadow-sm hover:bg-indigo-100 hover:shadow-md transition-all duration-200">
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

    <!-- Main Content -->
    <main class="flex-1 p-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">Notes</h1>
        <div class="bg-white rounded-lg shadow-lg p-6">
          <textarea
            v-model="notes"
            @input="saveNotes"
            placeholder="Write your notes here..."
            class="w-full h-96 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          ></textarea>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Additional styles if needed */
</style>