import {hasIntersection} from "./hasIntersection";


it('hasIntersection', () => {
    expect(hasIntersection([5,10],[7,9])).toEqual(true);
    expect(hasIntersection([5,10],[11,19])).toEqual(false);

});
