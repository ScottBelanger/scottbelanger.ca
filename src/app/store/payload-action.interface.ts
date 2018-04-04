import { Action } from "redux";

export interface IPayloadAction extends Action {
  readonly type: string;
  readonly payload?: any;
}

export function createAction(type: string, payload?: any) {
  return { type, payload };
}
