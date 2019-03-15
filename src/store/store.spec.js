import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe("Redux store integration tests", () => {
  it("Should handle creating course", () => {
    // arrange
    const store = createStore(rootReducer, initialState);
    const course = {
      title: "Clean code"
    };

    // act
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);

    // assert
    const createdCourse = store.getState().courses[0];
    expect(createdCourse).toEqual(course);
  });
});