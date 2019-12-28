import * as actions from "./actions";
import * as types from "./constants";

import configureStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureStore([thunkMiddleware]);

describe("actions", () => {

  it("should create an action to search robots", () => {
    const text = "wooo";
    const expectedAction = {
      type: types.CHANGE_SEARCHFIELD,
      payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });

  it("should handle requesting robots API", () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    const expectedAction = {
      type: types.REQUEST_ROBOTS_PENDING
    }
    expect(action[0]).toEqual(expectedAction);
  });

  it("should handle requesting robots API success", async () => {
    const store = mockStore();
    const expectedActions = [
      "REQUEST_ROBOTS_PENDING",
      "REQUEST_ROBOTS_SUCCESS"
    ]
    await store.dispatch(actions.requestRobots()).then(() => {
      const testingActions = store.getActions().map(action => action.type);
      expect(testingActions).toEqual(expectedActions);
    })
  })
})