import * as TYPES from './mutation-types.js'

export default {
	[TYPES.GET_USER_DETAIL](state, payload) {
		state.showLoading = payload.showLoadingFlag;
		state.userDetail = payload.userDetail;
	},
	[TYPES.GET_RECOMMEND_LIST](state, payload) {
		state.showLoading = payload.showLoadingFlag;
		state.recommendList = payload.list;
	},
}
