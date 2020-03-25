import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { loginStateInterface } from 'modules/Interfaces';

export type LoginAction = ActionType<typeof actions>

export type LoginState = loginStateInterface;