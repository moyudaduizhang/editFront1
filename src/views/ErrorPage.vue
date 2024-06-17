<template>
  <div class="error-page">
    <h1>404 - 无法找到该页面</h1>
    <p>Oops! The page you are looking for might have been removed or its URL is incorrect.</p>
    <p><router-link to="/" class="btn-home">回到首页</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
}
</script>

<style scoped>
.error-page {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 2em;
  color: #333;
}

p {
  font-size: 1.1em;
  color: #666;
  margin-bottom: 15px;
}

.btn-home {
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  padding: 8px 16px;
  border-radius: 5px;
  font-weight: bold;
}

.btn-home:hover {
  background-color: #0056b3;
}
</style>
