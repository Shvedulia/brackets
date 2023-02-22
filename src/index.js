module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !==0 ) return false;
  let option = bracketsConfig.map(conf => conf.join(''));
  let preStr = str;
  for(let i = 0; i < option.length; i++) {
    preStr = preStr.replace(option[i], '');
  }
  if (preStr.length === 0) return true;
  if (str !== preStr) return check(preStr, bracketsConfig);
  return false
};
