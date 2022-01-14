const storage = {
  get(key) {
    try {
      const rawValue = window.localStorage.getItem(key);
      return JSON.parse(rawValue);
    } catch (error) {
      console.error(`Error parsing storage item "${key}".`);
      return null;
    }
  },

  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
};

const storageFavVideos = {
  get(video) {
    try {
      const rawValue = window.localStorage.getItem(video);
      return JSON.parse(rawValue);
    } catch (error) {
      console.error(`Error parsing storage item "${video}".`);
      return null;
    }
  },

  set(value) {
    const rawValue = JSON.parse(window.localStorage.getItem('videos'));
    const newVal = JSON.parse(JSON.stringify(value));
    if (rawValue === null) {
      var jsons = [];
      jsons.push(newVal);
      window.localStorage.setItem('videos', JSON.stringify(jsons));
    } else {
      var jsonsVal = rawValue;
      jsonsVal.push(newVal);
      window.localStorage.setItem('videos', JSON.stringify(jsonsVal));
    }
  },

  remove(value) {
    const rawValue = JSON.parse(window.localStorage.getItem('videos'));
    var jsonsVal = rawValue;
    const filtered = jsonsVal.filter(function (item) {
      return item.title !== value.title;
    });
    localStorage.removeItem('videos');
    window.localStorage.setItem('videos', JSON.stringify(filtered));
  },
};

export { storage, storageFavVideos };
