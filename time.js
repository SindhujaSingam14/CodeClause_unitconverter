function convertTime(inputValue, inputUnit, outputUnit) {
  let result;

  // Convert input to milliseconds
  switch (inputUnit) {
    case 'second':
      result = inputValue * 1000;
      break;
    case 'millisecond':
      result = inputValue;
      break;
    case 'microsecond':
      result = inputValue / 1000;
      break;
    case 'nanosecond':
      result = inputValue / 1000000;
      break;
    case 'picosecond':
      result = inputValue / 1000000000;
      break;
    case 'minute':
      result = inputValue * 60 * 1000;
      break;
    case 'hour':
      result = inputValue * 60 * 60 * 1000;
      break;
    case 'day':
      result = inputValue * 24 * 60 * 60 * 1000;
      break;
    case 'week':
      result = inputValue * 7 * 24 * 60 * 60 * 1000;
      break;
    case 'month':
      result = inputValue * 30 * 24 * 60 * 60 * 1000;
      break;
    case 'year':
      result = inputValue * 365 * 24 * 60 * 60 * 1000;
      break;
    default:
      result = null;
  }

  switch (outputUnit) {
    case 'second':
      result /= 1000;
      break;
    case 'millisecond':
      break;
    case 'microsecond':
      result *= 1000;
      break;
    case 'nanosecond':
      result *= 1000000;
      break;
    case 'picosecond':
      result *= 1000000000;
      break;
    case 'minute':
      result /= 60 * 1000;
      break;
    case 'hour':
      result /= 60 * 60 * 1000;
      break;
    case 'day':
      result /= 24 * 60 * 60 * 1000;
      break;
    case 'week':
      result /= 7 * 24 * 60 * 60 * 1000;
      break;
    case 'month':
      result /= 30 * 24 * 60 * 60 * 1000;
      break;
    case 'year':
      result /= 365 * 24 * 60 * 60 * 1000;
      break;
    default:
      result = null;
  }

  return result;
}
