// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';

// function HelloWorld() {
//   return (
//     // <div className="App">
      
//     // </div>
//     <h1>HelloWorld</h1>
//   );
// }



// html 요소 를 만든다 
// const ohMyGod = react.createElement // 1) 

// function OhMyGod() {
//     return (
//         <h1>OhMyGod</h1>
//     );
// }

// const ChildComponent = () => {  
//     return <p>I'm the 1st child!</p>; 
//   };
// 데이터 처리 이렇게 함 
const ChildComponent = (props) => {  
    return (
        <p>{props.hey || "없읍!!!!"}</p>,
        // <p>{props.text + " : 텍스트" || " 텍스트 없읍!!!!"}</p>,
        <p>{ `이것은 텍스트 입니다! ${props.text || "haha" }`}</p>
    ); 
};

// 오마이갓 컴포넌트 
class OhMyGod extends React.Component {  
    render() {
      return (
        <h1>
          I'm the parent component OhMyGod.
          <ChildComponent hey={"야아아아아아!!!!!"} text= {"이것은 텍스트!!!"}/>
          <ChildComponent />
          <ChildComponent />
        </h1>
      );
    }
  }

// ​ReactDOM.render(element, container[, callback])
// 헬로우 클래스 정의 
// class OhMyGod extends react.Component {
//     // 랜더링을 한다 .
//     render() {
//         console.log('Hello - render() called')
//         return ohMyGod('h1', null, [
//             'OhMyGod',
//             this.props.name || 'World'
//         ])
//     }
// }

// ReactDOM.render(
//     h(Hello, { name: null }),
//     document.getElementsByTagName('body')[0]
// )



export default OhMyGod;
