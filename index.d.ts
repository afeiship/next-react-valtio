interface NxStatic {
  ReactValtio: any;
  $valtio: (initialState: T) => { store: T; state: T };
}
