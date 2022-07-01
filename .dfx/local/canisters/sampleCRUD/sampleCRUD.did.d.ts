import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Account {
  'getId' : ActorMethod<[], bigint>,
  'getName' : ActorMethod<[], string>,
  'setId' : ActorMethod<[bigint], undefined>,
  'setName' : ActorMethod<[string], undefined>,
}
export interface _SERVICE {
  'addAccount' : ActorMethod<[bigint, string], undefined>,
  'getAccount' : ActorMethod<[bigint], [] | [Principal]>,
  'greet' : ActorMethod<[string], string>,
}
