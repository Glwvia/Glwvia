module.exports = {
  expo: {
    name: "glwvia",
    slug: "glwvia",
    version: "1.0.0",
    owner: "glevia",
    android: {
      package: "com.glwvia.app",
      config: {
        googleMobileAdsAppId: "ca-app-pub-4978668895~4978668895"
      }
    },
    plugins: [
      "react-native-google-mobile-ads"
    ],
    extra: {
      eas: {
        projectId: "b1fa9df4-cfec-4cda-8310-f91cbcbcdb00"
      }
    }
  }
};