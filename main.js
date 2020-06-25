import {createApp} from 'vue'
// import App from './index.vue'
import App from './src/App.vue'
import './index.css'
import random from 'lodash/random'

createApp(App).mount('#app')
for (let i = 0; i < 10; i++)
  console.log('lodash ', random(0, 5))
console.log("APP")
//
