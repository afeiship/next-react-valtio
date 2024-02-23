import nx from '@jswork/next';
import { proxy, useSnapshot } from 'valtio';
import { derive } from 'derive-valtio';
import { useRef } from 'react';

const NxReactValtio = nx.declare('nx.ReactValtio', {
  statics: {
    init: function() {
      nx.$valtio = (initialState, inGetters) => {
        const store = useRef(proxy(initialState)).current;
        const state = useSnapshot(store);
        const gettersEntries = useRef(inGetters || {}).current;

        nx.forIn(gettersEntries, (key, value) => {
          const getterFn = () => value(store);
          gettersEntries[key] = getterFn;
        });

        const getters = derive(gettersEntries);
        return { state, store, getters };
      };
    }
  }
});

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = NxReactValtio;
}

export default NxReactValtio;
