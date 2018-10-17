import * as TYPES from './mutation-types.js'

export default {
	[TYPES.GET_POSITION_LIST](state, payload) {
		state.showLoading = payload.showLoadingFlag;
		if (payload.positionList) {
		  state.positionList = payload.positionList;
    }
	},
	[TYPES.GET_JOB_HUNTING_TREASURE](state, payload) {
		state.showLoading = payload.showLoadingFlag;
		if (payload.jobHuntingTreasure) {
		  state.jobHuntingTreasure = payload.jobHuntingTreasure;
    }
	},
	[TYPES.GET_HOT_POSITION](state, payload) {
		state.showLoading = payload.showLoadingFlag;
		if (payload.hotPosition) {
		  state.hotPosition = payload.hotPosition;
    }
	},
	[TYPES.GET_HOT_INDUSTRY](state, payload) {
		state.showLoading = payload.showLoadingFlag;
		if (payload.hotIndustry) {
		  state.hotIndustry = payload.hotIndustry;
    }
	},
	[TYPES.GET_USER_DETAIL](state, payload) {
		state.showLoading = payload.showLoadingFlag;
		state.userDetail = payload.userDetail;
	},
	[TYPES.GET_RECOMMEND](state, payload) {
		state.showLoading = payload.showLoadingFlag;
		state.recommend = payload.recommend;
	},
	[TYPES.GET_RECOMMEND_LIST](state, payload) {
		state.showLoading = payload.showLoadingFlag;
		state.positionList = payload.list;
	},
  [TYPES.CITY] (state, city) {
    state.city = city
  },
  [TYPES.IS_SHOW_QUERY_SELETOR] (state, isShowQuerySelector) {
    console.log(isShowQuerySelector)
    state.isShowQuerySelector = isShowQuerySelector
  },
  [TYPES.IS_SHOW_CITY_BOX] (state, isShowCityBox) {
    state.isShowCityBox = isShowCityBox
  },
  [TYPES.LETTERS_CONFIG] (state, LETTERS_CONFIG) {
    state.lettersConfig = LETTERS_CONFIG
  }
}
