import { createModel, init } from '@rematch/core'

const count = createModel({
  state: 0,
  reducers: {
    increment(state) {
      return state + 1
    }
  }
})

const store = init({
  name: 'left',
  models: {
    count
  }
})

export default store
