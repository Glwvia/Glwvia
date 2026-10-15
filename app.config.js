module.exports = {
  expo: {
    name: "Glwvia",
    slug: "glwvia",
    version: "1.0.0",
    owner: "glevia",
    orientation: "portrait",
    platforms: ["android"],
    android: {
      package: "com.glwvia.app",
      versionCode: 1
    },
    plugins: [
      [
        "react-native-google-mobile-ads",
        {
          androidAppId: "ca-app-pub-9295233124769910~4978668895",
          iosAppId: "ca-app-pub-9295233124769910~4978668895"
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
