export interface Message  {
    eventType: string,
    data: JSONType
}
export interface JSONType {
    [key: string]: any
}
declare global {
    interface Window {
        JSOriginBridge: any
        webkit: any
    }
}
