import nx from '@jswork/next';
import { proxy, useSnapshot } from 'valtio';
import { useProxy } from 'valtio/utils';
import { derive } from 'derive-valtio';
import { useRef } from 'react';
import createValtioState from '@jswork/create-valtio-state';

const NxReactValtio = nx.declare('nx.ReactValtio', {
  statics: {
    init: function() {
      nx.$defineProxy = createValtioState;
      nx.$useProxy = useProxy;
      nx.$valtio = (initialState, inGetters) => {
        const store = useRef(proxy(initialState)).current;
        const state = useSnapshot(store);
        const gettersEntries = useRef(inGetters || {}).current;

        nx.forIn(gettersEntries, (key, value) => {
          const getterFn = () => value(store);
          gettersEntries[key] = getterFn;
        });

        const computed = derive(gettersEntries);
        return { state, store, computed };
      };
    }
  }
});

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = NxReactValtio;
}

export default NxReactValtio;
