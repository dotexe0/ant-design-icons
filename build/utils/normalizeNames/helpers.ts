import fs = require('fs-extra');
import globby = require('globby');
import _ = require('lodash');
import path = require('path');
import { from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

export async function normalizeNamesFromDir(dir: string, outDir?: string) {
  const rawNames$ = from(await globby(['*.svg'], { cwd: dir, deep: false }));
  const beforeAndAfter$ = rawNames$.pipe(
    map((fileNameWithExtension) => {
      const normalized =
        normalizeName(
          fileNameWithExtension
            .replace(/\.svg$/, '')
            .replace(/-o$/, '')
            .replace(/-fill$/, '')
            .replace(/-twotone$/, '')
        ) + '.svg';
      return {
        before: fileNameWithExtension,
        after: normalized
      };
    })
  );
  return new Promise<void>((resolve, reject) => {
    beforeAndAfter$
      .pipe(
        mergeMap(async ({ before, after }) =>
          fs.rename(path.join(dir, before), path.join(outDir || dir, after))
        )
      )
      .subscribe(undefined, reject, resolve);
  });
}

export function normalizeName(fileName: string): string {
  return manulRename(_.kebabCase(fileName));
}

export function manulRename(kebabCaseName: string): string {
  const mapper: { [key: string]: string | undefined } = {
    ['arrawsalt']: 'arrows-alt',
    ['arrowdown']: 'arrow-down',
    ['arrowleft']: 'arrow-left',
    ['arrowright']: 'arrow-right',
    ['arrowup']: 'arrow-up',
    ['customerservice']: 'customer-service',
    ['html-5']: 'html5',
    ['time-circle']: 'clock-circle',
    ['video']: 'video-camera',
    ['unlike']: 'dislike',
    ['verticle-left']: 'verticle-left',
    ['verticle-right']: 'vertical-right',
    ['doubleleft']: 'double-left',
    ['indent']: 'menu-unfold',
    ['outdent']: 'menu-fold',
    ['time-out']: 'pause-circle'
  };
  const result = mapper[kebabCaseName];
  if (result) {
    return result;
  }
  return kebabCaseName;
}
