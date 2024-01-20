/**
 * honoの環境変数を定義する型
 *
 * 第二引数で各環境特有のランタイムオブジェクトを渡すことができる
 *
 * 例）Qwik CityのRequestEvent: c.env._runtime.env.get("ENV")
 */
export type Bindings<T = unknown, U = unknown> = {
  Bindings: T & { _runtime: U };
};
