module.exports = {
  expo: {
    name: "glwvia",
    slug: "glwvia",
    version: "1.0.0",
    owner: "glevia",
    android: {
      package: "com.glwvia.app"
    },
    plugins: [
      [
        "react-native-google-mobile-ads",
        {
          android_app_id: "ca-app-pub-4978668895~4978668895",
          ios_app_id: "ca-app-pub-3940256099942544~1458002511"
        }
      ]
    ],
    extra: {
      eas: {
        projectId: "b1fa9df4-cfec-4cda-8310-f91cbcbcdb00"
      }
    }
  }
};