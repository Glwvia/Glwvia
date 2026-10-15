const { withAndroidManifest } = require("@expo/config-plugins");

function withAdmobId(config) {
  return withAndroidManifest(config, async (config) => {
    const app = config.modResults.manifest.application[0];
    if (!app["meta-data"]) {
      app["meta-data"] = [];
    }
    app["meta-data"].push({
      $: {
        "android:name": "com.google.android.gms.ads.APPLICATION_ID",
        "android:value": "ca-app-pub-9295233124796910~4978668895"
      }
    });
    return config;
  });
}

module.exports = {
  expo: {
    name: "glwvia",
    slug: "glwvia",
    version: "1.0.0",
    android: {
      package: "com.glwvia.app"
    },
    plugins: [withAdmobId]
  }
};