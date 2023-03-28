const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Goal One',
      // courseGoalB: '<h2>Goal Two</h2>',
      courseGoalB: 'Goal Two',
      vueLink: 'https://vuejs.org'
    }
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random()
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});

app.mount('#user-goal');
