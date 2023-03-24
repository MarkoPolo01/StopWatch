<template>
  <div class="list">
    <div class="stopwatches">
      <StopWatch v-for="(stopwatch, index) in stopwatches" :key="index"/>
      <button @click="addStopwatch" class="addWatch">
        <img src="../../public/icons/addition.png" alt="addition">
      </button>
    </div>
  </div>
</template>

<script>
import StopWatch from './StopWatch.vue';

export default {
  components: {
    StopWatch,
  },
  data() {
    return {
      stopwatches: [{}, {}]
    }
  },
  methods: {
    addStopwatch: function () {
      this.stopwatches.push({})
    }
  },
};
</script>
<style>
.addWatch {
  width: 255px;
  height: 130px;
  background-color: #696969;
  border: none;
}
.stopwatches {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 72px;
}

.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media (max-width: 1024px) {
  .stopwatches {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .stopwatches {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>