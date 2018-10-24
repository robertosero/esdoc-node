const _ = `((\\s|\\t|\\n)+)`, // 1 or more whitespace/tab/newline
NO_ = `([^\\s\\t\\n]+)`, // 1 or more anything but whitespace/tab/newline
LETTER = `([A-Z]|[a-z])`,
ANY = `((.|[^.])+)`, // 0 or more anything
VAR = `((${_}|^)((const)|(let)|(var))${_})`,
STRING = `(("${ANY}*")|('${ANY}*'))`,
ID = `((${LETTER}|_)+(${LETTER}|_|\\d)*)`,
EQUALS = `(${_}*=${_}*)`,
EXPORTS = `((module${_}*.${_}*exports)|(exports))`,
PROPERTY = `(${_}*\\.${_}*${ID})`,
EXPORTS_ASS = `(${EXPORTS}${EQUALS})`,
EXPORTS_AS_PROPERTY = `(${EXPORTS}${PROPERTY}${EQUALS})`,
EXPORTS_ID_AS_PROPERTY = `(${EXPORTS_AS_PROPERTY}${ID})`,
REQUIRE = `(require${_}*\\(${_}*${STRING}${_}*\\))`,
REQUIRE_ASS = `(${VAR}${ID}${EQUALS}${REQUIRE})`


module.exports = {
  _,
  NO_,
  ANY,
  LETTER,
  VAR,
  STRING,
  ID,
  EXPORTS,
  EQUALS,
  PROPERTY,
  EXPORTS_ASS,
  EXPORTS_AS_PROPERTY,
  EXPORTS_ID_AS_PROPERTY,
  REQUIRE,
  REQUIRE_ASS,
}
