import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

/*

  // Incluir dependencia no arquivo package.json
  "react-native-google-mobile-ads": "^10.3.1"

  // Incluir o código a seguir no arquivo app.json
  "react-native-google-mobile-ads": {
    "android_app_id": "CHAVE ANDROID",
    "ios_app_id": "CHAVE IOS"
  }

 */

const Banner = () => {
  const [adLoaded, setAdLoaded] = useState(false);

  const adUnitID = Platform.OS === 'ios'
    ? 'CHAVE IOS' // Chave para iOS
    : 'CHAVE ANDROID'; // Chave para Android

  useEffect(() => {
    setAdLoaded(true);
  }, []);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      {adLoaded && (
        <BannerAd
          unitId={adUnitID}
          size={BannerAdSize.BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      )}
    </View>
  );
};

export default Banner;