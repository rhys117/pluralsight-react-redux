// This does not work due to the this part of the course being outdated.

// import React from 'react';
// import { mount } from 'enzyme';
// import expect from 'expect';
// import courses from '../../reducers/courseReducer';
// import authors from '../../reducers/authorReducer';
// import {ManageCoursePage} from './ManageCoursePage';
//
// function render(args) {
//   let newCourse = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
//   const defaultProps = {
//     authors,
//     courses,
//     // Passed from React Router in real app, so stubbing for testing.
//     history: {},
//     saveCourse: () => {},
//     loadAuthors: () => {},
//     loadCourses: () => {},
//     course: newCourse,
//     match: {}
//   };
//
//   const props = {...defaultProps, ...args}; // Object.assign({}, defaultProps, args);
//
//   return mount(<ManageCoursePage {...props} />);
// }
//
// it("sets error when attempting to save an empty title field", () => {
//   const wrapper = render();
//   wrapper.find("form").simulate("submit");
//   const error = wrapper.find(".alert").first();
//   expect(error.text()).toBe("Title is required.");
// });