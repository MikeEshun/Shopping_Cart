import getters from './getters';
import actions from './actions';
import mutations from './mutations';


const state = {
  cartItems: [],
};

const cartModule = {
  state,
  mutations,
  actions,
  getters
}


export default cartModule;