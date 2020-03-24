const applyComputors = (state: any, computors: any, stateKey: any) => {
  return Object.keys(computors).reduce(
    (newState, modelName) => {
      newState[stateKey][modelName] = Object.keys(computors[modelName]).reduce(
        (computedModelState: any, computorName: any) => {
          computedModelState[computorName] = computors[modelName][computorName](
            state[modelName],
            state
          );
          return computedModelState;
        },
        {}
      );

      return newState;
    },
    { ...state, [stateKey]: {} }
  );
};

export const computedPlugin = ({ stateKey }: any) => ({
  init: () => {
    const computors: any = {};

    return {
      onStoreCreated(store: any) {
        const getState = store.getState;

        store.getState = () => {
          return applyComputors(getState(), computors, stateKey || "computed");
        };
      },

      onModel(model: any) {
        if (!model.computed) {
          return;
        }

        computors[model.name] = model.computed;
      }
    };
  }
});
