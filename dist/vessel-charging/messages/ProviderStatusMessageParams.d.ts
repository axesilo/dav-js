import BaseMessageParams from '../MessageParams';
/**
 * @class The Class vessel-charging/MessageParams represent the parameters of vessel-charging provider status message.
 */
export default class MessageParams extends BaseMessageParams {
    static _messageType: string;
    finishEta: number;
    constructor(values?: Partial<MessageParams>);
    serialize(): {
        ttl: number;
        protocol: string;
        type: string;
    };
    deserialize(json: any): void;
}
