import { signal } from "@angular/core";
import type { WritableSignal } from "@angular/core";

export type TrackableAction<T> = {
  isRunning: WritableSignal<boolean>;
  run: T;
};

export const trackAction = <T extends Array<unknown>>(action: (...args: T) => Promise<void>): TrackableAction<(...args: T) => Promise<void>> => {
  const isRunning = signal(false);
  // TODO: Add an optional notification for when the action is done/failed

  return {
    isRunning,
    run: async (...args: T) => {
      if (isRunning()) {
        return;
      }
      isRunning.set(true);
      try {
        await action(...args);
      } finally {
        isRunning.set(false);
      }
    },
  };
};
