import { EventEmitter } from '@distributedlab/tools'

export enum BusEvents {
  Error = 'error',
  Warning = 'warning',
  Success = 'success',
  Info = 'Info',
}

export type DefaultBusEventMap = {
  [BusEvents.Success]: unknown
  [BusEvents.Error]: unknown
  [BusEvents.Warning]: unknown
  [BusEvents.Info]: unknown
}

export const bus = new EventEmitter<DefaultBusEventMap>()
