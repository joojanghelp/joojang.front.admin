import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { siteDataState } from 'modules/Interfaces';

export type SitedataAction = ActionType<typeof actions>

export type SiteDataState = siteDataState;