# Products App
This is a React Native app for managing products.

## Getting Started
### Prerequisites
1. npm
2. react-native
3. MacOS (for building IOS app)
4. Android Studio (for building Android app)
5. eas-cli (for building EXPO app)

### Installing Dependencies
Run the following command to install dependencies:

```bash
npm install
```

### Building Android App 
1. clone the repository by running the following command:
```bash
git clone https://github.com/YoelEigner/products-app.git
```
2. navigate into the products-app folder
3. run the following command
```bash
npx react-native run-android
```
4. press a to select android build

### Building IOS App  
* not tested
* this project is missing IOS build files, to generate the neccesary files run `npx expo run:ios`
1. clone the repository by running the following command:
```bash
git clone https://github.com/YoelEigner/products-app.git
```
2. navigate into the products-app folder
3. run the following command
```bash
npx react-native run-android
```
5. press i to select IOS build


### Building the App with Expo
To build the Android app with Expo, run the following command:

```bash
eas build -p android
```

To build the IOS app with Expo, run the following command:

```bash
eas build
```
Or
```bash
expo start
```
This will start the Expo development server and open the app in the Expo client. You can then use the Expo client to preview the app on your device or emulator.

### Contributing
Feel free to submit issues or pull requests to this repository.

### License
This app is licensed under the MIT License. See the LICENSE file for more information.
