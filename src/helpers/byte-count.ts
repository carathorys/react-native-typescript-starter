import { encodeBody } from "./encode-body";

export const byteCount = (o: Object): number => {
  return encodeBody(o).split(/%..|./).length - 1;
};

export const byteCountReadable = (o: Object): string => {
  const n: number = byteCount(o);
  if (Math.floor(n / 1024) > 0) {
    return dataSizeMoved(n / 1024, 0x0001);
  }
  return `${n} bytes`;
};

export const dataSize = (n: number): string => {
  if (Math.floor(n / 1024) > 0) {
    return dataSizeMoved(n / 1024, 0x0001);
  }
  return `${n.toPrecision(2)} bytes`;
};

const dataSizeMoved = (n: number, unit: number): string => {
  if (Math.floor(n / 1024) > 1) {
    return dataSizeMoved(n / 1024, unit << 1);
  } else {
    switch (unit) {
      case 0x0001: {
        return `${n.toPrecision(2)} Kb`;
      }
      case 0x0010: {
        return `${n.toPrecision(2)} Mb`;
      }
      case 0x0100: {
        return `${n.toPrecision(2)} Gb`;
      }
      case 0x1000: {
        return `${n.toPrecision(2)} Tb`;
      }
      default:
        return `${n.toPrecision(2)} bytes`;
    }
  }
};
