const substr = (str) => {
  let str1 = str[0];
  let str2 = str[1];
  let check = "";

  for (let i = 0; i < str2.length; i++) {
    if (check) {
      if (str1.startsWith(check + str2[i])) check = check + str1[i];
    } else if (str1.startsWith(str2[0])) check = str2[0];
  }

  if (check) {
    for (let i = 2; i < str.length; i++) {
      for (let j = 0; i < str.length; j++) {
        if (str[i].startsWith(check)) break;
        else check = check.slice(0, -1);
      }
    }
  }
  return check;
};
