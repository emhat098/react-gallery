/**
 * `use` method for resolve a Promise.
 *
 * @param {Promise} promise
 * @returns {any}
 */
const use = (promise) => {
  if (promise.status === 'fulfilled') {
    return promise.value;
  } else if (promise.status === 'rejected') {
    throw promise.reason;
  } else if (promise.status === 'pending') {
    throw promise;
  } else {
    promise.status = 'pending';
    promise.then(
      (result) => {
        promise.status = 'fulfilled';
        promise.value = result;
      },
      (reason) => {
        promise.status = 'rejected';
        promise.value = reason;
      },
    );
    throw promise;
  }
};

export default use;
