type IGetters = Record<string, (store: any) => any>;

interface NxStatic {
  ReactValtio: any;
  $valtio: <T>(initialState: T, getters?: IGetters) => { store: T; state: any; [key: string]: any };
}
