import React from 'react';

const SSRPage = async () => {
  const req = await fetch('https://catfact.ninja/fact', {
    cache: 'no-cache',
  });
  const res = await req.json();
  return (
    <>
      <h1>SSR(Server Side Rendering) 페이지 입니다.</h1>
      <h2>-Fact 데이터가 매번 갱신 됩니다. </h2>
      <div>Fact: {res.fact}</div>
    </>
  );
};

export default SSRPage;
