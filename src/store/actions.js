import Vue from 'vue'
import axios from 'axios'
import RequestUtils from '../utils/RequestUtils'
import * as types from './mutation-types.js'

function handleError(msg) {
  console.error(msg)
  Vue.toasted.error(msg).goAway(2000);
  return
}
/* 异步操作 */
export default {
  async getHotPosition({commit, state}, param) {
		let showLoadingFlag;
		commit(types.GET_HOT_POSITION, {showLoadingFlag: false});
    axios.get('./config/hot.json').then((response) => {
      const hotPosition = response.data.Job2.Item
      commit(types.GET_HOT_POSITION, {hotPosition, showLoadingFlag: false});
    }).catch(msg => {
    })
	},
  async getHotIndustry({commit, state}, param) {
		let showLoadingFlag;
		commit(types.GET_HOT_INDUSTRY, {showLoadingFlag: false});
    axios.get('./config/hot.json').then((response) => {
      const hotIndustry = response.data.Industrys.Industry
      commit(types.GET_HOT_INDUSTRY, {hotIndustry, showLoadingFlag: false});
    }).catch(msg => {
    })
	},
  async getPositionList({commit, state}, param) {
		let showLoadingFlag;
		commit(types.GET_POSITION_LIST, {showLoadingFlag: true});
    let positionList = await RequestUtils.get(param).catch(msg => {
      handleError(msg)
    })
    commit(types.GET_POSITION_LIST, {positionList, showLoadingFlag: false});
	},
  async getFavoritedPositionList({commit, state}, param) {
		let showLoadingFlag;
		commit(types.GET_FAVORITED_POSITION_LIST, {showLoadingFlag: true});
    let favoritedPositionList = await RequestUtils.get(param).catch(msg => {
      handleError(msg)
    })
    commit(types.GET_FAVORITED_POSITION_LIST, {favoritedPositionList, showLoadingFlag: false});
	},
  async getShowNumber({commit, state}, param) {
		let showLoadingFlag;
		commit(types.GET_SHOW_NUMBER, {showLoadingFlag: true});
    let showNumber = await RequestUtils.get(param).catch(msg => {
      handleError(msg)
    })
    commit(types.GET_SHOW_NUMBER, {showNumber, showLoadingFlag: false});
	},
  async getJobHuntingTreasure({commit, state}, param) {
		let showLoadingFlag;
		commit(types.GET_JOB_HUNTING_TREASURE, {showLoadingFlag: true});
    let jobHuntingTreasure = await RequestUtils.get(param).catch(msg => {
      handleError(msg)
    })
    commit(types.GET_JOB_HUNTING_TREASURE, {jobHuntingTreasure, showLoadingFlag: false});
	},
  async getUserDetail({commit, state}, param) {
		let showLoadingFlag,
			userDetail = {};
		commit(types.GET_USER_DETAIL, {userDetail, showLoadingFlag: true});
    userDetail = await RequestUtils.get(param).catch(msg => {
      handleError(msg)
    })
    commit(types.GET_USER_DETAIL, {userDetail, showLoadingFlag: false});
	},
  async getRecommend({commit, state}, param) {
		let showLoadingFlag,
      recommend = {};
		commit(types.GET_RECOMMEND, {recommend, showLoadingFlag: true});
    recommend = await RequestUtils.get(param).catch(msg => {
      handleError(msg)
    })
    commit(types.GET_RECOMMEND, {recommend, showLoadingFlag: false});
	},
  async logout({commit, state}, param) {
		let showLoadingFlag;
    await RequestUtils.get(param).catch(msg => {
      handleError(msg)
    })
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
		}).catch(msg => {
      handleError(msg)
    })
	},

}

