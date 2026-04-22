<script setup>
defineOptions({
  name: 'SettingsPage'
})

import { ref } from 'vue'

const user = ref({
  name: 'Leo',
  email: 'leo@example.com',
  currency: 'RON'
})

const notifications = ref({
  email: true,
  push: false,
  budgetAlerts: true
})
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

        <router-link to="/reports" class="flex items-center gap-3 text-gray-600 hover:text-indigo-600">
          <i class="bi bi-bar-chart"></i> Reports
        </router-link>

        <router-link to="/settings" class="flex items-center gap-3 text-indigo-600 font-medium">
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
        <h1 class="text-3xl font-bold">Settings</h1>
    
      </div>

      <!-- Profile Settings -->
      <div class="bg-white p-6 rounded-lg border mb-6">
        <h2 class="text-xl font-semibold mb-4">Profile</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input v-model="user.name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input v-model="user.email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Currency</label>
            <select v-model="user.currency" class="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option value="RON">RON</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Notification Settings -->
      <div class="bg-white p-6 rounded-lg border mb-6">
        <h2 class="text-xl font-semibold mb-4">Notifications</h2>
        <div class="space-y-4">
          <div class="flex items-center">
            <input v-model="notifications.email" type="checkbox" class="mr-3">
            <label class="text-sm font-medium text-gray-700">Email notifications</label>
          </div>
          <div class="flex items-center">
            <input v-model="notifications.push" type="checkbox" class="mr-3">
            <label class="text-sm font-medium text-gray-700">Push notifications</label>
          </div>
          <div class="flex items-center">
            <input v-model="notifications.budgetAlerts" type="checkbox" class="mr-3">
            <label class="text-sm font-medium text-gray-700">Budget alerts</label>
          </div>
        </div>
      </div>

      <!-- Save Button -->
      <div class="flex justify-end">
        <button class="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
          Save Changes
        </button>
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