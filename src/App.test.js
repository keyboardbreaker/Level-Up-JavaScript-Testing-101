import {total} from './App.js';

//mock function that gives you results without access to the 
//actual function
const add = jest.fn(() => 3);

test('add', () => {
    //const value = add(1, 2);
    expect(add(1, 2)).toBe(3);
    expect(add).toHaveBeenCalledTimes(1);
    expect(add).toHaveBeenCalledWith(1, 2);
});

// test('total', () => {
//     expect(total(5, 20)).toBe('£25');
// });