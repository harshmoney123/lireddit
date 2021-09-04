"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FORGET_PASSWORD_PREFIX = exports.MAX_AGE = exports.COOKIE_SECRET = exports.COOKIE_NAME = exports.__prod__ = void 0;
exports.__prod__ = process.env.NODE_ENV === "production";
exports.COOKIE_NAME = "qid";
exports.COOKIE_SECRET = "asdf;lkjasdf;lkjasdfdasad";
exports.MAX_AGE = 1000 * 60 * 60 * 24 * 365 * 10;
exports.FORGET_PASSWORD_PREFIX = "forget-password:";
//# sourceMappingURL=constants.js.map