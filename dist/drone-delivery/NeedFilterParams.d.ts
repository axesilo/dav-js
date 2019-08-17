import BaseNeedFilterParams from '../NeedFilterParams';
import { IDimensions } from '../common-types';
/**
 * @class The Class drone-delivery/NeedFilterParams represent the parameters that used to filter drone-delivery needs.
 */
export default class NeedFilterParams extends BaseNeedFilterParams {
    private static _protocol;
    private static _type;
    maxDimensions: IDimensions;
    static getMessageType(): string;
    static getMessageProtocol(): string;
    constructor(values?: Partial<NeedFilterParams>);
    serialize(): {
        ttl: number;
        protocol: string;
        type: string;
    };
    deserialize(json: any): void;
}
