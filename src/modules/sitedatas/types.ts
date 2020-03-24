import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { sitedataSagaResponseType } from 'modules/types';

export type SitedataAction = ActionType<typeof actions>

export type SiteDataState = sitedataSagaResponseType;
