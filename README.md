# next-react-valtio
> Valtio for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
yarn add valtio
yarn add @jswork/next-react-valtio
```

## usage
```js
import '@jswork/next-react-valtio';
```

```jsx
const InteractiveList = () => {
  const { state, store } = nx.$valtio<number[]>([1, 2, 3, 4]);
  return (
    <div className="bg-slate-100 p-2">
      <h1>Vite + React</h1>
      <nav className="mt-4 flex gap-1 border border-solid p-1">
        <button onClick={() => store.push(state.length + 1)}>添加</button>
        <button
          onClick={() => {
            store.splice(0, state.length, ...['a', 'b', 'c', 'd', 'e']);
          }}>
          Reset
        </button>
      </nav>
      {state.map((item, index) => (
        <div className="m-2 block border" key={index}>
          <span className="bold mr-1">{item}</span>
          <button onClick={() => store.splice(index, 1)}>删除</button>
        </div>
      ))}
      {state.length === 0 && <div className="m-2 block border">暂无数据</div>}
    </div>
  );
};

export default InteractiveList;
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-react-valtio/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-react-valtio
[version-url]: https://npmjs.org/package/@jswork/next-react-valtio

[license-image]: https://img.shields.io/npm/l/@jswork/next-react-valtio
[license-url]: https://github.com/afeiship/next-react-valtio/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-react-valtio
[size-url]: https://github.com/afeiship/next-react-valtio/blob/master/dist/next-react-valtio.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-react-valtio
[download-url]: https://www.npmjs.com/package/@jswork/next-react-valtio
