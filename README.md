# Expo NativewindUI Template

A starter template for building beautiful, native-feeling React Native apps with [Expo](https://expo.dev/) and [NativewindUI](https://nativewindui.com/).

## Features

- Expo SDK 54 with TypeScript
- NativewindUI components for native look and feel
- Tailwind CSS styling with NativeWind
- Expo Router for file-based navigation
- Ultracite (Biome) for linting and formatting
- Husky + lint-staged for pre-commit hooks
- Development build ready

## Quick Start

### Prerequisites

- [Bun](https://bun.sh/) - `curl -fsSL https://bun.sh/install | bash`
- [Xcode](https://developer.apple.com/xcode/) (for iOS, macOS only)
- [Android Studio](https://developer.android.com/studio) (for Android)

### 1. Install dependencies

```bash
bun install
```

### 2. Build and run

This template uses **development builds** (not Expo Go) because NativewindUI uses native modules.

```bash
# iOS (first build takes a few minutes)
bun run ios

# Android
bun run android

# Web
bun run web
```

That's it! The app will build, install, and launch automatically.

### 3. Subsequent runs

After the first build, the app stays installed. You can either:

- Run `bun run ios` / `bun run android` again (recommended)
- Or start just the dev server with `bun start`, then open the installed app manually

## Available Scripts

| Command | Description |
|---------|-------------|
| `bun run ios` | Build and run on iOS simulator |
| `bun run android` | Build and run on Android emulator |
| `bun run web` | Start web development server |
| `bun start` | Start Expo dev server only |
| `bun run lint` | Check code with Ultracite |
| `bun run format` | Auto-fix code style issues |

## Configuration

Before publishing, update `app.json`:

```json
{
  "expo": {
    "name": "Your App Name",
    "slug": "your-app-slug",
    "scheme": "your-app-scheme",
    "ios": {
      "bundleIdentifier": "com.yourcompany.yourapp"
    },
    "android": {
      "package": "com.yourcompany.yourapp"
    }
  }
}
```

## EAS Builds (Optional)

For cloud builds or physical device testing:

```bash
# Install EAS CLI
bun install -g eas-cli

# Login to Expo
eas login

# Build for iOS simulator
eas build --platform ios --profile development --simulator

# Build for Android
eas build --platform android --profile development
```

## Project Structure

```
├── app/                  # Screens (file-based routing)
│   ├── _layout.tsx       # Root layout
│   ├── index.tsx         # Home screen
│   └── modal.tsx         # Modal screen
├── components/           # Reusable components
├── lib/                  # Utilities and hooks
├── theme/                # Theme configuration
├── assets/               # Images and fonts
└── global.css            # Tailwind styles
```

## About NativewindUI

[NativewindUI](https://nativewindui.com/) provides components that feel native on each platform. Unlike cross-platform UI libraries, NativewindUI prioritizes platform-specific design patterns.

## Resources

- [NativewindUI Docs](https://nativewindui.com/)
- [Expo Docs](https://docs.expo.dev/)
- [NativeWind Docs](https://www.nativewind.dev/)
- [Expo Router Docs](https://docs.expo.dev/router/introduction/)

## License

MIT
