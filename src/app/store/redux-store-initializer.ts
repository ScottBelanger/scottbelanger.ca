import { Inject, Injectable } from "@angular/core";
import { NgReduxRouter } from "@angular-redux/router";
import { DevToolsExtension, NgRedux } from "@angular-redux/store";
import { createLogger } from "redux-logger";
import { combineEpics, createEpicMiddleware, Epic } from "redux-observable";

import { IPayloadAction } from "./payload-action.interface";
import { rootReducer } from "./store";

@Injectable()
export class ReduxStoreInitializer {
  constructor(
    private ngRedux: NgRedux<any>,
    private ngReduxRouter: NgReduxRouter,
    private devTools: DevToolsExtension
  ) {}

  public initialize() {
    const enhancers = [];
    const rootEpic = combineEpics();
    const middleware = [createEpicMiddleware(rootEpic)];
    this.ngRedux.configureStore(
      rootReducer,
      {},
      middleware,
      this.devTools.isEnabled()
        ? [...enhancers, this.devTools.enhancer()]
        : enhancers
    );

    this.ngReduxRouter.initialize();
  }
}
