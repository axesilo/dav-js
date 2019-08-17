import IConfig from './IConfig';
import SDK from './SDK';
/**
 * @function SDKFactory create an instance of DAV SDK.
 * @param config DAV configuration object.
 * @returns DavSDK instance with the specified configuration object.
 */
export default function SDKFactory(config: IConfig): SDK;
