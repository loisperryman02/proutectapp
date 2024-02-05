for (let i = 0; i < safestRoute.length - 1; i++) {
              let currentStep = safestRoute[i].split(",");
              let nextStep = safestRoute[i+1].split(",");

              let currentCoordinates = { latitude: currentStep[0], longitude: currentStep[1] };
              let nextCoordinates = { latitude: nextStep[0], longitude: nextStep[1] };

              await getDistance(currentCoordinates.latitude, currentCoordinates.longitude, nextCoordinates.latitude, nextCoordinates.longitude);

              if (routeInfo.steps && routeInfo.steps.length > 0) {
                console.log("Route info!!!!!");
                routeInfo.steps.forEach(step => {

                  coordinates.add({
                    latitude: step.data.start_location.lat,
                    longitude: step.data.start_location.lng
                  });

                  coordinates.add({
                    latitude: step.data.end_location.lat,
                    longitude: step.data.end_location.lng
                  });

                })
              } else {
                coordinates.add(currentCoordinates);
                coordinates.add(nextCoordinates);
              };

            };

            coordinates.forEach(x => {

              console.log(x);

            })

            setCoordinates([...coordinates]);


            <GooglePlacesAutocomplete
            styles={{
              textInput: styles.searchOriginIcon,
              textInputContainer: styles.originSearchContainer
            }}
            fetchDetails
            GooglePlacesSearchQuery={{
                rankby: "distance"
            }}
            onPress={(data, details = null) => {
                setDestination({
                  latitude: details.geometry.location.lat,
                  longitude: details.geometry.location.lng,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01
                })
                console.log(destination)
            }}

            query={{
                key: GOOGLE_API_KEY,
                language: 'en',
                components: 'country:gb',
                types: 'establishment',
                radius: 30000
            }}
      />



      <GooglePlacesAutocomplete
      styles={{
        textInput: styles.searchOriginIcon,
        textInputContainer: styles.originSearchContainer
      }}

      fetchDetails
      GooglePlacesSearchQuery={{
          rankby: "distance"
      }}

      onPress={(data, details = null) => {
          setStart({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
          })                
      }}

      query={{
          key: GOOGLE_API_KEY,
          language: 'en',
          components: 'country:gb',
          types: 'establishment',
          radius: 30000
      }}
  />