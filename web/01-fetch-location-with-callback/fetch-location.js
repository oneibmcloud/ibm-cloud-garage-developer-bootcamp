const fetchLocation = (onSuccess, onError) => {
  const receiveLocation = position => {
    const location = {
      lat: position.coords.latitude, long: position.coords.longitude
    };

    onSuccess(location);
  };

  navigator.geolocation.getCurrentPosition(receiveLocation, onError);
};

export {fetchLocation};
