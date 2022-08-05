var solution = function (isBadVersion) {
  return function (n) {
    let start = 0;
    let end = n;
    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return end;
  };
};
