<template>
  <div class="clock">
    <div class="number_block">
      <div class="number" :class="{ 'color-white': colorWhite }" v-if="hours > 0">{{ hours }}:</div>
      <div class="number" :class="{ 'color-white': colorWhite }" v-if="hours > 0 || minutes > 0">{{ minutes }}:</div>
      <div class="number" :class="{ 'color-white': colorWhite }">{{ seconds }}</div>
    </div>
    <hr :class="{ 'color-white': colorWhite }">
    <div class="button_block">
      <button @click="toggleTimer" class="button_item">
        <img v-bind:src="buttonImage" v-bind:alt="buttonAlt"/>
      </button>
      <button @click="reset">
        <img v-bind:src="buttonImageS" alt="Restart">
      </button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      running: false,
      startTime: null,
      elapsedTime: 0,
      buttonImage: require('../../public/icons/start.png'),
      buttonImageS: require('../../public/icons/square.png'),
      buttonAlt: 'Start',
      colorWhite: false,
    };
  },
  computed: {
    hours() {
      const hours = Math.floor(this.elapsedTime / 3600);
      return hours > 0 ? (hours < 10 ? `${hours}` : hours) : '';
    },
    minutes() {
      const minutes = Math.floor((this.elapsedTime % 3600) / 60);
      return minutes > 0 ? (minutes < 10 ? `${minutes}` : minutes) : '';
    },
    seconds() {
      const seconds = this.elapsedTime % 60;
      return seconds < 10 ? `0${seconds}` : seconds;
    },
  },
  methods: {
    toggleTimer() {
      if (!this.running) {
        this.startTime = new Date().getTime() - this.elapsedTime * 1000;
        this.timer = setInterval(() => {
          this.elapsedTime = Math.floor((new Date().getTime() - this.startTime) / 1000);
        }, 1000);
        this.running = true;
        this.colorWhite = true;
        this.buttonImage = require('../../public/icons/pause_white.png');
        this.buttonImageS = require('../../public/icons/sguare_white.png');
        this.buttonAlt = 'Pause';
      } else {
        clearInterval(this.timer);
        this.running = false;
        this.colorWhite = false;
        this.buttonImage = require('../../public/icons/start.png');
        this.buttonImageS = require('../../public/icons/square.png');
        this.buttonAlt = 'Start';
      }
    },
    reset() {
      this.elapsedTime = 0;
      this.running = false;
      this.colorWhite = false;
      clearInterval(this.timer);
      this.buttonImage = require('../../public/icons/start.png');
      this.buttonImageS = require('../../public/icons/square.png');

    },
  },
};
</script>
<style>
.clock {
  display: flex;
  flex-direction: column;
  width: 255px;
  height: 130px;
  background-color: #696969;
  border: none;
  margin-bottom: 45px;
  align-items: center;
  margin-right: 50px;
  justify-content: center;
}

button {
  border: none;
  background-color: #696969;;
}

.number {
  font-family: Gotham Pro, sans-serif;
  font-size: 22px;
  font-weight: 400;
  text-align: center;
  color: #9E9E9E;
}

.number_block {
  display: flex;
  flex-direction: row;
  margin-top: 22px;
  margin-bottom: 20px;
  height: 22px;

}

hr {
  border-color: #9E9E9E;
  width: 99%;
  margin: 0;

}

.button_block {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;

}

.color-white {
  color: #FFFFFF;
  border-color: #FFFFFF;
}

.button_item {
  margin-right: 48px;
}
</style>