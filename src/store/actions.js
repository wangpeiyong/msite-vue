import axios from 'axios'
import RequestUtils from '../utils/RequestUtils'
import * as types from './mutation-types.js'
let num = 0;

/* 异步操作 */
export default {
  async getHotPosition({commit, state}, param) {
		let showLoadingFlag;
		commit(types.GET_HOT_POSITION, {showLoadingFlag: true});
    axios.get('./config/hot.json').then((response) => {
      const hotPosition = response.data.Job2.Item
      commit(types.GET_HOT_POSITION, {hotPosition, showLoadingFlag: false});
    });
	},
  async getHotIndustry({commit, state}, param) {
		let showLoadingFlag;
		commit(types.GET_HOT_INDUSTRY, {showLoadingFlag: true});
    axios.get('./config/hot.json').then((response) => {
      const hotIndustry = response.data.Industrys.Industry
      commit(types.GET_HOT_INDUSTRY, {hotIndustry, showLoadingFlag: false});
    });
	},
  async getPositionList({commit, state}, param) {
		let showLoadingFlag;
		commit(types.GET_POSITION_LIST, {showLoadingFlag: true});
    let positionList = await RequestUtils.get(param)
    commit(types.GET_POSITION_LIST, {positionList, showLoadingFlag: false});
	},
  async getJobHuntingTreasure({commit, state}, param) {
		let showLoadingFlag;
		commit(types.GET_JOB_HUNTING_TREASURE, {showLoadingFlag: true});
    let jobHuntingTreasure = await RequestUtils.get(param)
    commit(types.GET_JOB_HUNTING_TREASURE, {jobHuntingTreasure, showLoadingFlag: false});
	},
  async getUserDetail({commit, state}, param) {
		let showLoadingFlag,
			userDetail = {};
		commit(types.GET_USER_DETAIL, {userDetail, showLoadingFlag: true});
    userDetail = await RequestUtils.get(param)
    commit(types.GET_USER_DETAIL, {userDetail, showLoadingFlag: false});
	},
	getRecommendList({commit, state}) {
		let showLoadingFlag,
			list = [];
		commit(types.GET_RECOMMEND_LIST, {list, showLoadingFlag: true});
		axios.get('./mock/recommendList.json').then((response) => {
			if(response.data.status == 1) {
				list = response.data.list;
				// setTimeout(() => {
					commit(types.GET_RECOMMEND_LIST, {list, showLoadingFlag: false});
				// }, 1 * 1000);
			}
		});
	},

}

