// TODO: move to own pgk
exports.with_this = (fn)=> function (...args) {
  return fn(this, ...args);
};

exports.as_error = (...args)=> new Error(...args);
