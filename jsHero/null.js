function cutComment(str) {
    if (str.includes('//')) {
      let target = str.lastIndexOf('/');
      return str.slice((target + 1), str.length).trim();
    } else {
      return null;
    }
  }