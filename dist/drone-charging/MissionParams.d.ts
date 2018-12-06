import BaseMissionParams from '../MissionParams';
import IMissionParams from '../IMissionParams';
/**
 * @class The Class drone-charging/MissionParams represent the parameters of drone-charging mission.
 */
export default class MissionParams extends BaseMissionParams {
    private static _protocol;
    private static _type;
    static getMessageType(): string;
    static getMessageProtocol(): string;
    constructor(values?: Partial<IMissionParams>);
    serialize(): {
        ttl: number;
        protocol: string;
        type: string;
    };
    deserialize(json: any): void;
}
