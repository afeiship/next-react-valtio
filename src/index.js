import nx from '@jswork/next';
import { proxy, useSnapshot } from 'valtio';
import { useRef } from 'react';

const NxReactValtio = nx.declare('nx.ReactValtio', {
  statics: {
    init: function () {
      nx.$valtio = (initialState) => {
        const store = useRef(proxy(initialState)).current;
        const state = useSnapshot(store);
        return { store, state };
      };
    }
  }
});

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = NxReactValtio;
}

export default NxReactValtio;
