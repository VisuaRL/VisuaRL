const Status = { EMPTY: 0, FILLED: 1, START: 2, END: 3 }

export function nextStatus(value) {
  switch (value) {
    case Status.EMPTY: return Status.FILLED;
    case Status.FILLED: return Status.EMPTY;
    case Status.START: return Status.EMPTY;
    case Status.END: return Status.EMPTY;
    default: return Status.EMPTY;
  }
}

export default Status;