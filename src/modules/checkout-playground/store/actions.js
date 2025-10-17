import $api from "@/services/service-api";

const routes = {
  initialize_checkout: "https://api.mor.vesicash.com/v1/payment/init",

  checkout_history:
    "https://mor-staging.vesicash.com/v2/transactions/get?is_paid_out=true&limit=8",
};

export default {
  initializeCheckout: async (_, payload) => {
    return await $api.push(routes.initialize_checkout, {
      payload,
      headers: {
        "public-key":
          "morPub_live_9d6510de1c1445f9888d89c21bd263ea9d6510de1c14lMsmqa",
        "secret-key":
          "morSec_live_bbedf62f6cdc4f44a81e502992a4b9efbbedf62f6cdc0POleB",
      },
    });
  },

  fetchCheckoutTransactions: async (_, page) => {
    return await $api.fetch(routes.checkout_history + `&page=${page}`);
  },

  initializeZambiaCheckout: async (_, payload) => {
    return await $api.push(routes.redstone_checkout, { payload });
  },
};
