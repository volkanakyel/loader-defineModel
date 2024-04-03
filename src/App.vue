<template>
  <header>
    <h1>Vue Feature Test</h1>
  </header>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav class=" navbar">
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/defineModel">DefineModel test</RouterLink>
    <RouterLink to="/skeletonLoading">Skeleton loading</RouterLink>
    <RouterLink to="/Api">Input debounce</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  max-width: 972px;
  margin: 24px auto;

  h1 {
    text-align: center;
  }
}

.navbar {
  display: flex;
  gap: 24px;
}
</style>