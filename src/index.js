import nx from '@jswork/next';
import { proxy, useSnapshot } from 'valtio';
import { derive } from 'derive-valtio';
import { useRef } from 'react';

const defaults = { getters: {} };

const NxReactValtio = nx.declare('nx.ReactValtio', {
  statics: {
    init: function () {
      nx.$valtio = (initialState, inOptions) => {
        const store = useRef(proxy(initialState)).current;
        const state = useSnapshot(store);
        const options = nx.mix(null, defaults, inOptions);
        const gettersEntries = {};

        nx.forIn(options.getters, (key, value) => {
          const getterFn = () => value(store);
          gettersEntries[key] = getterFn;
        });

        const computed = derive(gettersEntries);
        return { state, store, ...computed };
      };
    }
  }
});

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = NxReactValtio;
}

export default NxReactValtio;
