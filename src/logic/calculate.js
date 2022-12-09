import operate from './operate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

export default function calculate(obj, operatorName) {
  if (operatorName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(operatorName)) {
    if (operatorName === '0' && obj.next === '0') {
      return {};
    }
    if (obj.operation) {
      if (obj.next) {
        return { ...obj, next: obj.next + operatorName };
      }
      return { ...obj, next: operatorName };
    }
    if (obj.next) {
      return {
        next: obj.next + operatorName,
        total: null,
      };
    }
    return {
      next: operatorName,
      total: null,
    };
  }

  if (operatorName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return { ...obj };
      }
      return { ...obj, next: `${obj.next}.` };
    }
    if (obj.operation) {
      return { next: '0.' };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return {};
      }
      return { total: `${obj.total}.` };
    }
    return { total: '0.' };
  }

  if (operatorName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    }
    return {};
  }

  if (operatorName === '+/-') {
    if (obj.next) {
      return { ...obj, next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { ...obj, total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }

  if (!obj.next && obj.total && !obj.operation) {
    return { ...obj, operation: operatorName };
  }

  if (obj.operation) {
    if (obj.total && !obj.next) {
      return { ...obj, operation: operatorName };
    }

    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: operatorName,
    };
  }

  if (!obj.next) {
    return { operation: operatorName };
  }

  return {
    total: obj.next,
    next: null,
    operation: operatorName,
  };
}
