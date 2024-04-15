// types

import {Message} from './types'
const isAndroid = window.navigator.userAgent.indexOf('Android') !==-1
/**
 * 用于h5跨端交互
 * @param message
 */
function postNativeMeesage(message: Message){
    if(isAndroid){
        window.JSOriginBridge.postMessage(JSON.stringify(message))
    } else {
        window.webkit.messageHandlers.JSOriginBridge.postMessage(JSON.stringify(message))
    }
}

// function publishNativeMessage()