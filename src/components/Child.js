import React from 'react';
import { FamilyConsumer } from './Context';

const Child = () => {
  return (
    <div>
      <FamilyConsumer>{context => <h1>{context}</h1>}</FamilyConsumer>
    </div>
  );
};

export default Child;
