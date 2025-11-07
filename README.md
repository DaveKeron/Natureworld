# NatureWorld — Mobile (Android-only)

This is the **mobile app only** (Expo). It builds cleanly on EAS without monorepo setup.

## Build (phone or desktop; cloud terminal works)
```bash
npm install -g eas-cli
npm install
eas login
# Quick APK
eas build -p android --profile preview
# Play Store AAB
# eas build -p android --profile production
```

## Configure your backend
Set `app.json → expo.extra.apiUrl` to your server URL (e.g., Render). If the server is offline, the app uses mock responses and still shows the Rewards modal.
