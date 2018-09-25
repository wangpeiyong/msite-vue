import * as TYPES from './mutation-types.js'

export default {
	[TYPES.GET_POSITION_LIST](state, payload) {
		state.showLoading = payload.showLoadingFlag;
		state.positionList = payload.positionList;
	},
	[TYPES.GET_USER_DETAIL](state, payload) {
		state.showLoading = payload.showLoadingFlag;
		state.userDetail = payload.userDetail;
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
