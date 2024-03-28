<template>
  <h1>Vue Feature Test</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/defineModel">DefineModel test</RouterLink>
    <RouterLink to="/skeletonLoading">Skeleton loading</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>