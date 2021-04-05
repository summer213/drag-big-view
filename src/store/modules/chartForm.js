const state = {
    comForm: []
  }
  
  const mutations = {
    Update_ComForm: (state, comForm) => {
        // console.log(comForm,'===================')
        console.log(state, state.comForm, '===========')
        state.comForm = comForm;
    }
  }
  
  const actions = {
    updateComForm: ({commit}, comForm) => {
        commit('Update_ComForm', comForm)
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  

