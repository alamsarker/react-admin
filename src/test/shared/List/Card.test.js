import React from 'react'
//import { shallow } from 'enzyme/build'
import {shallow} from 'enzyme'
import Card from '../../../shared/List/Card'

test('Card Component', () => {
  //expect(1).toBe(1)
  const wrapper = shallow(
    <Card {...{
      name: 'TEST CARD',
      body: 'HelloWorld'
    }} />
  );
  console.log(wrapper)
})
