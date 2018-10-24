const R = require('../src/regex')

describe('basics', () => {
  test('blank', () => {
    const reg = new RegExp(R._)
    const right = [' ', '\t\t\t\n  ', ' asd \t\n','   \n d  ']
    const wrong = ['glkfd','cvlkf1289374','c[-d0]','192edc']
    for (let s of right) {
      expect(reg.test(s)).toBeTruthy()
    }
    for (let s of wrong) {
      expect(reg.test(s)).toBeFalsy()
    }
  })

  test('no-blank', () => {
    const reg = new RegExp(R.NO_)
    const wrong = ['', '\t\n ', '\t\n','  \n ']
    const right = ['glkfd','cvlkf1289374','c[-d0]','192edc']
    for (let s of right) {
      expect(reg.test(s)).toBeTruthy()
    }
    for (let s of wrong) {
      expect(reg.test(s)).toBeFalsy()
    }
  })

  test('any', () => {
    const reg = new RegExp(R.ANY)
    const right = ['sfjkskk', '\t\t\t\n  ', ' asd \t\n','   \n d  ']
    const wrong = ['.;l,[]234098','asdfjs32][p90]','c[-}:{}:?"><\t"]','`-230e9`']
    for (let s of right) {
      expect(reg.test(s)).toBeTruthy()
    }
    for (let s of wrong) {
      expect(reg.test(s)).toBeTruthy()
    }
  })

  test('letter', () => {
    const reg = new RegExp(R.LETTER)
    const right = ['a','Z','G','f']
    const wrong = ['1','','<',';','{}']
    for (let s of right) {
      expect(reg.test(s)).toBeTruthy()
    }
    for (let s of wrong) {
      expect(reg.test(s)).toBeFalsy()
    }
  })

  test('var', () => {
    const reg = new RegExp(R.VAR)
    const right = ['const ', 'var\n', 'let\t', '\nlet ']
    const wrong = ['adsd ','  frgv','asdgg','avasr']
    for (let s of right) {
      expect(reg.test(s)).toBeTruthy()
    }
    for (let s of wrong) {
      expect(reg.test(s)).toBeFalsy()
    }
  })

  test('string', () => {
    const reg = new RegExp(R.STRING)
    const right = ['"frw42-0\tasdf   "', "'cfjjwea'", "'123sd '", "'\"\"'", '""']
    const wrong = ['"\'','cvlkf1289374','c[-d0]','192edc']
    for (let s of right) {
      expect(reg.test(s)).toBeTruthy()
    }
    for (let s of wrong) {
      expect(reg.test(s)).toBeFalsy()
    }
  })

  test('id', () => {
    const reg = new RegExp(R.ID)
    const right = ['_ajsdn123','_','adbg_1']
    const wrong = ['123','1','[]',';']
    for (let s of right) {
      expect(reg.test(s)).toBeTruthy()
    }
    for (let s of wrong) {
      expect(reg.test(s)).toBeFalsy()
    }
  })

  test('equals', () => {
    const reg = new RegExp(R.EQUALS)
    const right = ['   \t\n=\t\n', '=', '   =']
    const wrong = ['d','we 23','r2f ','ef ']
    for (let s of right) {
      expect(reg.test(s)).toBeTruthy()
    }
    for (let s of wrong) {
      expect(reg.test(s)).toBeFalsy()
    }
  })

  test('exports', () => {
    const reg = new RegExp(R.EXPORTS)
    const right = ['exports','module.exports','module   .  exports', 'module\t.\texports']
    const wrong = ['ferg','module.export','export','asd']
    for (let s of right) {
      expect(reg.test(s)).toBeTruthy()
    }
    for (let s of wrong) {
      expect(reg.test(s)).toBeFalsy()
    }
  })

  test('property', () => {
    const reg = new RegExp(R.PROPERTY)
    const right = ['.asd','.   a2_','123.LL','asd  .  _']
    const wrong = ['.123','.123asd','. ', '.  1','asd']
    for (let s of right) {
      expect(reg.test(s)).toBeTruthy()
    }
    for (let s of wrong) {
      expect(reg.test(s)).toBeFalsy()
    }
  })

  test('exports-assignment', () => {
    const reg = new RegExp(R.EXPORTS_ASS)
    const right = ['module . exports = asd','exports\t=\tasd', 'exports \n\n=123']
    const wrong = ['module.export = asd', 'exports \n\n!=123']
    for (let s of right) {
      expect(reg.test(s)).toBeTruthy()
    }
    for (let s of wrong) {
      expect(reg.test(s)).toBeFalsy()
    }
  })

  test('exports-as-property', () => {
    const reg = new RegExp(R.EXPORTS_AS_PROPERTY)
    const right = ['module.exports . asd = ', 'exports \t.  \n__=']
    const wrong = ['exports . 1 = ', 'exports. = asd']
    for (let s of right) {
      expect(reg.test(s)).toBeTruthy()
    }
    for (let s of wrong) {
      expect(reg.test(s)).toBeFalsy()
    }
  })

  test('exports-id-as-property', () => {
    const reg = new RegExp(R.EXPORTS_ID_AS_PROPERTY)
    const right = ['module.exports . asd = _', 'exports \t.  \n__= DASD']
    const wrong = ['exports . _ = 123', 'exports. Ehh = {}']
    for (let s of right) {
      expect(reg.test(s)).toBeTruthy()
    }
    for (let s of wrong) {
      expect(reg.test(s)).toBeFalsy()
    }
  })

  test('require', () => {
    const reg = new RegExp(R.REQUIRE)
    const right = ['require ( " " )','require("asd1 23kdc][]\'")', 'require (\'eee\')']
    const wrong = ['require()', 'requir("")','require ( "\')']
    for (let s of right) {
      expect(reg.test(s)).toBeTruthy()
    }
    for (let s of wrong) {
      expect(reg.test(s)).toBeFalsy()
    }
  })

  test('require-assignment', () => {
    const reg = new RegExp(R.REQUIRE_ASS)
    const right = ['const a=require ( \t"" )','let _  = require(\'asd\')']
    const wrong = ['class 1=require ( \t"" )', 'a = require("")']
    for (let s of right) {
      expect(reg.test(s)).toBeTruthy()
    }
    for (let s of wrong) {
      expect(reg.test(s)).toBeFalsy()
    }
  })
})
