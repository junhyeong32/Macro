let data = [];
let shortUrlData = [];

module.exports = {
  get: () => data,
  set: (_data) => (data = _data),
};
