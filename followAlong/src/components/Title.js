import React, { useState, useReducer } from 'react';
import { setEditing, setNewTitleText, setTitle, SET_NEW_TEXT_TITLE, SET_TITLE, TOGGLE_EDITING } from '../reducers/title.actions';
import { initialState, reducer } from '../reducers/title.reducer';

const Title = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i onClick={() => dispatch(setEditing())} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={state.newTitleText}
            onChange={(evt) => dispatch(setNewTitleText(evt.target.value))}
          />
          <button
            onClick={() => dispatch(setTitle(state.newTitleText))}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title; 