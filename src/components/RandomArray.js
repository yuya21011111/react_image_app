// import React from 'react';

// function RandomArrays() {
//     // ランダムな0と1の配列を生成する関数
//     const generateRandomArray = () => {
//       const array = [];
//       for (let i = 0; i < 8; i++) {
//         const randomNum = Math.floor(Math.random() * 2); // 0か1をランダムに生成
//         array.push(randomNum);
//       }
//       return array;
//     };
  
//     // 8個のランダムな配列を生成
//     const randomArrays = Array.from({ length: 50 }, () => generateRandomArray());
  
//     return (
//       <div>
//         {randomArrays.map((array, index) => (
//           <div key={index}>{array.join(' ')}</div>
//         ))}
//       </div>
//     );
//   }
  
//   export default RandomArrays;