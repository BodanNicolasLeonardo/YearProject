import { defineStore } from 'pinia'
import { computed, watch } from 'vue'
import { ref } from 'vue'
export const useBudgetStore = defineStore('budget', () => {
  const balance = ref(5000)
  const income = ref(6000)
  const spendings = ref(1000)

  const activities = ref({
    groceries: 380,
    subscriptions: 110,
    gym: 250,
    gas: 300
  })

  const totalActivitiesSpendings = computed(() => {
    return Object.values(activities.value).reduce((sum, amount) => sum + amount, 0)
  })

  // Update spendings when activities change
  watch(totalActivitiesSpendings, (newTotal) => {
    spendings.value = newTotal
  }, { immediate: true })

  // Update balance when income or spendings change
  watch([income, spendings], () => {
    balance.value = income.value - spendings.value
  }, { immediate: true })

  return {
    balance,
    income,
    spendings,
    activities,
    totalActivitiesSpendings
  }
})