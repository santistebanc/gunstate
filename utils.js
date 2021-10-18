export function mapValues(obj, func) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, func(v)]));
}

export function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export function debounce_leading(func, timeout = 300) {
  let timer;
  return (...args) => {
    if (!timer) {
      func.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };
}

export function throttle(func, timeout = 100) {
  let isThrottled = false;

  return (...args) => {
    if (isThrottled) {
      return;
    }
    isThrottled = true;
    setTimeout(function () {
      isThrottled = false;
    }, timeout);

    func.apply(this, args);
  };
}

export function throttle_schedule(func, timeout = 100) {
  let scheduled;
  let isThrottled = false;

  return (...args) => {
    scheduled = { args };
    if (isThrottled) {
      return;
    }
    isThrottled = true;
    setTimeout(function () {
      if (scheduled) func.apply(this, scheduled.args);
      scheduled = null;
      isThrottled = false;
    }, timeout);

    func.apply(this, args);
  };
}
