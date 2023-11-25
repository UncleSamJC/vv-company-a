//Store
// store.js
import Vue from 'vue';
import Vuex from 'vuex';
import {
	option as projectTotalOption
} from '@/api/bar-total-option.js';
import {
	option as barTwoOption
} from '@/api/bar-2-option.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state() {
		return {
			projectTotalOption,
			barTwoOption
		}

	},
	mutations: {
		bar2FSRchange(state) {
			//state.count++
			console.log('进入store的change方法了,Now')
			console.log(state.barTwoOption.series[0].data);


			// Factor (FSR) ranging from 5 to 10
			const minFSR = 5;
			const maxFSR = 10;
			const FSR = Math.random() * (maxFSR - minFSR) + minFSR;


			//算法2：
			const modifiedData = [];
			const leng = state.barTwoOption.series[0].data.length;
			for (let i = 0; i < leng; i++) {
				//modifiedData.push(this.option2.series[0].data[i] * Math.pow(FSR, 2)); // You can adjust the power as needed
				//modifiedData.push(state.barTwoOption.series[0].data[i] * (1 + i / 100));
				modifiedData.push(state.barTwoOption.series[0].data[i] * (1 + i / 100));
			}

			state.barTwoOption.series[0].data = modifiedData;


			console.log("After", state.barTwoOption.series[0].data);

		}
	}

})