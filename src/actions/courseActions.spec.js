import * as courseActions from './courseActions';
import * as types from './actionTypes';
import CourseApi, { courses } from '../api/mockCourseApi';
import expect from 'expect';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    CourseApi.getAllCourses();
  });

  describe("Load Courses Thunk", () => {
    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', () => {
      const expectedActions = [
        { type: types.BEGIN_AJAX_CALL },
        { type: types.LOAD_COURSES_SUCCESS, courses }
      ];

      const store = mockStore({courses: []});
      return store.dispatch(courseActions.loadCourses()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe("creatoCourseSuccess", () => {
  it('should create a CREATE_COURSE_SUCCESS action', () => {
    // arrange
    const course = courses[0];
    const expectedAction = {
      type: types.CREATE_COURSE_SUCCESS,
      course: course
    };

    // act
    const action = courseActions.createCourseSuccess(course);

    // assert
    expect(action).toEqual(expectedAction);
  });
});