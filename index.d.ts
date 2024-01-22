interface IValtioOptions {
  getters?: Record<string, (store: any) => any>;
}

interface NxStatic {
  ReactValtio: any;
  $valtio: (
    initialState: T,
    options: IValtioOptions
  ) => { store: T; state: any; [key: string]: any };
}
