import { Reducer } from "redux";
import { ActionType } from "modules/ActionType";

export type Action<T> = {
    type: ActionType;
    payload: T;
}

export default function createReducer<S>( initialState: S, handlers: any ): Reducer<S> {
	const r = (state: S = initialState, action: Action<S>): S => {
		if (handlers.hasOwnProperty(action.type)) {
			return handlers[action.type](state, action);
		} else {
			return state;
		}
	};

	return r as Reducer<S>;
}
