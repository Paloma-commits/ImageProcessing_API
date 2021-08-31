// import app from '../../index'
import myFunc from '../../index'

// //describe(suite goes here);

// it("Should start the server on port 3,000", ()=> {

// });

it('should get number 45', () => {
    expect(myFunc(9).toEqual(45));
});

