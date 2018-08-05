import { Observable, DavID, ID } from './common-types';
import IConfig from './IConfig';
import NeedParams from './NeedParams';
import NeedFilterParams from './NeedFilterParams';
import Need from './Need';
import Bid from './Bid';
import Message from './Message';
import Mission from './Mission';
import BidParams from './BidParams';
import MessageParams from './drone-delivery/MessageParams';
import Kafka from './Kafka';
import axios from 'axios';
import { cat } from 'shelljs';

export default class Identity {
  // private _messages: Observable<Message<T>>;

  constructor(public id: ID, public davID: DavID, private config: IConfig) { /**/ }

  public async publishNeed<T extends NeedParams>(params: T): Promise<Need<T>> {
    const bidsChannelName = Kafka.generateTopicId();
    try {
      await Kafka.createTopic(bidsChannelName, this.config);
      await axios.post(`${this.config.apiSeedUrls[0]}/needsForType/:${bidsChannelName}`, params);
    } catch (err) {
      throw err;
    }
    return new Need(bidsChannelName, params, this.config);
  }

  public async needsForType<T extends NeedFilterParams, U extends NeedParams>(params: T): Promise<Observable<Need<U>>> {
    return null; }

  public need<T extends NeedParams>(id: ID, params: T): Need<T> { return new Need(id, '', this.config); }
  public bid<T extends BidParams, U extends MessageParams>(id: ID, params: T): Bid<T, U> { return new Bid(id, '', params, this.config); }
  public mission<T extends MessageParams, U extends BidParams>(selfId: ID, peerId: ID, bid: Bid<U, T>): Mission<T, U> {
     return new Mission(selfId, peerId, this.davID, bid, this.config);
    }
  public messages<T extends MessageParams, U extends BidParams>(): Observable<Message<T, U>> {
    // if (!this._messages) {
    //   this._messages = null;
    // }
    // return this._messages;
    return null;
  }
}
