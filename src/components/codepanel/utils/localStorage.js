export const saveToLocal = (name, item) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(name, item);
  }
}

export const getFromLocal = (name, item) => {
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem(name, item);
  } else {
    return null;
  }
}

export const saveCodeToLocal = (code, lesson = "") => {
  saveToLocal(`${lesson}_code`, code)
};

export const saveProgressToLocal = (progress, lesson = "") => {
  saveToLocal(`${lesson}_progress`, progress)
}

export const getCodeFromLocal = (lesson = "") => {
  return getFromLocal(`${lesson}_code`)
}

export const getProgressFromLocal = (lesson = "") => {
  return getFromLocal(`${lesson}_progress`)
}
