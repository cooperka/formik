export declare function getIn(
  obj: any,
  key: string | string[],
  def?: any,
  p?: number
): any;
export declare function setIn(obj: any, path: string, value: any): any;
export declare function setNestedObjectValues<T>(
  object: any,
  value: any,
  visited?: any,
  response?: any
): T;
export declare const isReactNative: boolean | '';
export declare const isFunction: (obj: any) => boolean;
export declare const isObject: (obj: any) => boolean;
export declare const isInteger: (obj: any) => boolean;
export declare const isString: (obj: any) => boolean;
export declare const isEmptyChildren: (children: any) => boolean;
export declare const isPromise: (value: any) => boolean;