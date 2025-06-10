const handleError = (message) => {
  if (typeof message === "object") {
    const errors = [];
    Object.keys(message).map((key) => {
      message[key].map((e) => {
        errors.push(e);
      });
    });

    return errors.join();
  }
};

const salePercent = (price, salePrice) => {
  return Math.round(((price - salePrice) / price) * 100);
};

export { handleError , salePercent };
