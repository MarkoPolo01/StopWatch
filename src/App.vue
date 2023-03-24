<template>
  <div id="app">
    <StopWatchList />
  </div>
</template>

<script>


import StopWatchList from "@/components/StopWatchList";
export default {
  name: 'App',
  components: {
    StopWatchList

  }
}
</script>

<style>
body {
  background-color: #353638;
   height: 100%;
  border: none;
}
@font-face {
  font-family: 'Gotham Pro';
  src: url('../fonts/gothampro.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
</style>
