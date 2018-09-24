import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = {
  productItems: [],
};

const productModule = {
  state,
  mutations,
  actions,
  getters
}

export default productModule;