export default defineEventHandler(async (event) => {
  //   // handle query params
  //   const { name } = getQuery(event);

  //   // handle post data
  //   const { age } = await readBody(event);

  // api call with private key
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=DKir8syGwiVL8CIIKvUSBq6DRgmu0l99AgN2Uw0i&currencies=EUR%2CUSD%2CCAD"
  );

  return data;
});
