import BaseNeedFilterParams from '../NeedFilterParams';
import { IDimensions } from '../common-types';
/**
 * @class The Class vessel-charging/NeedFilterParams represent the parameters that used to filter vessel-charging needs.
 */
export default class NeedFilterParams extends BaseNeedFilterParams {
    static _protocol: string;
    static _messageType: string;
    maxDimensions: IDimensions;
    constructor(values?: Partial<NeedFilterParams>);
    serialize(): {
        ttl: number;
        protocol: string;
        type: string;
    };
    deserialize(json: any): void;
}
