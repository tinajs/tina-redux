class TinaRedux {
  constructor (reduxStore) {
    this.reduxStore = reduxStore
  }

  connect (mapState = () => ({}), mapDispatch = dispatch => ({ dispatch })) {
    let { reduxStore } = this
    let unsubscribe

    function update () {
      if (unsubscribe) {
        const state = mapState(reduxStore.getState(), this.data)
        this.setData(state)
      }
    }

    function onLoad () {
      if (typeof mapState === 'function') {
        unsubscribe = reduxStore.subscribe(update.bind(this))
        update.call(this)
      }
    }

    function onUnload () {
      if (typeof unsubscribe === 'function') {
        unsubscribe()
        unsubscribe = null
      }
    }

    return {
      onLoad,
      onUnload,
      methods: Object.assign(mapDispatch(reduxStore.dispatch), {
        $dispatch: reduxStore.dispatch,
      }),
    }
  }
}

export default TinaRedux
