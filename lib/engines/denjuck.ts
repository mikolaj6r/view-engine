import { Engine, ViewConfig } from "../types/index.ts";

export const renderDenjuck: Engine = (
  template: string,
  data: object = {},
  config: ViewConfig = {}
) => {
  if(config.viewRoot){
    //denjucks.configure(config.viewRoot)
  }

  return "";
};
