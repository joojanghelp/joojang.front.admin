import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { reduxStateInterface } from 'modules/Interfaces';

export type SitedataAction = ActionType<typeof actions>

export type SiteDataState = reduxStateInterface;