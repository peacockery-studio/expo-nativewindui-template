# Expo NativewindUI Template

A starter template for building beautiful, native-feeling React Native apps with [Expo](https://expo.dev/) and [NativewindUI](https://nativewindui.com/).

## Features

- ✅ Expo SDK 52+ with TypeScript
- ✅ NativewindUI components for native look and feel
- ✅ Tailwind CSS styling with NativeWind
- ✅ Expo Router for navigation
- ✅ Development build ready
- ✅ Bun package manager for faster installation

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Bun](https://bun.sh/) - `curl -fsSL https://bun.sh/install | bash`
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [EAS CLI](https://docs.expo.dev/eas/) - `bun install -g eas-cli`
- [Expo Account](https://expo.dev/signup) for EAS builds
- iOS Simulator or Android Emulator (for development builds)

### Installation

1. Create a new project using this template:

```bash
npx create-expo-app my-app --template expo-nativewindui-template
```

2. Navigate to your project directory:

```bash
cd my-app
```

3. Install dependencies:

```bash
bun install
```

### Creating Development Builds

NativewindUI requires development builds to properly render native components. This is because NativewindUI uses native modules that aren't available in Expo Go.

#### Option 1: EAS Build (Recommended)

Login to your Expo account:

```bash
eas login
```

For Android:

```bash
eas build --platform android --profile development
```

For iOS Simulator:

```bash
eas build --platform ios --profile development --simulator
```

For iOS Device (requires Apple Developer Account):

```bash
eas build --platform ios --profile development
```

#### Option 2: Local Development Build

For Android:

```bash
bunx expo run:android
```

For iOS (macOS only):

```bash
bunx expo run:ios
```

### Installing Your Development Build

After your build completes:

- **EAS Build**: The CLI will provide a QR code to install the app, or you can download it from the [Expo dashboard](https://expo.dev). You can also use [Expo Orbit](https://docs.expo.dev/eas/orbit/) to manage and install builds.

- **Local Build**: The app will be installed automatically on your connected device or simulator.

### Starting Development Server

Once your development build is installed, start the development server:

```bash
bun dev
bun start
```

Your development build will connect to this server for live updates as you code.

### Important Configuration Steps

Before you start development, make sure to update the following files with your app information:

1. `app.json` - Update the following fields:
   - `name`: Your app name
   - `slug`: URL-friendly name for your app
   - `scheme`: Your app's URL scheme
   - `bundleIdentifier` (iOS) and `package` (Android): Your app's package identifiers
   - `projectId`: Your EAS project ID

2. `package.json` - Update the `name` field with your project name

3. `cesconfig.json` - Update the following fields:
   - `projectName`: Your project name
   - Adjust any other configuration options as needed

## About NativewindUI

[NativewindUI](https://nativewindui.com/introduction) is a collection of reusable components, screens, and flows that prioritize native feel across iOS and Android platforms. It's not a cross-platform component library but rather a multi-platform collection that treats native feel as the highest benchmark.

NativewindUI components are designed to reflect the native feel of the platform they're built for. You can copy the components you need and customize them to fit your project's requirements.

## Development

This template requires development builds to properly test NativewindUI components, as they use native modules. Use the following commands to test your app:

```bash
# For iOS
bun ios

# For Android
bun android
```

## Resources

- [NativewindUI Documentation](https://nativewindui.com/)
- [Expo Documentation](https://docs.expo.dev/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [Bun Documentation](https://bun.sh/docs)
- [Expo Development Builds Guide](https://docs.expo.dev/develop/development-builds/create-a-build/)
- [Expo Orbit](https://docs.expo.dev/eas/orbit/)

## License

This project is licensed under the MIT License. 