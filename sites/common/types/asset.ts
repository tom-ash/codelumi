export interface SVGData {
  viewBox: string;
  pathData: string;
}

export type SVGs = {
  [key: string]: SVGData;
};

export interface Assets {
  svgs: SVGs;
}
