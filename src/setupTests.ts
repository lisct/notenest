import "@testing-library/jest-dom";
import clone from "fast-copy";

import { TextEncoder } from "util";

global.structuredClone = clone;

global.TextEncoder = TextEncoder;
