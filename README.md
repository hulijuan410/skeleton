# react-skeleton-component

**react-skeleton-component**是基于[Typescript](https://www.typescriptlang.org)和[React Hooks](https://zh-hans.reactjs.org/docs/hooks-reference.html)封装的一个骨架屏组件，可在react项目中开箱即用。在页面数据加载完成前，先给用户展示出页面的大致结构（占位图），在拿到接口数据渲染出实际页面内容之后替换掉，这样不会造成网页长时间白屏或者闪烁，优化用户体验。

## 安装

```bash
// npm
$> npm install react-skeleton-component
// yarn
$> yarn add react-skeleton-component
```

## 快速入门 [在 codesandbox 试试吧](https://codesandbox.io/s/rh39pr?file=/src/App.tsx)
```ts
import Skeleton from "react-skeleton-component";
    
export default function App() {
  ...
  ...// 定义一些变量或者执行一些操作blabla....
  ...
  
  return (
    <>
      <button onClick={handleClick.bind(null)}>button</button>
      // 数据没有请求回来之前展示占位图，请求回来展示真实数据
      <ul>
        {state.loading ? (
          <Skeleton className="item" count={10} /> 
        ) : (
          data.map((item) => (
            <li className="item" key={item.cell}>
              {item.name.title}
            </li>
          ))
        )}
        {state.error && <div>error</div>}
      </ul>
    </>
  );
}
```
react-skeleton-component组件有默认类名，设置了占位图的默认样式和动画效果，如果自带的效果不能满足需求的话，react-skeleton-component还有其他的一些可配置参数来满足不同的需求，具体看👇参数；
## 可配置参数
- count: 可以展示几个占位图，number类型，默认为1；
- width：占位图的宽度，number类型，默认为父元素宽度；
- height：占位图的高度，number类型，默认为父元素高度；
- circle: 占位图是否为圆形，boolean类型，默认为false；
- className：类名，string类型，默认自带了“react-loading-skeleton”类名；
- style：样式，React.CSSProperties类型，默认为空；
- duration：渐变动画持续时间，number类型，默认为2s;
- colorStart: 渐变动画的开始颜色，string类型，默认为空；
- colorEnd：渐变动画的结束颜色，string类型，默认为空；
- rem2px：传入的宽高是否需要转换成px，boolean类型，默认为false；


