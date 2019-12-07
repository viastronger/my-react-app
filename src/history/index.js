/* eslint import/no-extraneous-dependencies: ["off", {"peerDependencies": true}] */
import {
    // createHashHistory,
    createBrowserHistory,
} from 'history'
// eslint-disable-next-line import/prefer-default-export
export const history = createBrowserHistory()