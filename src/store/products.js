const initialState = {
  products: [
    {
      category: "Illegal Drugs",
      name: "Opium",
      description: "Poppy seeds gone wild.",
      price: "0.021 BTC per kg",
      inventoryCount: "1,200kg",
    },

    {
      category: "Illegal Weapons",
      name: "Nerve Gas",
      description: "Not responsible for leaks.",
      price: "0.45 BTC per ml",
      inventoryCount: "100ml",
    },

    {
      category: "Stolen State Secrets",
      name: "Area 52 Coordinates",
      description: "Aliens? Maybe. Bigfoot? Definitely.",
      price: "2.7 BTC",
      inventoryCount: "1",
    },

    {
      category: "Beanie Babies",
      name: "Peanut The Elephant ",
      description: "Royal Blue. Tag still attached!",
      price: "0.000023 BTC",
      inventoryCount: "39,764",
    },
  ]
};

const productReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "CHANGE_PRODUCT":
      return { ...state, products: [...state.products, payload] };
    default:
      return state;
  }
};


export const changeProducts = (product) => {
  console.log("Change product to: ", product);
  return {
    type: "CHANGE_PRODUCT",
    payload: product,
  };
};

export default productReducer;
